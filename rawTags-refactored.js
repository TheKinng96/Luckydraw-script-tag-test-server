;(function () {
	// --- CONFIGURATION ---
	const CONFIG = {
		apiBaseUrl: `https://41fb61a09c1f.ngrok-free.app/api`,
	}
	let countdownInterval = null // A global reference to the timer to clear it later

	/**
	 * Main function to orchestrate the script's logic.
	 */
	async function main() {
		console.log('rawTags-refactored.js: Initializing...')
		const shopId = getShopId()
		if (!shopId) {
			console.error('Promo Wheel: Missing data-shop-id attribute on script tag.')
			return
		}

		try {
			// 1. Initialize Campaign (with robust cache validation)
			const campaignData = await initializeCampaign(shopId)
			if (!campaignData) {
				console.log('Initialization ended: No active or valid campaign.')
				return
			}

			console.log('data', campaignData)
			// 2. Check page display rules
			if (!shouldShowOnPage(campaignData.displayRules)) {
				return
			}

			// 3. Load ALL UI elements into the DOM
			const ui = loadAllUI(campaignData.visuals)
			const storageKey = `promoState_${shopId}_${campaignData.id}`

			// 4. Attach all event listeners to the UI elements
			attachUIEventListeners(ui, storageKey, campaignData)

			// 5. Run the master UI controller to set the initial visibility on page load
			updateUIVisibility(ui, storageKey, campaignData)
		} catch (error) {
			console.error('An error occurred in main execution:', error)
		}
	}

	// --- CORE LOGIC & DATA FETCHING ---

	/**
	 * Initializes the campaign with robust cache validation.
	 */
	async function initializeCampaign(shopId) {
		const cacheKey = `promoWheelCache_${shopId}`
		try {
			const validationResponse = await fetch(
				`${CONFIG.apiBaseUrl}/wheel/last-updated-at?shop-id=${shopId}`,
			)

			if (validationResponse.status === 404) {
				localStorage.removeItem(cacheKey)
				return null
			}
			if (!validationResponse.ok)
				throw new Error(`Validation endpoint failed: ${validationResponse.status}`)

			const { campaignId: activeCampaignId, lastUpdatedAt: activeLastUpdatedAt } =
				await validationResponse.json()

			const cachedData = JSON.parse(localStorage.getItem(cacheKey))

			if (
				cachedData?.campaign.id === activeCampaignId &&
				cachedData?.campaign.updatedAt === activeLastUpdatedAt
			) {
				console.log('Cache is valid. Using cached campaign.')
				logImpression(shopId, activeCampaignId)
				return cachedData.campaign
			}

			console.log('Cache is invalid. Fetching full campaign data for:', activeCampaignId)
			const campaignResponse = await fetch(`${CONFIG.apiBaseUrl}/wheel?shop-id=${shopId}`)
			if (!campaignResponse.ok)
				throw new Error(`Failed to fetch campaign data for ${activeCampaignId}`)

			const campaign = await campaignResponse.json()
			localStorage.setItem(cacheKey, JSON.stringify({ campaign, fetchedAt: Date.now() }))
			return campaign
		} catch (error) {
			console.error('Failed to initialize campaign:', error)
			return null
		}
	}

	/**
	 * Securely logs an impression using the native Web Crypto API for HMAC signing.
	 * This does NOT require any external libraries.
	 */
	async function logImpression(shopId, campaignId) {
		// The Web Crypto API is available as `crypto` in all modern, secure (HTTPS) contexts.
		if (!window.crypto || !window.crypto.subtle) {
			console.error('Web Crypto API not available. Cannot send secure impression.')
			return
		}

		try {
			// Step 1: Fetch the one-time-use HMAC key and its ID.
			// API Assumption: GET /hmac returns { key: "...", keyId: "..." } where key is Base64 encoded.
			const hmacResponse = await fetch(`${CONFIG.apiBaseUrl}/hmac`)
			if (!hmacResponse.ok)
				throw new Error(`Failed to get HMAC credentials: ${hmacResponse.status}`)
			const { key, keyId } = await hmacResponse.json()

			// Step 2: Prepare the payload and the key for the Web Crypto API.
			const payload = JSON.stringify({ shopId, campaignId })
			const keyBytes = base64ToBytes(key) // Use helper to decode Base64 key

			// Import the raw key material for use with HMAC.
			const subtleKey = await crypto.subtle.importKey(
				'raw',
				keyBytes,
				{ name: 'HMAC', hash: 'SHA-256' },
				false, // The key is not extractable
				['sign'], // We intend to use this key for signing
			)

			// Step 3: Sign the payload string.
			const signatureBuffer = await crypto.subtle.sign(
				'HMAC',
				subtleKey,
				new TextEncoder().encode(payload), // The payload must be encoded to bytes
			)

			// Step 4: Convert the signature from an ArrayBuffer to a hex string for the header.
			const signature = Array.from(new Uint8Array(signatureBuffer))
				.map((byte) => byte.toString(16).padStart(2, '0'))
				.join('')

			// Step 5: Send the secure request.
			const impressionResponse = await fetch(`${CONFIG.apiBaseUrl}/impressions`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-HMAC-Key-Id': keyId,
					'X-HMAC-Signature': signature,
				},
				body: payload,
				keepalive: true,
			})

			if (!impressionResponse.ok)
				throw new Error(`Impression POST failed: ${impressionResponse.status}`)
			console.log('HMAC-signed impression sent successfully via Web Crypto API.')
		} catch (error) {
			console.error('Failed to send HMAC-signed impression:', error)
		}
	}

	/**
	 * Handles the spin API call, updates state, and triggers a UI refresh.
	 */
	async function spinWheel(campaignData, ui, email, storageKey, shopId) {
		ui.submitButton.disabled = true
		ui.submitButton.textContent = '...'

		try {
			// The server determines the prize and returns coupon details
			const response = await fetch(`${CONFIG.apiBaseUrl}/campaigns/${campaignData.id}/spin`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, shopId }),
			})
			const result = await response.json()
			if (!response.ok) throw new Error(result.message || 'This offer is not available.')

			// --- SUCCESS ---
			const { countdownDurationSeconds, couponCode, prize } = result
			const stateUpdates = {
				spinCount: getStorageData(storageKey).spinCount + 1,
				lastSpinTimestamp: Date.now(),
				isMinimized: false, // A spin is a final action
			}
			if (couponCode && countdownDurationSeconds > 0) {
				stateUpdates.couponCode = couponCode
				stateUpdates.couponExpiresAt = Date.now() + countdownDurationSeconds * 1000
			}
			updateState(storageKey, stateUpdates)

			// ... (Optional wheel animation logic could go here) ...
			alert(`Congratulations! You won: ${prize}`)
			updateUIVisibility(ui, storageKey, campaignData) // Re-render UI to show the After-Spin Bar
		} catch (error) {
			alert(error.message)
			ui.submitButton.disabled = false
			ui.submitButton.textContent = campaignData.visuals.buttonText || 'TRY YOUR LUCK'
		}
	}

	// --- MASTER UI CONTROLLER & STATE MANAGEMENT ---

	/**
	 * The single source of truth for what is visible on the screen.
	 */
	function updateUIVisibility(ui, storageKey, campaignData) {
		hideAllComponents(ui)
		if (countdownInterval) clearInterval(countdownInterval)

		const state = getStorageData(storageKey)
		const { anticheat, urgentBar } = campaignData

		// Priority 1: Show After-Spin Bar if there's an active coupon.
		if (
			state.couponCode &&
			state.couponExpiresAt &&
			Date.now() < state.couponExpiresAt &&
			urgentBar?.afterSpin.enabled
		) {
			showAfterSpinBar(ui, state, urgentBar.afterSpin)
			return
		}

		// Priority 2: Determine if the interactive widget (Popup or Trigger) should be shown.
		const interactiveState = determineInteractiveState(anticheat, state)
		if (interactiveState === 'SHOW_POPUP') {
			handleDisplayTrigger(ui.popupContainer, campaignData.displayRules)
			return
		}
		if (interactiveState === 'SHOW_TRIGGER') {
			ui.triggerButton.style.display = 'block'
			return
		}

		// Priority 3: As a fallback, show the Before-Spin Bar if enabled.
		if (urgentBar?.beforeSpin.enabled) {
			showBeforeSpinBar(ui, urgentBar.beforeSpin)
		}
	}

	function determineInteractiveState(anticheatRules, state) {
		const { resetPeriod = 'never', maxSpinsPerUser = 1 } = anticheatRules || {}
		const startOfCurrentPeriod = getStartOfPeriod(resetPeriod)

		if (state.lastSpinTimestamp >= startOfCurrentPeriod && state.spinCount >= maxSpinsPerUser)
			return 'SHOW_NOTHING'
		if (state.lastClosedTimestamp >= startOfCurrentPeriod && state.isMinimized)
			return 'SHOW_TRIGGER'
		return 'SHOW_POPUP'
	}

	function getStorageData(key) {
		const defaultState = {
			spinCount: 0,
			lastSpinTimestamp: 0,
			lastClosedTimestamp: 0,
			isMinimized: false,
			couponCode: null,
			couponExpiresAt: null,
		}
		try {
			const data = localStorage.getItem(key)
			return data ? { ...defaultState, ...JSON.parse(data) } : defaultState
		} catch (e) {
			console.error('error getting storage data', e)
			return defaultState
		}
	}

	function updateState(key, updates) {
		const currentState = getStorageData(key)
		localStorage.setItem(key, JSON.stringify({ ...currentState, ...updates }))
	}

	// --- UI & EVENT LISTENERS ---

	function loadAllUI(visuals) {
		visuals = visuals || {}
		const css = `
			.promo-urgent-bar { position: fixed; top: 0; left: 0; width: 100%; z-index: 9998; padding: 10px; text-align: center; color: #fff; display: none; background: #333; }
			.promo-urgent-bar--after-spin { background: ${visuals.afterSpinBarColor || '#28a745'}; }
			.promo-widget-container { position: fixed; bottom: 20px; right: 20px; z-index: 9999; }
			.promo-wheel-popup { transition: opacity 0.3s, transform 0.3s; transform: translateY(20px); opacity: 0; pointer-events: none; }
			.promo-wheel-popup.visible { transform: translateY(0); opacity: 1; pointer-events: auto; }
			.promo-wheel-trigger { width: 60px; height: 60px; background: ${visuals.buttonColor || '#ff5722'} url('${visuals.triggerIconUrl || ''}') center/60% no-repeat; border-radius: 50%; border: none; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2); display: none; }
			.promo-wheel-content { position: relative; background: #fff; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); padding: 20px; width: 320px; color: #333; }
			.promo-wheel-close { position: absolute; top: 5px; right: 10px; font-size: 24px; color: #999; background: none; border: none; cursor: pointer; }
		`
		const style = document.createElement('style')
		style.textContent = css
		document.head.appendChild(style)

		const barContainer = document.createElement('div')
		barContainer.innerHTML = `<div class="promo-urgent-bar promo-urgent-bar--before-spin"></div><div class="promo-urgent-bar promo-urgent-bar--after-spin"><span class="message"></span> <span class="coupon-code" style="font-weight: bold;"></span> <span class="countdown-timer"></span></div>`
		document.body.prepend(barContainer)

		const widgetContainer = document.createElement('div')
		widgetContainer.className = 'promo-widget-container'
		widgetContainer.innerHTML = `<div class="promo-wheel-popup"><div class="promo-wheel-content"><button class="promo-wheel-close" aria-label="Close">×</button><form class="promo-wheel-form"><input type="email" placeholder="Enter your email" required /><button type="submit">${visuals.buttonText || 'TRY LUCK'}</button></form></div></div><button class="promo-wheel-trigger" aria-label="Open promo"></button>`
		document.body.appendChild(widgetContainer)

		return {
			beforeSpinBar: document.querySelector('.promo-urgent-bar--before-spin'),
			afterSpinBar: document.querySelector('.promo-urgent-bar--after-spin'),
			popupContainer: widgetContainer.querySelector('.promo-wheel-popup'),
			triggerButton: widgetContainer.querySelector('.promo-wheel-trigger'),
			closeButton: widgetContainer.querySelector('.promo-wheel-close'),
			form: widgetContainer.querySelector('.promo-wheel-form'),
			emailInput: widgetContainer.querySelector('input[type="email"]'),
			submitButton: widgetContainer.querySelector('button[type="submit"]'),
		}
	}

	function attachUIEventListeners(ui, storageKey, campaignData) {
		ui.closeButton.addEventListener('click', () => {
			updateState(storageKey, { isMinimized: true, lastClosedTimestamp: Date.now() })
			updateUIVisibility(ui, storageKey, campaignData)
		})
		ui.triggerButton.addEventListener('click', () => {
			updateState(storageKey, { isMinimized: false })
			updateUIVisibility(ui, storageKey, campaignData)
		})
		ui.form.addEventListener('submit', (e) => {
			e.preventDefault()
			const email = ui.emailInput.value
			if (validateEmail(email)) {
				spinWheel(campaignData, ui, email, storageKey, getShopId())
			} else {
				alert('Please enter a valid email address.')
			}
		})
	}

	function hideAllComponents(ui) {
		ui.beforeSpinBar.style.display = 'none'
		ui.afterSpinBar.style.display = 'none'
		ui.popupContainer.classList.remove('visible')
		ui.triggerButton.style.display = 'none'
	}

	function showBeforeSpinBar(ui, beforeSpinConfig) {
		ui.beforeSpinBar.textContent = beforeSpinConfig.text || 'A special offer is available!'
		ui.beforeSpinBar.style.display = 'block'
	}

	function showAfterSpinBar(ui, state, afterSpinConfig) {
		const bar = ui.afterSpinBar
		bar.querySelector('.message').textContent = afterSpinConfig.text || 'Your coupon:'
		bar.querySelector('.coupon-code').textContent = state.couponCode
		bar.style.display = 'block'
		startCountdown(state.couponExpiresAt, bar.querySelector('.countdown-timer'))
	}

	function startCountdown(endTime, element) {
		const updateTimer = () => {
			const remaining = endTime - Date.now()
			if (remaining <= 0) {
				element.textContent = ' (Expired!)'
				clearInterval(countdownInterval)
				return
			}
			const minutes = Math.floor((remaining / 1000 / 60) % 60)
				.toString()
				.padStart(2, '0')
			const seconds = Math.floor((remaining / 1000) % 60)
				.toString()
				.padStart(2, '0')
			element.textContent = ` (Expires in ${minutes}:${seconds})`
		}
		updateTimer()
		countdownInterval = setInterval(updateTimer, 1000)
	}

	// --- SIMPLE UTILITY FUNCTIONS ---

	function getShopId() {
		return 'PA01515465'
	}

	function getStartOfPeriod(period) {
		const d = new Date()
		if (period === 'daily') return d.setHours(0, 0, 0, 0)
		return 0
	}

	function validateEmail(email) {
		return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			String(email).toLowerCase(),
		)
	}

	/**
	 * Determines if the widget should be shown on the current page based on a set of rules.
	 * @param {string[]} displayRules - An array of strings representing display rules.
	 *   - Predefined keywords: 'shop', 'cart', 'products', 'thankYou'.
	 *   - Any other string is treated as a custom URL path segment to match.
	 * @returns {boolean} - True if the current page matches any of the rules, false otherwise.
	 */
	function shouldShowOnPage(displayRules) {
		console.log('Running display rules check with:', displayRules)

		// 1. Defensive Check: If rules are missing or empty, don't show the widget.
		if (!displayRules || !Array.isArray(displayRules) || displayRules.length === 0) {
			console.log('No display rules provided. Aborting.')
			return false
		}

		// 2. Get the current page's path and make it lowercase for case-insensitive matching.
		const currentPath = window.location.pathname.toLowerCase()

		// --- Helper functions for clarity and re-usability ---

		// Checks for common e-commerce thank you / order confirmation page paths.
		const isThankYouPage = (path) => path.includes('/thank_you')

		// Checks for common product page (PDP) and collection/listing page (PLP) paths.
		const isProductPage = (path) =>
			path.includes('/products') || // Covers both '/products' and '/products/...'
			path.includes('/collections/')

		// Checks for common cart page paths.
		const isCartPage = (path) => path === '/cart' || path.includes('/cart/')

		// 3. Use `some` to check if ANY rule in the array matches the current page.
		//    This is efficient because it stops and returns `true` on the first match.
		const shouldShow = displayRules.some((rule) => {
			const cleanRule = rule.toLowerCase().trim() // Sanitize the rule from the array

			switch (cleanRule) {
				case 'shop':
					// 'shop' means show on ALL pages EXCEPT the thank you page.
					return !isThankYouPage(currentPath)

				case 'thankyou': // Use 'thankyou' as the normalized keyword
					return isThankYouPage(currentPath)

				case 'products':
					return isProductPage(currentPath)

				case 'cart':
					return isCartPage(currentPath)

				default:
					// If the rule is not a predefined keyword, treat it as a custom URL segment.
					// This allows for flexible matching, e.g., 'about-us' will match '/about-us'.
					// Note: We check if the rule is NOT empty to avoid accidental matches.
					if (cleanRule) {
						return currentPath.includes(cleanRule)
					}
					return false
			}
		})

		if (shouldShow) {
			console.log(`Page match found. Showing widget on: ${currentPath}`)
		} else {
			console.log(`No page match. Hiding widget on: ${currentPath}`)
		}

		return shouldShow
	}

	/**
	 * Controls WHEN an element is made visible, based on simplified trigger rules.
	 *
	 * @param {HTMLElement} element - The popup or widget element to make visible.
	 * @param {boolean} showOnScroll - Show pop up on scroll
	 */
	function handleDisplayTrigger(element, showOnScroll) {
		const showElement = () => {
			element.classList.add('visible')
		}

		// --- Primary Logic: A simple if/else statement ---

		if (showOnScroll) {
			// --- Logic for "Show on Scroll" ---
			console.log(`Trigger set to: Show on Scroll.`)

			const onScroll = () => {
				// Calculate how far down the page the user's viewport is
				const scrollPosition = window.scrollY + window.innerHeight
				const requiredPosition = document.body.scrollHeight * (5 / 100)

				if (scrollPosition >= requiredPosition) {
					showElement()
					// IMPORTANT: For performance, remove the listener once it has fired.
					window.removeEventListener('scroll', onScroll)
					console.log(`Scroll trigger fired at ${5}%.`)
				}
			}

			// Add a passive listener for better scroll performance.
			window.addEventListener('scroll', onScroll, { passive: true })
		} else {
			// --- Logic for "Show on Ready" (The Default) ---
			console.log('Trigger set to: Show on Ready.')

			// Use a small timeout even for "immediate" display. This makes the
			// animation feel smoother and prevents it from being too jarring.
			setTimeout(showElement, 500)
		}
	}

	/**
	 * Helper function to decode a Base64 string into a byte array.
	 * Required for the Web Crypto API's `importKey` method.
	 */
	function base64ToBytes(b64) {
		const binString = atob(b64)
		const bytes = new Uint8Array(binString.length)
		for (let i = 0; i < binString.length; i++) {
			bytes[i] = binString.charCodeAt(i)
		}
		return bytes
	}

	// --- KICK OFF SCRIPT ---
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		main()
	} else {
		document.addEventListener('DOMContentLoaded', main)
	}
})()
