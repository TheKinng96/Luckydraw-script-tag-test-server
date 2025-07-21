export const rawCode = `
// ALL COMMENTS WILL BE REMOVED FROM THE OUTPUT
/**
 * @typedef {Object} Position
 * @property {string} bottom-left
 * @property {string} bottom-right
 * @property {string} left
 * @property {string} right
 */

/**
 * @typedef {Object} TriggerButtonTextStyle
 * @property {string} always
 * @property {string} on-hover
 * @property {string} none
 */

/**
 * @typedef {Object} TriggerButtonConfig
 * @property {boolean} enabled
 * @property {Position} position
 * @property {number} paddingFromVertical
 * @property {number} paddingFromHorizontal
 * @property {TriggerButtonTextStyle} textStyle
 * @property {number} size
 */

/**
 * @typedef {Object} DisplayStyle
 * @property {string} right
 * @property {string} left
 * @property {string} center
 */

/**
 * @typedef {Object} TriggerButtonAnimation
 * @property {string} none
 * @property {string} spin
 * @property {string} pulse
 * @property {string} shake
 */

/**
 * @typedef {Object} TriggerButtonStyle
 * @property {string} none
 * @property {string} follow
 */

/**
 * @typedef {Object} TriggerButtonDesign
 * @property {string} text
 * @property {TriggerButtonStyle} style
 * @property {TriggerButtonAnimation} animation
 */

/**
 * @typedef {Object} ThemeColorSettings
 * @property {string} background
 * @property {string} trigger
 * @property {string} textColor
 * @property {string} button
 * @property {string} pointer
 * @property {string} wheelBorder
 * @property {string} center
 * @property {string} centerCircleBorder
 * @property {string} closeIcon
 * @property {string} triggerBackground
 */

/**
 * @typedef {Object} ThemeSliceSettings
 * @property {string} color
 * @property {number} sliceOrder
 * @property {string} textColor
 */

/**
 * @typedef {Object} DesignSettings
 * @property {string} themeId
 * @property {DisplayStyle} displayStyle
 * @property {Object} triggerButtonPosition
 * @property {TriggerButtonConfig} triggerButtonPosition.desktop
 * @property {TriggerButtonConfig} triggerButtonPosition.mobile
 * @property {TriggerButtonDesign} triggerButtonDesign
 * @property {Object} colors
 * @property {ThemeColorSettings} colors.theme
 * @property {ThemeSliceSettings[]} colors.prizes
 */

/**
 * @typedef {Object} TimeBarPosition
 * @property {string} top
 * @property {string} bottom
 */

/**
 * @typedef {Object} TimeBar
 * @property {boolean} enabled
 * @property {Object} countdown
 * @property {boolean} countdown.enabled
 * @property {number} countdown.durationInMinutes
 * @property {string} backgroundColor
 * @property {string} textColor
 * @property {string} text
 * @property {TimeBarPosition} position
 */

/**
 * @typedef {Object} FormSettings
 * @property {Object} beforeSpinForm
 * @property {string} beforeSpinForm.title
 * @property {string} beforeSpinForm.subtitle
 * @property {Object} beforeSpinForm.name
 * @property {boolean} beforeSpinForm.name.enabled
 * @property {string} beforeSpinForm.name.placeholder
 * @property {Object} beforeSpinForm.email
 * @property {boolean} beforeSpinForm.email.enabled
 * @property {string} beforeSpinForm.email.placeholder
 * @property {Object} beforeSpinForm.phoneNumber
 * @property {boolean} beforeSpinForm.phoneNumber.enabled
 * @property {boolean} beforeSpinForm.phoneNumber.forceInternationalFormat
 * @property {string} beforeSpinForm.phoneNumber.placeholder
 * @property {string} beforeSpinForm.consentText
 * @property {string} beforeSpinForm.triggerButtonText
 *
 * @property {Object} winningForm
 * @property {string} winningForm.winningMessage
 * @property {string} winningForm.reminder
 * @property {Object} winningForm.copyButton
 * @property {boolean} winningForm.copyButton.enabled
 * @property {string} winningForm.copyButton.text
 * @property {string} winningForm.confirmationMessage
 * @property {Object} winningForm.continueButton
 * @property {string} winningForm.continueButton.text
 *
 * @property {TimeBar} timeBarAfterSpin
 * @property {TimeBar} timeBarBeforeSpin
 */

/**
 * @typedef {Object} Slice
 * @property {string} label
 * @property {string} id
 * @property {string} couponCode
 * @property {number} probability
 * @property {number} sliceOrder
 * @property {string} color
 * @property {string} textColor
 */

/**
 * @typedef {Object} LimitedByType
 * @property {'ipAddress'} type
 * @property {'email'} email
 */

/**
 * @typedef {Object} AntiCheatSettings
 * @property {boolean} enabledMaxSpinsPerUser
 * @property {LimitedByType[]} limitBy
 * @property {number} maxSpinsPerUser
 * @property {boolean} enabledMaxSpins
 * @property {number} maxSpins
 * @property {string} maxSpinsMessage
 * @property {Object} maxSpinsSummary
 * @property {boolean} maxSpinsSummary.enabled
 * @property {string} maxSpinsSummary.cta
 * @property {boolean} maxSpinsSummary.enabledCount
 * @property {boolean} maxSpinsSummary.enabledCta
 * @property {'fixed' | 'remaining' | 'claimed'} maxSpinsSummary.showStyle
 * @property {'percentage' | 'count'} maxSpinsSummary.format
 * @property {number} maxSpinsSummary.fixedValue
 * @property {boolean} enabledResetSpinCount
 * @property {number} resetSpinCount
 */

/**
 * @typedef {Object} PhoneCountryCode
 * @property {string} name
 * @property {string} dialCode
 * @property {string} code
 */

/**
 * @typedef {Object} Settings
 * @property {string} campaignId
 * @property {number} totalConversions
 * @property {Object} colors
 * @property {string} colors.buttonTextColor
 * @property {Object} text
 * @property {string} text.copyButtonDescription
 * @property {string} text.toastSuccess
 * @property {FormSettings} formSettings
 * @property {DesignSettings} designSettings
 * @property {Slice[]} slices
 * @property {DisplayStyle} displayStyle
 * @property {AntiCheatSettings} antiCheat
 * @property {PhoneCountryCode[]} phoneCountryCodes
 */

// CSS Variables for maintainability
const cssVariables = \`
  :root {
    --lucky-draw-z-index: 9999;
    --lucky-draw-overlay-opacity: 0.5;
    --lucky-draw-modal-max-width: 896px;
    --lucky-draw-spacing: 16px;
    --lucky-draw-border-radius: 6px;
    --lucky-draw-error-color: #ef4444;
    --lucky-draw-text-color: #1e293b;
    --lucky-draw-placeholder-color: #64748b;
    --lucky-draw-background-light: #f1f5f9;
  }
\`

const css = \`

  \${cssVariables}
  .lucky-draw-container {
    position: fixed;
    inset: 0;
    z-index: var(--lucky-draw-z-index);
  }
  .lucky-draw-container.center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lucky-draw-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, var(--lucky-draw-overlay-opacity));
    z-index: var(--lucky-draw-z-index);
  }
  .lucky-draw-modal-container {
    position: relative;
    z-index: calc(var(--lucky-draw-z-index) + 1);
    width: 100%;
    max-width: var(--lucky-draw-modal-max-width);
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
  }
  .lucky-draw-modal-container.center {
    height: auto;
    border-radius: var(--lucky-draw-border-radius);
  }
  @keyframes lucky-draw-slide-in-right {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
  @keyframes lucky-draw-slide-in-left {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
  @keyframes lucky-draw-slide-in-top {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  }
  .lucky-draw-ml-auto { margin-left: auto; }
  .lucky-draw-mx-auto { margin: auto; }
  .lucky-draw-close-button {
    position: absolute;
    top: var(--lucky-draw-spacing);
    right: var(--lucky-draw-spacing);
    z-index: 10002;
    border: 0;
    background: transparent;
    color: #6b7280;
  }
  .lucky-draw-close-button:hover { color: #374151; }
  .lucky-draw-close-button:focus { outline: none; }
  .lucky-draw-size-6 { width: 24px; height: 24px; }
  .lucky-draw-modal-content {
    display: flex;
    gap: calc(var(--lucky-draw-spacing) * 2);
    height: 100%;
    justify-content: center;
    flex-direction: column;
  }
  .lucky-draw-modal-content-wrapper {
    display: flex;
    gap: var(--lucky-draw-spacing);
    align-items: center;
    justify-content: space-between;
  }
  .lucky-draw-flex-row-reverse { flex-direction: row-reverse; }
  .lucky-draw-form {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--lucky-draw-spacing);
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .lucky-draw-form-title-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .lucky-draw-form-title {
    text-align: center;
    line-height: 36px;
    font-size: 30px;
    font-weight: 700;
  }
  .lucky-draw-form-subtitle {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    max-width: 320px;
  }
  .lucky-draw-input-fields {
    display: flex;
    flex-direction: column;
    gap: var(--lucky-draw-spacing);
    max-width: 455px;
  }
  .lucky-draw-text-slate-500 { color: var(--lucky-draw-placeholder-color); }
  .lucky-draw-input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .lucky-draw-input-field {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 8px;
    background-color: var(--lucky-draw-background-light);
    border: 1px solid var(--lucky-draw-background-light);
    border-radius: var(--lucky-draw-border-radius);
  }
  .lucky-draw-input-field:focus-within {
    outline: 4px double var(--lucky-draw-placeholder-color);
  }
  .lucky-draw-phone-input-field-wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
  }
  .lucky-draw-input-field select,
  .lucky-draw-input-field input {
    flex: 1;
    border-radius: var(--lucky-draw-border-radius);
    border: 1px solid transparent;
    background-color: transparent;
    padding: 8px;
    color: var(--lucky-draw-text-color);
  }
  .lucky-draw-input-field select {
    max-width: 120px;
    padding: 0;
  }
  .lucky-draw-input-field input::placeholder {
    color: var(--lucky-draw-placeholder-color);
  }
  .lucky-draw-input-field select:focus,
  .lucky-draw-input-field input:focus {
    outline: 2px solid transparent;
  }
  .lucky-draw-input-field svg {
    width: 32px;
    height: 32px;
    margin-left: auto;
  }
  .lucky-draw-hidden { display: none; }
  .lucky-draw-input-field-error {
    font-size: 12px;
    line-height: 16px;
    color: var(--lucky-draw-error-color);
    margin-top: 4px;
  }
  .lucky-draw-consent-input {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
  .lucky-draw-consent-input input {
    height: 20px;
    width: 20px;
    border-radius: var(--lucky-draw-border-radius);
    border: 1px solid var(--lucky-draw-background-light);
    background-color: #ffffff;
    margin: 0;
  }
  .lucky-draw-consent-input label {
    font-size: 12px;
    line-height: 20px;
    cursor: pointer;
    margin: 0;
  }
  .lucky-draw-progress-bar-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }
  .lucky-draw-progress-bar {
    width: 100%;
    height: 8px;
    border-radius: 16px;
    background-color: oklch(84.1536% 0.007965 265.754874);
    border: 1px solid oklch(0.71 0.04 256.83 / 0.3);
    appearance: none;
    overflow: hidden;
  }
  .lucky-draw-progress-bar::-webkit-progress-value {
    background-color: oklch(78.452% 0.132529 181.911977);
  }
  .lucky-draw-progress-bar::-moz-progress-bar {
    background-color: oklch(78.452% 0.132529 181.911977);
  }
  .lucky-draw-progress-bar-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    line-height: 16px;
  }
  .lucky-draw-progress-bar-cta {
    width: 100%;
    text-align: left;
    font-size: 12px;
    line-height: 16px;
  }
  .lucky-draw-spin-button {
    border-radius: var(--lucky-draw-border-radius);
    padding: 8px 16px;
    cursor: pointer;
    border: 0;
  }
  .lucky-draw-error {
    border-color: var(--lucky-draw-error-color) !important;
    color: var(--lucky-draw-error-color) !important;
  }
  .lucky-draw-winner-form-container {
    display: flex;
    flex-direction: column;
    gap: var(--lucky-draw-spacing);
    flex: 1;
  }
  .lucky-draw-winner-form-wrapper {
    margin: auto;
    display: flex;
    max-width: 384px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--lucky-draw-spacing);
    padding: var(--lucky-draw-spacing);
  }
  .lucky-draw-winner-form-message {
    text-align: center;
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
  }
  .lucky-draw-winner-form-reminder {
    max-width: 320px;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
  }
  .lucky-draw-winner-form-coupon {
    display: flex;
    width: 100%;
    max-width: 352px;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border-radius: 4px;
    background-color: #ffffff;
    color: #94a3b8;
  }
  .lucky-draw-winner-form-coupon span {
    font-size: 12px;
    line-height: 16px;
  }
  .lucky-draw-winner-form-coupon p {
    font-size: 18px;
    line-height: 28px;
    color: black;
    margin: 0;
  }
  .lucky-draw-copy-button,
  .lucky-draw-continue-button {
    display: inline-block;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .lucky-draw-copy-button {
    background-color: transparent;
    color: oklch(84.1536% 0.007965 265.754874);
    border: 1px solid oklch(84.1536% 0.007965 265.754874);
  }
  .lucky-draw-copy-button:hover {
    background-color: oklch(84.1536% 0.007965 265.754874);
    color: oklch(20.7682% 0.039824 265.754874);
  }
  .lucky-draw-continue-button {
    width: 100%;
    border: none;
    border-radius: 8px;
    background-color: #3b82f6;
    color: #ffffff;
  }
  .lucky-draw-toast {
    position: fixed;
    top: var(--lucky-draw-spacing);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 8px;
    z-index: calc(var(--lucky-draw-z-index) + 100);
  }
  .lucky-draw-toast svg {
    flex-shrink: 0;
  }
  .lucky-draw-spinner {
    animation: lucky-draw-spin 1s linear infinite;
    display: none;
  }
  @keyframes lucky-draw-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .lucky-draw-spin-button.loading {
    opacity: 0.8;
    cursor: not-allowed;
  }
  .lucky-draw-spin-button.loading .lucky-draw-spinner {
    display: inline-block;
    margin-right: 8px;
  }
  .lucky-draw-spin-button.loading span {
    display: none;
  }
	.lucky-draw-trigger-button-container {
		position: relative;
		z-index: 9999;
	}
	.lucky-draw-trigger-button-container > div {
		position: fixed;
	}
	.lucky-draw-trigger-button-container > div.bottom-left {
		bottom: 0;
		left: 0;
	}
	.lucky-draw-trigger-button-container > div.bottom-right {
		bottom: 0;
		right: 0;
	}
	.lucky-draw-trigger-button-container > div.left {
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	.lucky-draw-trigger-button-container > div.right {
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	.lucky-draw-trigger-button {
		position: relative;
		display: flex;
		align-items: center;
		background: transparent;
		border: none;
	}
	.lucky-draw-trigger-button-icon {
		z-index: 50;
		transition: transform 0.3s;
	}
	.lucky-draw-trigger-button-text {
		margin-left: -12px;
		overflow: hidden;
		transition: all 0.3s ease-out;
	}
	.lucky-draw-trigger-button-text.always {
		max-width: 200px;
		opacity: 1;
	}
	.lucky-draw-trigger-button-text.hover {
		max-width: 0;
		opacity: 0;
	}
	.lucky-draw-trigger-button:hover .lucky-draw-trigger-button-text {
		max-width: 200px;
		opacity: 1;
	}
	.lucky-draw-trigger-button-text > div {
		white-space: nowrap;
		padding: 4px 16px;
	}
	/* Spin: continuously rotates the SVG */
	.lucky-draw-spin {
		animation: spin 2s linear infinite;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	/* Pulse: scales the element up and down */
	.lucky-draw-pulse {
		animation: pulse 1.5s ease-in-out infinite;
	}
	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
	}

	/* Shake: slight horizontal translation with a pause */
	.lucky-draw-shake {
		animation: shake 2s ease-in-out infinite;
	}
	@keyframes shake {
		0%,
		25% {
			transform: translateX(0);
		}
		30% {
			transform: translateX(-3px);
		}
		35% {
			transform: translateX(3px);
		}
		40% {
			transform: translateX(-3px);
		}
		45% {
			transform: translateX(3px);
		}
		100% {
			transform: translateX(0);
		}
	}
  @media (max-width: 896px) {
    .lucky-draw-modal-content {
      padding: var(--lucky-draw-spacing);
    }
    .lucky-draw-modal-content input {
      font-size: 16px;
      line-height: 1.4;
    }
    .lucky-draw-modal-content-wrapper {
      flex-direction: column;
    }
    #lucky-draw-winner-form,
    #lucky-draw-before-spin-form {
      padding: 0 8px;
      box-sizing: border-box;
    }
    #lucky-draw-wheel {
      margin: auto !important;
      max-width: 90% !important;
      max-height: 90% !important;
    }
    .lucky-draw-modal-container {
      width: 100% !important;
      height: 100% !important;
      overflow: scroll;
    }
    @keyframes lucky-draw-slide-down {
      from { transform: translateY(0); }
      to { transform: translateY(100%); }
    }
    @keyframes lucky-draw-slide-up {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    @keyframes lucky-draw-center-wheel {
      from { transform: translateY(0); }
      to { transform: translateY(50%); }
    }
    @keyframes lucky-draw-reset-wheel {
      from { transform: translateY(50%); }
      to { transform: translateY(0); }
    }
    .lucky-draw-sliding-down {
      animation: lucky-draw-slide-down 0.5s ease-out forwards;
    }
    .lucky-draw-sliding-up {
      animation: lucky-draw-slide-up 0.5s ease-out forwards;
    }
    .lucky-draw-wheeling-center {
      animation: lucky-draw-center-wheel 0.5s ease-out forwards;
    }
    .lucky-draw-wheeling-reset {
      animation: lucky-draw-reset-wheel 0.5s ease-out forwards;
    }
    .lucky-draw-wheel-hidden { display: none; }
    .lucky-draw-input-field select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      padding-right: 24px;
      border: none;
      background: transparent url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%227%22%20viewBox%3D%220%200%2012%207%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M6%207L12%200H0L6%207z%22%20fill%3D%22%231e293b%22/%3E%3C/svg%3E") no-repeat right 8px center;
      background-size: 12px 7px;
      color: var(--lucky-draw-text-color);
    }
  }
\`

const closeSvg = \`
  <svg xmlns="http://www.w3.org/2000/svg" class="lucky-draw-size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
\`

const isMobile = window.innerWidth <= 896

/**
 * The tag will be executed every time the window is loaded
 * We need to keep track on the following:
 * 1. If the user has spun and not yet reset
 * 2. If the user has closed the wheel but not spin yet
 */

// State management
const state = {
	prefix: 'lucky-draw-',
	localStorageKey: 'lucky-draw-executed',
	lastFetchKey: 'lucky-draw-last-fetch',
	closeKey: 'lucky-draw-close',
	beforeTimeBarCloseKey: 'lucky-draw-before-time-bar-close',
	afterTimeBarCloseKey: 'lucky-draw-after-time-bar-close',
	settingsKey: 'lucky-draw-settings',
	timeBarStartKey: 'lucky-draw-time-bar-start',
	timeBarKey: 'lucky-draw-time-bar',
	triggerButtonKey: 'lucky-draw-trigger-button',
	luckyDrawMainComponentKey: 'lucky-draw-main-component',
	purchaseMadeAtKey: 'lucky-draw-purchase-made-at',
	settings: null,
	tagLoaded: false,
	formState: {
		email: '',
		name: '',
		phoneNumber: '',
		consent: false,
	},
	isSpinning: false,
	isModalOpen: false,
	isPreviouslyClosed: false, // If user closed the wheel, dont auto open the modal on refresh
	hasSpun: false,
	scrollY: 0,
	timeBarCountdown: 0,
	timeBarInterval: null,
	code: '', // winner code
	didAfterSpin: false,
}

// Utility functions
const utils = {
	onModalOpen() {
		// Lock body scroll
		state.scrollY = window.scrollY
		Object.assign(document.body.style, {
			position: 'fixed',
			top: \`-\${state.scrollY}px\`,
			width: '100%',
		})

		// Hide time bar when modal is open
		const timeBar = document.getElementById(state.timeBarKey)
		if (timeBar) {
			timeBar.style.display = 'none'
		}

		// Hide trigger button when modal is open
		const triggerButton = document.getElementById(state.triggerButtonKey)
		if (triggerButton) {
			triggerButton.style.display = 'none'
		}
	},
	onModalClose() {
		// Unlock body scroll
		Object.assign(document.body.style, {
			position: '',
			top: '',
			width: '',
		})
		window.scrollTo(0, state.scrollY)

		// Show time bar when modal is closed
		const timeBar = document.getElementById(state.timeBarKey)
		if (timeBar) {
			timeBar.style.display = 'block'
		}

		const luckyDraw = document.getElementById(state.luckyDrawMainComponentKey)
		if (luckyDraw) {
			luckyDraw.remove()
		}

		const triggerButton = document.getElementById(state.triggerButtonKey)

		if (state.hasSpun) {
			if (triggerButton) {
				triggerButton.style.display = 'none'
			}
			return
		}

		// Show trigger button when modal is closed & has not spun
		if (triggerButton) {
			triggerButton.style.display = state.hasSpun ? 'none' : 'block'
		}
	},
	sanitizeInput(value) {
		return value.replace(/[<>]/g, '')
	},
	formatNumber(value) {
		return value.toLocaleString('ja-JP', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		})
	},
	debounce: function (fn, ms) {
		var timeout
		return function () {
			var args = arguments
			clearTimeout(timeout)
			timeout = setTimeout(function () {
				fn.apply(null, args)
			}, ms)
		}
	},
}

// Form handling
const formUtils = {
	phoneCountryCodes: [],
	inputRules: {
		email: {
			required: 'required',
			pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,}$',
			title: 'Please enter a valid email address',
		},
		name: {
			required: 'required',
			pattern: '.+',
			title: 'Please enter your name',
		},
		phoneNumber: {
			required: 'required',
			pattern: '\\\\d{10,}',
			title: 'Please enter a valid phone number (10 digits or more)',
		},
	},

	generateInputField(field, beforeSpinForm) {
		const codes = this.phoneCountryCodes
		const icons = {
			email:
				'<svg class="lucky-draw-size-6 lucky-draw-text-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2.32698 17.7202 2.6146 18.362C2.90211 18.9265 3.36103 19.3854 3.92552 19.673C4.56725 20 5.40723 20 6.8 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>',
			name: '<svg class="lucky-draw-size-6 lucky-draw-text-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>',
			phoneNumber:
				'<svg class="lucky-draw-size-6 lucky-draw-text-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>',
		}

		const inputId = \`lucky-draw-before-spin-form-\${field}\`
		const inputType = { email: 'email', name: 'text', phoneNumber: 'tel' }
		const rules = this.inputRules[field]

		if (field === 'phoneNumber' && beforeSpinForm.phoneNumber.forceInternationalFormat) {
			const options = codes
				.map(
					(code) =>
						\`<option value="\${code.dialCode}" data-name="\${code.name}">\${code.dialCode} (\${code.name})</option>\`,
				)
				.join('')

			return \`
        <div class="lucky-draw-input-container">
          <div class="lucky-draw-input-field" id="\${inputId}-container">
            \${icons[field]}
            <div class="lucky-draw-phone-input-field-wrapper">
              <select id="\${inputId}-country-code">
                \${options}
              </select>
              <input type="\${inputType[field]}" id="\${inputId}" placeholder="\${beforeSpinForm[field].placeholder}" \${rules.required} pattern="\${rules.pattern}" title="\${rules.title}"/>
            </div>
            <svg id="\${inputId}-error-icon" class="lucky-draw-hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg>
          </div>
          <div id="\${inputId}-error" class="lucky-draw-input-field-error lucky-draw-hidden"></div>
        </div>
      \`
		}

		return \`
      <div class="lucky-draw-input-container">
        <div class="lucky-draw-input-field" id="\${inputId}-container">
          \${icons[field]}
          <input type="\${inputType[field]}" id="\${inputId}" placeholder="\${beforeSpinForm[field].placeholder}" \${rules.required} pattern="\${rules.pattern}" title="\${rules.title}"/>
          <svg id="\${inputId}-error-icon" class="lucky-draw-hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
        </div>
        <div id="\${inputId}-error" class="lucky-draw-input-field-error lucky-draw-hidden"></div>
      </div>
    \`
	},

	validateForm(beforeSpinForm) {
		let isValid = true
		const fields = ['email', 'name', 'phoneNumber']

		fields.forEach((field) => {
			if (beforeSpinForm[field].enabled) {
				const value = utils.sanitizeInput(state.formState[field])
				const errorEl = document.getElementById(\`lucky-draw-before-spin-form-\${field}-error\`)
				const errorIcon = document.getElementById(\`lucky-draw-before-spin-form-\${field}-error-icon\`)
				const container = document.getElementById(\`lucky-draw-before-spin-form-\${field}-container\`)

				if (!value) {
					isValid = false
					if (errorEl && errorIcon && container) {
						errorEl.textContent = \`\${field.charAt(0).toUpperCase() + field.slice(1)} is required.\`
						errorEl.classList.remove('lucky-draw-hidden')
						errorIcon.classList.remove('lucky-draw-hidden')
						container.classList.add('lucky-draw-error')
					}
				} else if (this.inputRules[field].pattern) {
					const regex = new RegExp(this.inputRules[field].pattern, 'i')
					if (!regex.test(value)) {
						isValid = false
						if (errorEl && errorIcon && container) {
							errorEl.textContent = this.inputRules[field].title
							errorEl.classList.remove('lucky-draw-hidden')
							errorIcon.classList.remove('lucky-draw-hidden')
							container.classList.add('lucky-draw-error')
						}
					}
				}
			}
		})

		const consentError = document.getElementById('lucky-draw-before-spin-form-consent-error')
		if (!state.formState.consent && consentError) {
			isValid = false
			consentError.textContent = 'You must give your consent.'
			consentError.classList.remove('lucky-draw-hidden')
		}

		return isValid
	},
}

// Wheel component
function createWheel({ canvas, theme, slices, displayStyle }) {
	const ctx = canvas.getContext('2d')
	if (!ctx) return null

	const config = {
		outsideRadius: 250,
		insideRadius: 50,
		textRadius: 180,
		pointerInset: 20,
		pointerAngle: displayStyle === 'right' ? (7 * Math.PI) / 6 : (11 * Math.PI) / 6,
	}

	let angleCurrent = config.pointerAngle - (Math.PI * 2) / slices.length / 2
	let lastSegment = 0

	function getWheelCenter() {
		return {
			x: canvas.width / 2,
			y: canvas.height / 2,
		}
	}

	function drawWheel() {
		if (!ctx) return
		const center = getWheelCenter()
		ctx.clearRect(0, 0, canvas.width, canvas.height)

		const arc = (Math.PI * 2) / slices.length
		const globalRotation = displayStyle === 'right' ? (6 * Math.PI) / 180 : (-6 * Math.PI) / 180

		ctx.save()
		ctx.translate(center.x, center.y)
		ctx.rotate(globalRotation)
		ctx.translate(-center.x, -center.y)

		ctx.font = 'bold 18px Arial'

		for (let i = 0; i < slices.length; i++) {
			const angle = angleCurrent + i * arc
			const slice = slices[i]
			ctx.fillStyle = slice.color

			// Draw slice
			ctx.beginPath()
			ctx.arc(center.x, center.y, config.outsideRadius, angle, angle + arc, false)
			ctx.arc(center.x, center.y, config.insideRadius, angle + arc, angle, true)
			ctx.fill()

			// Draw border
			ctx.beginPath()
			ctx.arc(center.x, center.y, config.outsideRadius, angle, angle + arc, false)
			ctx.strokeStyle = theme.wheelBorder
			ctx.lineWidth = 8
			ctx.stroke()

			// Draw shadow
			ctx.save()
			ctx.beginPath()
			ctx.arc(center.x, center.y, config.outsideRadius - 4, angle, angle + arc, false)
			ctx.arc(center.x, center.y, config.insideRadius, angle + arc, angle, true)
			ctx.clip()

			const grad = ctx.createRadialGradient(
				center.x,
				center.y,
				config.outsideRadius - 15,
				center.x,
				center.y,
				config.outsideRadius,
			)
			grad.addColorStop(0, 'rgba(0, 0, 0, 0)')
			grad.addColorStop(1, 'rgba(0, 0, 0, 0.2)')
			ctx.fillStyle = grad
			ctx.fillRect(
				center.x - config.outsideRadius,
				center.y - config.outsideRadius,
				2 * config.outsideRadius,
				2 * config.outsideRadius,
			)
			ctx.restore()

			// Draw text
			ctx.save()
			ctx.fillStyle = slice.textColor
			const labelAngle = angle + arc / 2
			ctx.translate(
				center.x + Math.cos(labelAngle) * config.textRadius,
				center.y + Math.sin(labelAngle) * config.textRadius,
			)
			ctx.rotate(labelAngle)
			if (displayStyle === 'right') ctx.scale(-1, -1)
			ctx.textAlign = 'center'
			ctx.fillText(slice.label, 0, 0)
			ctx.restore()
		}

		// Draw dividers and center
		ctx.strokeStyle = theme.wheelBorder
		ctx.lineWidth = 2
		ctx.beginPath()
		for (let i = 0; i < slices.length; i++) {
			const angle = angleCurrent + i * arc
			const x1 = center.x + Math.cos(angle) * config.insideRadius
			const y1 = center.y + Math.sin(angle) * config.insideRadius
			const x2 = center.x + Math.cos(angle) * config.outsideRadius
			const y2 = center.y + Math.sin(angle) * config.outsideRadius
			ctx.moveTo(x1, y1)
			ctx.lineTo(x2, y2)
		}
		ctx.stroke()

		// Draw center circle
		ctx.save()
		ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
		ctx.shadowBlur = 15
		ctx.shadowOffsetX = 6
		ctx.shadowOffsetY = 6
		ctx.beginPath()
		ctx.arc(center.x, center.y, config.insideRadius, 0, Math.PI * 2, false)
		ctx.fillStyle = theme.center
		ctx.fill()
		ctx.shadowColor = 'transparent'
		ctx.lineWidth = 5
		ctx.strokeStyle = theme.centerCircleBorder
		ctx.stroke()
		ctx.restore()

		// Draw pointer
		const s = 0.5
		const tipRoundRadius = 1
		const defaultTipX =
			center.x + Math.cos(config.pointerAngle) * (config.outsideRadius - config.pointerInset)
		const defaultTipY =
			center.y + Math.sin(config.pointerAngle) * (config.outsideRadius - config.pointerInset)

		ctx.save()
		ctx.translate(defaultTipX, defaultTipY)
		ctx.rotate(config.pointerAngle + Math.PI / 2)
		ctx.translate(-100 * s, -140 * s)
		ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
		ctx.shadowBlur = 10
		ctx.shadowOffsetY = 2

		ctx.beginPath()
		ctx.moveTo(100 * s, 40 * s)
		ctx.bezierCurveTo(60 * s, 40 * s, 60 * s, 100 * s, (100 - tipRoundRadius) * s, 140 * s)
		ctx.arc(100 * s, 140 * s, tipRoundRadius * s, Math.PI, 0, false)
		ctx.bezierCurveTo(140 * s, 100 * s, 140 * s, 40 * s, 100 * s, 40 * s)
		ctx.closePath()
		ctx.fillStyle = theme.pointer
		ctx.fill()

		ctx.beginPath()
		ctx.arc(100 * s, 75 * s, 10 * s, 0, Math.PI * 2)
		ctx.fillStyle = theme.background
		ctx.fill()
		ctx.restore()

		ctx.restore()
	}

	function getSegmentIndex(a) {
		const twoPi = 2 * Math.PI
		a = ((a % twoPi) + twoPi) % twoPi
		return Math.floor(a / ((Math.PI * 2) / slices.length)) % slices.length
	}

	function easeOutQuint(t) {
		return 1 - Math.pow(1 - t, 5)
	}

	async function spin(winnerIndex) {
		if (state.isSpinning) return
		state.isSpinning = true

		angleCurrent = 0
		lastSegment = Math.floor(angleCurrent / ((Math.PI * 2) / slices.length))
		const extraSpins = Math.floor(Math.random() * 3) + 3
		const sliceCenter = (winnerIndex + 0.5) * ((Math.PI * 2) / slices.length)
		const finalAngle =
			config.pointerAngle -
			sliceCenter +
			extraSpins * 2 * Math.PI * (displayStyle === 'right' ? -1 : 1)

		const spinTimeTotal = Math.random() * 2000 + 3000
		const startAngle = angleCurrent
		const startTime = performance.now()

		return new Promise((resolve) => {
			function rotateWheel(now) {
				const elapsed = now - startTime
				if (elapsed >= spinTimeTotal) {
					angleCurrent = finalAngle
					drawWheel()
					state.isSpinning = false
					resolve()
					return
				}

				const fraction = elapsed / spinTimeTotal
				const eased = easeOutQuint(fraction)
				angleCurrent = startAngle + eased * (finalAngle - startAngle)
				const currentIndex = getSegmentIndex(angleCurrent)
				if (currentIndex !== lastSegment) lastSegment = currentIndex
				drawWheel()
				requestAnimationFrame(rotateWheel)
			}
			requestAnimationFrame(rotateWheel)
		})
	}

	drawWheel()
	return { spin, drawWheel }
}

function getWeightedRandomIndex(slices) {
	const totalWeight = slices.reduce((acc, s) => acc + s.probability, 0)
	if (totalWeight <= 0) return 0
	let r = Math.random() * totalWeight
	for (let i = 0; i < slices.length; i++) {
		if (r < slices[i].probability) return i
		r -= slices[i].probability
	}
	return slices.length - 1
}

/**
 * @typedef {Object} TimeBar
 * @property {boolean} enabled
 * @property {Object} countdown
 * @property {boolean} countdown.enabled
 * @property {number} countdown.durationInMinutes
 * @property {string} backgroundColor
 * @property {string} textColor
 * @property {string} text
 * @property {Position} position
 */

/**
 * @param {TimeBar} timeBar
 * @param {string} startedAt Start time for countdown ISO string
 */
function appendTimeBar(timeBar, startedAt) {
	// Remove any existing bar _and_ clear its interval
	const existing = document.getElementById(state.timeBarKey)
	if (existing) {
		existing.remove()
		if (state.timeBarInterval) {
			clearInterval(state.timeBarInterval)
			state.timeBarInterval = null
			// clear localStorage
			localStorage.removeItem(state.timeBarKey)
		}
	}

	// Initialize countdown from storage or default
	const stored = localStorage.getItem(state.timeBarKey)
	state.timeBarCountdown = stored ? Number(stored) : timeBar.countdown.durationInMinutes * 60

	if (!stored) {
		localStorage.setItem(state.timeBarKey, state.timeBarCountdown)
	}

	// Restore saved code if any
	const savedCode = localStorage.getItem(state.timeBarKey + '-code')
	if (savedCode) state.code = savedCode

	// If disabled or already expired, clear & exit
	if (!timeBar.enabled || state.timeBarCountdown <= 0) {
		if (state.timeBarInterval) {
			clearInterval(state.timeBarInterval)
			state.timeBarInterval = null
		}
		return
	}

	// Build container
	const container = document.createElement('div')
	container.id = state.timeBarKey
	Object.assign(container.style, {
		position: 'fixed',
		width: '100%',
		zIndex: '9998',
		display: 'none',
		backgroundColor: timeBar.backgroundColor,
		color: timeBar.textColor,
		top: timeBar.position === 'top' ? '0' : 'auto',
		bottom: timeBar.position === 'bottom' ? '0' : 'auto',
	})
	document.body.appendChild(container)

	// Insert the inner markup
	container.innerHTML = \`
    <div style="height:48px;display:flex;align-items:center;justify-content:center;position:relative;">
      <p style="margin:0;text-align:center;">
        \${timeBar.text.replace('%time%', '<span style="font-weight:bold;margin:0 8px;">00:00</span>')}
      </p>
      <button id="lucky-draw-time-bar-close-button"
        style="position:absolute;top:10px;right:10px;background:transparent;border:none;color:#fff;cursor:pointer;">
        \${closeSvg}
      </button>
    </div>
  \`

	const textEl = container.querySelector('p')
	const updateDisplay = () => {
		// 1. Compute elapsed vs. window
		const startTs = new Date(startedAt).getTime()
		const windowMs = timeBar.countdown.durationInMinutes * 60 * 1000
		const elapsedMs = Date.now() - startTs
		const remainingMs = windowMs - elapsedMs

		// 2. If time is up, clear and tear down
		if (remainingMs <= 0) {
			clearCountdown()
			return
		}

		// 3. Convert to MM:SS
		const totalSec = Math.ceil(remainingMs / 1000)
		const m = Math.floor(totalSec / 60)
		const s = totalSec % 60
		const timeStr = \`\${String(m).padStart(2, '0')}:\${String(s).padStart(2, '0')}\`

		// 4. Build the HTML (with both %time% and %code%)
		let html = timeBar.text.replace(
			'%time%',
			\`<span style="font-weight:bold;margin:0 8px;">\${timeStr}</span>\`,
		)
		if (state.code) {
			html = html.replace(
				'%code%',
				\`<span style="font-weight:bold;margin:0 8px;">\${state.code}</span>\`,
			)
		}

		// 5. Inject into your element
		textEl.innerHTML = html
	}

	function clearCountdown() {
		if (state.timeBarInterval) {
			clearInterval(state.timeBarInterval)
			state.timeBarInterval = null
		}
		localStorage.removeItem(state.timeBarKey)
		const bar = document.getElementById(state.timeBarKey)
		if (bar) bar.remove()
	}

	// Close button clears interval too
	container.querySelector('#lucky-draw-time-bar-close-button').addEventListener('click', () => {
		container.style.display = 'none'
		state.isModalOpen = false
		localStorage.setItem(state.beforeTimeBarCloseKey, Date.now().toString())

		if (state.timeBarInterval) {
			clearInterval(state.timeBarInterval)
			state.timeBarInterval = null
		}
	})

	updateDisplay()

	// Start countdown if enabled
	if (timeBar.countdown.enabled) {
		state.timeBarInterval = setInterval(() => {
			state.timeBarCountdown--
			// When reaching zero, clear everything
			if (state.timeBarCountdown <= 0) {
				clearInterval(state.timeBarInterval)
				state.timeBarInterval = null
				localStorage.removeItem(state.timeBarKey)
				container.remove()
				return
			}
			localStorage.setItem(state.timeBarKey, state.timeBarCountdown)
			updateDisplay()
		}, 1000)
	}

	// Finally show it
	container.style.display = 'block'
}

/**
 * @param {DesignSettings} designSettings
 */
function appendTriggerButton(designSettings) {
	const { triggerButtonPosition, triggerButtonDesign, colors, displayStyle } = designSettings

	const theme = colors.theme
	const slices = colors.prizes

	const triggerButtonConfig = isMobile
		? triggerButtonPosition.mobile
		: triggerButtonPosition.desktop

	const triggerButtonContainer = document.createElement('div')
	triggerButtonContainer.id = state.triggerButtonKey
	triggerButtonContainer.classList.add('lucky-draw-trigger-button-container')

	const triggerButtonWrapper = document.createElement('div')
	triggerButtonContainer.appendChild(triggerButtonWrapper)
	triggerButtonWrapper.style.marginLeft = triggerButtonConfig.paddingFromHorizontal + 'px'
	triggerButtonWrapper.style.marginRight = triggerButtonConfig.paddingFromHorizontal + 'px'
	triggerButtonWrapper.style.marginTop = triggerButtonConfig.paddingFromVertical + 'px'
	triggerButtonWrapper.style.marginBottom = triggerButtonConfig.paddingFromVertical + 'px'

	switch (triggerButtonConfig.position) {
		case 'bottom-left':
			triggerButtonWrapper.classList.add('bottom-left')
			break
		case 'bottom-right':
			triggerButtonWrapper.classList.add('bottom-right')
			break
		case 'left':
			triggerButtonWrapper.classList.add('left')
			break
		case 'right':
			triggerButtonWrapper.classList.add('right')
			break
		default:
			triggerButtonWrapper.classList.add('left')
			break
	}

	// wheel.utils.ts
	function getWheelSliceAngles(slices, displayStyle) {
		if (!slices || slices.length === 0)
			return {
				0: '#d7d4d0',
				36: '#d7d4d0',
				72: '#d7d4d0',
				108: '#d7d4d0',
				144: '#d7d4d0',
				180: '#d7d4d0',
				216: '#d7d4d0',
				252: '#d7d4d0',
				288: '#d7d4d0',
				324: '#d7d4d0',
			}

		let offset = 0
		if (displayStyle === 'right') {
			offset = 36
		} else {
			offset = 288
		}

		const angleIncrement = 360 / 10 // 36 degrees per slice

		return slices.reduce((acc, slice, i) => {
			const angle = (offset + angleIncrement * i) % 360
			acc[angle] = slice.color
			return acc
		}, {})
	}

	/**
	 * @typedef {Object} WheelIconState
	 * @property {Object} fill
	 * @property {string} center
	 * @property {string} wheelBorder
	 * @property {string} centerCircleBorder
	 * @property {string} animation
	 * @property {number} size
	 */
	const wheelIconState = {
		fill: {
			0: '#d7d4d0',
			36: '#d7d4d0',
			72: '#d7d4d0',
			108: '#d7d4d0',
			144: '#d7d4d0',
			180: '#d7d4d0',
			216: '#d7d4d0',
			252: '#d7d4d0',
			288: '#d7d4d0',
			324: '#d7d4d0',
		},
		center: '#e3e3e3',
		wheelBorder: '#000000',
		centerCircleBorder: '#000000',
		animation: triggerButtonDesign.animation ?? 'none',
		size: triggerButtonConfig.size ?? 48,
	}

	if (triggerButtonDesign.style === 'follow') {
		wheelIconState.center = theme.center
		wheelIconState.centerCircleBorder = theme.centerCircleBorder
		wheelIconState.wheelBorder = theme.wheelBorder
		wheelIconState.fill = getWheelSliceAngles(slices, displayStyle)
	}

	/**
	 * @param {WheelIconState} wheelIconState
	 */
	const createWheelIcon = (wheelIconState) => {
		const sliceAngles = Array.from({ length: 10 }, (_, i) => i * 36)

		const polarToCartesian = (radius, angleDeg) => {
			const angleRad = (angleDeg * Math.PI) / 180
			return {
				x: (radius * Math.cos(angleRad)).toFixed(2),
				y: (radius * Math.sin(angleRad)).toFixed(2),
			}
		}

		const getSlicePath = (startAngle) => {
			const endAngle = startAngle + 36
			const outerStart = polarToCartesian(50, startAngle)
			const outerEnd = polarToCartesian(50, endAngle)
			return \`M0,0 L\${outerStart.x},\${outerStart.y} A50,50 0 0,1 \${outerEnd.x},\${outerEnd.y} Z\`
		}

		const appendSlices = () => {
			let svg = ''
			for (let angle of sliceAngles) {
				svg += \`<path d="\${getSlicePath(angle)}" fill="\${wheelIconState.fill[angle]}" stroke="\${wheelIconState.wheelBorder}" stroke-width="1" />\`
			}
			return svg
		}

		return \`
			<div class="lucky-draw-\${wheelIconState.animation}" style="width: \${wheelIconState.size}px; height: \${wheelIconState.size}px">
				<svg
					viewBox="-50 -50 100 100"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g transform="rotate(18)">
						\${appendSlices()}

						<circle cx="0" cy="0" r="15" fill="\${wheelIconState.center}" stroke="\${wheelIconState.centerCircleBorder}" stroke-width="2" />
					</g>
				</svg>
			</div>
		\`
	}

	const triggerButton = document.createElement('button')
	triggerButton.type = 'button'
	triggerButton.classList.add('lucky-draw-trigger-button')

	const triggerButtonIcon = document.createElement('div')
	triggerButtonIcon.classList.add('lucky-draw-trigger-button-icon')
	triggerButtonIcon.innerHTML = createWheelIcon(wheelIconState)
	triggerButton.appendChild(triggerButtonIcon)

	// text
	if (triggerButtonConfig.textStyle !== 'none') {
		const triggerButtonText = document.createElement('div')
		triggerButtonText.classList.add('lucky-draw-trigger-button-text')
		triggerButtonText.classList.add(triggerButtonConfig.textStyle === 'always' ? 'always' : 'hover')
		triggerButtonText.innerHTML = \`
			<div
				style="color: \${theme.triggerText}; background: \${theme.triggerBackground};"
			>
				\${triggerButtonDesign.text}
			</div>
		\`
		triggerButton.appendChild(triggerButtonText)
	}

	triggerButton.addEventListener('click', () => {
		appendLuckyDraw(state.settings)
	})

	triggerButtonWrapper.appendChild(triggerButton)
	document.body.appendChild(triggerButtonContainer)
}

// Main lucky draw function
function appendLuckyDraw(settings) {
	const {
		designSettings,
		slices,
		antiCheat,
		formSettings,
		displayStyle,
		phoneCountryCodes,
		totalConversions,
		colors,
		text,
		campaignId,
	} = settings
	formUtils.phoneCountryCodes = phoneCountryCodes
	const { timeBarAfterSpin, beforeSpinForm } = formSettings

	const theme = designSettings.colors.theme

	utils.onModalOpen()

	// Create main container
	const luckyDraw = document.createElement('div')
	luckyDraw.id = state.luckyDrawMainComponentKey
	luckyDraw.classList.add('lucky-draw-container')
	if (displayStyle === 'center') {
		luckyDraw.classList.add('center')
	}

	// Create overlay
	const overlay = document.createElement('div')
	overlay.classList.add('lucky-draw-overlay')
	luckyDraw.appendChild(overlay)

	// Create modal container
	const container = document.createElement('div')
	container.classList.add('lucky-draw-modal-container')

	if (displayStyle === 'center') {
		container.classList.add('center')
	}
	container.style.background = theme.background

	// Apply animations
	container.style.animation = isMobile
		? 'lucky-draw-slide-in-top 0.5s ease-out forwards'
		: displayStyle === 'right'
			? 'lucky-draw-slide-in-right 0.5s ease-out forwards'
			: displayStyle === 'center'
				? 'lucky-draw-slide-in-top 0.5s ease-out forwards'
				: 'lucky-draw-slide-in-left 0.5s ease-out forwards'

	if (!isMobile) {
		if (displayStyle === 'right') container.classList.add('lucky-draw-ml-auto')
		else if (displayStyle === 'center') container.classList.add('lucky-draw-mx-auto')
	}

	// Create close button
	const closeButton = document.createElement('button')
	closeButton.classList.add('lucky-draw-close-button')
	closeButton.style.color = theme.closeIcon
	closeButton.innerHTML = closeSvg
	closeButton.addEventListener('click', () => {
		utils.onModalClose()
		localStorage.setItem(state.closeKey, new Date().toISOString())
	})
	container.appendChild(closeButton)

	// Create content
	const content = document.createElement('div')
	content.classList.add('lucky-draw-modal-content')
	content.style.color = theme.textColor
	const wrapper = document.createElement('div')
	wrapper.classList.add('lucky-draw-modal-content-wrapper')
	if (displayStyle === 'right') wrapper.classList.add('lucky-draw-flex-row-reverse')
	content.appendChild(wrapper)
	container.appendChild(content)

	// Create wheel
	const wheel = document.createElement('canvas')
	wheel.id = 'lucky-draw-wheel'
	wheel.width = 556
	wheel.height = 556
	wheel.style.maxWidth = '556px'
	wheel.style.maxHeight = '556px'
	wheel.style.marginLeft = displayStyle === 'right' ? '0' : '-215px'
	if (displayStyle === 'right') wheel.style.marginRight = '-215px'
	wrapper.appendChild(wheel)

	// Create form
	const form = document.createElement('div')
	form.id = 'lucky-draw-before-spin-form'
	form.classList.add('lucky-draw-form')

	const titleBlock = document.createElement('div')
	titleBlock.classList.add('lucky-draw-form-title-block')
	titleBlock.innerHTML = \`
    <div class="lucky-draw-form-title">\${beforeSpinForm.title}</div>
    <div class="lucky-draw-form-subtitle">\${beforeSpinForm.subtitle}</div>
  \`
	form.appendChild(titleBlock)

	const inputFields = document.createElement('form')
	inputFields.classList.add('lucky-draw-input-fields')
	let fields = ''
	;['email', 'name', 'phoneNumber'].forEach((field) => {
		if (beforeSpinForm[field].enabled) {
			fields += formUtils.generateInputField(field, beforeSpinForm)
		}
	})
	fields += \`
    <div class="lucky-draw-input-container">
      <div class="lucky-draw-consent-input">
        <input type="checkbox" id="lucky-draw-before-spin-form-consent"/>
        <label for="lucky-draw-before-spin-form-consent">\${beforeSpinForm.consentText}</label>
      </div>
      <div id="lucky-draw-before-spin-form-consent-error" class="lucky-draw-input-field-error lucky-draw-hidden"></div>
    </div>
  \`
	inputFields.innerHTML = fields

	// Add progress bar if enabled
	if (antiCheat.enabledMaxSpins) {
		const progressBarContainer = document.createElement('div')
		progressBarContainer.classList.add('lucky-draw-progress-bar-container')
		let progressValue = totalConversions
		if (antiCheat.maxSpinsSummary.showStyle === 'remaining') {
			progressValue = antiCheat.maxSpins - totalConversions
		} else if (antiCheat.maxSpinsSummary.showStyle === 'fixed') {
			progressValue = antiCheat.maxSpinsSummary.fixedValue
		}

		let progressBarContent = \`
      <progress class="lucky-draw-progress-bar" value="\${progressValue}" max="\${antiCheat.maxSpins}"></progress>
    \`
		if (antiCheat.maxSpinsSummary.enabledCount) {
			progressBarContent += \`
        <div class="lucky-draw-progress-bar-label">
          <div>\${utils.formatNumber(progressValue)} <span>/</span> \${utils.formatNumber(antiCheat.maxSpins)}</div>
        </div>
      \`
		}
		if (antiCheat.maxSpinsSummary.enabledCta) {
			const count =
				antiCheat.maxSpinsSummary.format === 'percentage'
					? (progressValue / antiCheat.maxSpins) * 100
					: progressValue
			const ctaText = antiCheat.maxSpinsSummary.cta.replaceAll(
				'%count%',
				count.toString() + (antiCheat.maxSpinsSummary.format === 'percentage' ? '%' : ''),
			)
			progressBarContent += \`<div class="lucky-draw-progress-bar-cta">\${ctaText}</div>\`
		}
		progressBarContainer.innerHTML = progressBarContent
		inputFields.appendChild(progressBarContainer)
	}

	// Add spin button
	const spinButton = document.createElement('button')
	spinButton.classList.add('lucky-draw-spin-button')
	spinButton.type = 'button'
	spinButton.style.color = colors.buttonTextColor
	spinButton.style.backgroundColor = theme.button
	spinButton.innerHTML = \`<span>\${beforeSpinForm.triggerButtonText}</span>
    <svg class="lucky-draw-spinner" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="2" x2="12" y2="6"></line>
      <line x1="12" y1="18" x2="12" y2="22"></line>
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
      <line x1="2" y1="12" x2="6" y2="12"></line>
      <line x1="18" y1="12" x2="22" y2="12"></line>
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
    </svg>\`
	inputFields.appendChild(spinButton)
	form.appendChild(inputFields)
	wrapper.appendChild(form)
	luckyDraw.appendChild(container)
	document.body.prepend(luckyDraw)

	// Initialize wheel
	const wheelObject = createWheel({ canvas: wheel, theme, slices, displayStyle })

	// Event handlers
	function bindInputEvents() {
		;['email', 'name', 'phoneNumber'].forEach((field) => {
			if (beforeSpinForm[field].enabled) {
				const input = document.getElementById(\`lucky-draw-before-spin-form-\${field}\`)
				input?.addEventListener(
					'input',
					utils.debounce((e) => {
						state.formState[field] = utils.sanitizeInput(e.target.value.trim())
						resetFieldValidation(field)
					}, 300),
				)
			}
		})

		if (beforeSpinForm.phoneNumber.enabled) {
			const countryCodeSelect = document.getElementById(
				'lucky-draw-before-spin-form-phoneNumber-country-code',
			)
			if (countryCodeSelect) {
				const selectedOption = countryCodeSelect.options[countryCodeSelect.selectedIndex]
				selectedOption.text = selectedOption.value
				selectedOption.setAttribute('data-original-text', selectedOption.text)

				countryCodeSelect.addEventListener('change', (e) => {
					const select = e.target
					const selectedOption = select.options[select.selectedIndex]
					selectedOption.text = selectedOption.value
					selectedOption.setAttribute('data-original-text', selectedOption.text)
					resetFieldValidation('phoneNumber')

					select.addEventListener('mousedown', function handler() {
						for (let i = 0; i < select.options.length; i++) {
							const option = select.options[i]
							const originalText = option.getAttribute('data-original-text')
							if (originalText) option.text = originalText
						}
						select.removeEventListener('mousedown', handler)
					})
				})
			}
		}

		const consentCheckbox = document.getElementById('lucky-draw-before-spin-form-consent')
		consentCheckbox?.addEventListener('change', (e) => {
			state.formState.consent = e.target.checked
			resetFieldValidation('consent')
		})
	}

	function resetFieldValidation(field) {
		const error = document.getElementById(\`lucky-draw-before-spin-form-\${field}-error\`)
		const errorIcon = document.getElementById(\`lucky-draw-before-spin-form-\${field}-error-icon\`)
		const container = document.getElementById(\`lucky-draw-before-spin-form-\${field}-container\`)

		if (error) error.classList.add('lucky-draw-hidden')
		if (errorIcon) errorIcon.classList.add('lucky-draw-hidden')
		if (container) container.classList.remove('lucky-draw-error')
	}

	function convertPhoneNumber() {
		if (!beforeSpinForm.phoneNumber.enabled) return
		const countryCodeSelect = document.getElementById(
			'lucky-draw-before-spin-form-phoneNumber-country-code',
		)
		const selectedCountryCode = countryCodeSelect
			? phoneCountryCodes.find((code) => code.dialCode === countryCodeSelect.value) ||
				phoneCountryCodes[0]
			: phoneCountryCodes[0]

		let cleanPhoneNumber = state.formState.phoneNumber.replace(/-/g, '')
		if (beforeSpinForm.phoneNumber.forceInternationalFormat && cleanPhoneNumber.startsWith('0')) {
			cleanPhoneNumber = cleanPhoneNumber.substring(1)
		}

		state.formState.phoneNumber = cleanPhoneNumber.startsWith(
			selectedCountryCode.dialCode.replace('+', ''),
		)
			? \`+\${cleanPhoneNumber}\`
			: \`\${selectedCountryCode.dialCode}\${cleanPhoneNumber}\`
	}

	function replaceFormContent(winningIndex) {
		const winnerForm = document.createElement('div')
		winnerForm.id = 'lucky-draw-winner-form'
		winnerForm.classList.add('lucky-draw-winner-form-container')
		winnerForm.style.color = theme.textColor

		const winningMessage = formSettings.winningForm.winningMessage.replaceAll(
			'%value%',
			slices[winningIndex].label,
		)
		winnerForm.innerHTML = \`
      <div class="lucky-draw-winner-form-wrapper">
        <p class="lucky-draw-winner-form-message">\${winningMessage}</p>
        <p class="lucky-draw-winner-form-reminder">\${formSettings.winningForm.reminder}</p>
        <div class="lucky-draw-winner-form-coupon">
          <div>
            <span>\${text.copyButtonDescription}</span>
            <p>\${slices[winningIndex].couponCode}</p>
          </div>
          \${
						formSettings.winningForm.copyButton.enabled
							? \`<button type="button" id="lucky-draw-winner-form-copy-button" class="lucky-draw-copy-button">\${formSettings.winningForm.copyButton.text}</button>\`
							: ''
					}
        </div>
        <button type="button" id="lucky-draw-winner-form-continue-button" class="lucky-draw-continue-button" style="background-color: \${theme.button}; color: \${colors.buttonTextColor}">
          \${formSettings.winningForm.continueButton.text}
        </button>
      </div>
    \`

		if (isMobile) {
			winnerForm.style.cssText =
				'opacity: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; z-index: 10002;'
			wrapper.appendChild(winnerForm)

			wheel.classList.remove('lucky-draw-wheeling-center')
			void wheel.offsetWidth
			wheel.classList.add('lucky-draw-wheeling-reset')

			document.getElementById('lucky-draw-before-spin-form')?.remove()
			document.querySelectorAll('.lucky-draw-modal-container').forEach((el) => {
				el.scrollTop = 0
				el.scrollBehavior = 'smooth'
			})
			wheel.classList.add('lucky-draw-wheel-hidden')
			winnerForm.style.opacity = '1'
			winnerForm.classList.add('lucky-draw-sliding-up')
		} else {
			wrapper.appendChild(winnerForm)
			document.getElementById('lucky-draw-before-spin-form')?.remove()
		}

		const copyButton = document.getElementById('lucky-draw-winner-form-copy-button')
		if (copyButton) {
			copyButton.addEventListener('click', () => {
				navigator.clipboard.writeText(slices[winningIndex].couponCode)
				const toast = document.createElement('div')
				toast.classList.add('lucky-draw-toast')
				toast.style.cssText =
					'z-index: 100000; background-color: #ecfdf3; border-color: #d3fde5; color: #008a2e;'
				toast.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg><span>\${text.toastSuccess}</span>\`
				document.body.appendChild(toast)
				setTimeout(() => document.body.removeChild(toast), 3000)
			})
		}

		const continueButton = document.getElementById('lucky-draw-winner-form-continue-button')
		if (continueButton) {
			continueButton.addEventListener('click', () => {
				if (timeBarAfterSpin && timeBarAfterSpin.enabled) {
					const executedAt = new Date().toISOString()
					localStorage.setItem(state.timeBarStartKey, executedAt)
					// Update the time bar with after spin settings
					appendTimeBar(timeBarAfterSpin, executedAt)
				}
				utils.onModalClose()
				localStorage.removeItem(state.closeKey)
				document.body.removeChild(luckyDraw)
			})
		}
	}

	// Spin handler
	spinButton.addEventListener('click', async () => {
		if (!formUtils.validateForm(beforeSpinForm)) return

		spinButton.classList.add('loading')
		spinButton.disabled = true

		try {
			if (
				beforeSpinForm.phoneNumber.forceInternationalFormat &&
				beforeSpinForm.phoneNumber.enabled
			) {
				convertPhoneNumber()
			}

			const shopId = window.Colorme?.shop?.account_id
			const { keyId, key } = await fetch(\`https://4a6a-2405-6580-94e0-7700-35ea-eec9-8ebe-756.ngrok-free.app/api/hmac?shop=\${shopId}\`).then((r) => {
				if (!r.ok) throw new Error('Failed to get HMAC key')
				return r.json()
			})

			const winnerIndex = getWeightedRandomIndex(slices)

			function base64ToBytes(b64) {
				const bin = atob(b64)
				const arr = new Uint8Array(bin.length)
				for (let i = 0; i < bin.length; i++) {
					arr[i] = bin.charCodeAt(i)
				}
				return arr
			}

			const keyBytes = base64ToBytes(key)

			const payload = JSON.stringify(
				Object.assign({}, state.formState, {
					couponCode: slices[winnerIndex].couponCode,
					sliceId: slices[winnerIndex].id,
					campaignId: campaignId,
				}),
			)

			const subtleKey = await crypto.subtle.importKey(
				'raw',
				keyBytes,
				{ name: 'HMAC', hash: 'SHA-256' },
				false,
				['sign'],
			)

			const sigBuffer = await crypto.subtle.sign(
				'HMAC',
				subtleKey,
				new TextEncoder().encode(payload),
			)

			const signature = Array.from(new Uint8Array(sigBuffer))
				.map((b) => b.toString(16).padStart(2, '0'))
				.join('')

			const response = await fetch('https://4a6a-2405-6580-94e0-7700-35ea-eec9-8ebe-756.ngrok-free.app/api/wheel', {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'X-HMAC-Key-Id': keyId,
					'X-HMAC-Signature': signature,
				},
				body: payload,
			})

			if (!response.ok) throw new Error('Network error')
			const data = await response.json()
			if (data?.error) {
				const emailError = document.getElementById('lucky-draw-before-spin-form-email-error')
				const emailErrorIcon = document.getElementById(
					'lucky-draw-before-spin-form-email-error-icon',
				)
				const emailContainer = document.getElementById(
					'lucky-draw-before-spin-form-email-container',
				)
				if (emailError && emailErrorIcon && emailContainer) {
					emailError.textContent = data.error
					emailError.classList.remove('lucky-draw-hidden')
					emailErrorIcon.classList.remove('lucky-draw-hidden')
					emailContainer.classList.add('lucky-draw-error')
				}
				return
			}

			state.hasSpun = true
			state.code = slices[winnerIndex].couponCode
			localStorage.setItem(state.timeBarKey + '-code', slices[winnerIndex].couponCode)

			localStorage.setItem(state.localStorageKey, new Date().toISOString())

			if (isMobile) {
				const form = document.getElementById('lucky-draw-before-spin-form')
				if (form) form.classList.add('lucky-draw-sliding-down')

				wheel.style.cssText = 'display: block; position: relative; z-index: 10001;'
				setTimeout(() => {
					wheel.classList.remove('lucky-draw-wheeling-reset')
					void wheel.offsetWidth
					wheel.classList.add('lucky-draw-wheeling-center')
					document.querySelectorAll('.lucky-draw-modal-container').forEach((el) => {
						el.scrollTop = 0
						el.scrollBehavior = 'smooth'
					})

					setTimeout(async () => {
						await wheelObject.spin(winnerIndex)
						replaceFormContent(winnerIndex)
					}, 500)
				}, 100)
			} else {
				await wheelObject.spin(winnerIndex)
				replaceFormContent(winnerIndex)
			}
		} catch (error) {
			console.error('Spin error:', error)
		} finally {
			spinButton.classList.remove('loading')
			spinButton.disabled = false
		}
	})

	bindInputEvents()
} // needs no fs/URL shims; Vite stuffs the file content into this string at build

function checkAfterSpinTimebar(formSettings) {
	// ----- If has previously running timebar -----
	const afterSpinCfg = formSettings.timeBarAfterSpin
	const lastExecutedMs = new Date(localStorage.getItem(state.localStorageKey)).getTime()
	console.log('lastExecutedMs', lastExecutedMs)
	if (lastExecutedMs && afterSpinCfg?.enabled) {
		const startedAt = localStorage.getItem(state.timeBarStartKey)
		if (startedAt) {
			// If timebar has countdown, we check if it's still running
			if (afterSpinCfg.countdown.enabled) {
				const windowMs = afterSpinCfg.countdown.durationInMinutes * 60 * 1000
				const elapsedMs = Date.now() - lastExecutedMs
				if (elapsedMs < windowMs) {
					state.timeBarCountdown = Math.ceil((windowMs - elapsedMs) / 1000)
					appendTimeBar(afterSpinCfg, startedAt)
					state.didAfterSpin = true
				}
			} else {
				// If timebar doesn't have countdown, we just show it, removed when audience purchase something or remove after 1 day
				const elapsedMs = Date.now() - lastExecutedMs
				const purchaseMadeAt = localStorage.getItem(state.purchaseMadeAtKey)
				// If a purchase record available after spun, we remove timebar
				const validPurchaseRecord =
					purchaseMadeAt && new Date(purchaseMadeAt).getTime() > lastExecutedMs

				if (elapsedMs < 24 * 60 * 60 * 1000 && !validPurchaseRecord) {
					appendTimeBar(afterSpinCfg, startedAt)
				}
			}
		}
	}
}

;(function () {
	// single entry: fetch + append only once
	function initLuckyDraw() {
		if (state.tagLoaded) return

		const shopId = window.Colorme?.shop?.account_id
		fetch(\`https://4a6a-2405-6580-94e0-7700-35ea-eec9-8ebe-756.ngrok-free.app/api/wheel?shop-id=\${shopId}\`)
			.then((r) => {
				if (!r.ok) throw new Error('Fetch failed')
				return r.json()
			})
			/** @param {Settings} settings */
			.then((settings) => {
				state.settings = settings
				localStorage.setItem(state.lastFetchKey, new Date().toISOString())
				localStorage.setItem(state.settingsKey, JSON.stringify(settings))

				executeComponents(settings)
			})
			.catch(console.error)
	}

	/**
	 * @returns Promise<{
	 *  shouldRefetch: boolean,
	 *  campaignId: string
	 * }> — true if the server says settings have changed
	 */
	async function checkIfShouldRefetch() {
		try {
			const shopId = window.Colorme?.shop?.account_id
			const r = await fetch(\`https://4a6a-2405-6580-94e0-7700-35ea-eec9-8ebe-756.ngrok-free.app/api/wheel/last-updated-at?shop-id=\${shopId}\`)
			if (!r.ok) throw new Error('Fetch failed')
			const { lastUpdatedAt, campaignId } = await r.json()

			const lastFetchAt = localStorage.getItem(state.lastFetchKey + '-' + campaignId)
			if (!lastFetchAt) return { shouldRefetch: true, campaignId }

			return { shouldRefetch: new Date(lastUpdatedAt) > new Date(lastFetchAt), campaignId }
		} catch (e) {
			console.error(e)
			// On error, default to refetch so you don’t end up stuck with stale settings:
			return { shouldRefetch: true, campaignId: '' }
		}
	}

	function appendStyle() {
		const styleEl = document.createElement('style')
		styleEl.textContent = css
		document.head.appendChild(styleEl)
	}

	/**
	 * @param {Settings} settings
	 */
	function executeComponents(settings) {
		// To prevent multiple execution
		state.tagLoaded = true
		const { formSettings, designSettings } = settings

		// ─── if doesnt have state.localStorageKey, we show before spin timebar ───
		const beforeSpinCfg = formSettings.timeBarBeforeSpin
		if (
			!state.didAfterSpin &&
			beforeSpinCfg?.enabled &&
			!localStorage.getItem(state.localStorageKey)
		) {
			// Silence for 1 day
			const silenceUntil =
				new Date(localStorage.getItem(state.beforeTimeBarCloseKey)).getTime() + 24 * 60 * 60 * 1000
			const now = Date.now()

			// 3a) still silenced?
			if (!silenceUntil || now >= silenceUntil) {
				// if silence expired or never set, remove the key
				if (silenceUntil && now >= silenceUntil) {
					localStorage.removeItem(state.beforeTimeBarCloseKey)
				}

				// 3b) has it run before?
				const startedAt = localStorage.getItem(state.timeBarStartKey)
				let startTs
				if (startedAt) {
					if (beforeSpinCfg?.countdown?.enabled) {
						const windowMs = beforeSpinCfg.countdown.durationInMinutes * 60 * 1000
						const elapsedMs = now - new Date(startedAt).getTime()
						if (elapsedMs < windowMs) {
							state.timeBarCountdown = Math.ceil((windowMs - elapsedMs) / 1000)
							startTs = startedAt
						}
					}
				}

				if (!startTs) {
					startTs = new Date().toISOString()
					localStorage.setItem(state.timeBarStartKey, startTs)
				}

				appendTimeBar(beforeSpinCfg, startTs)
			}
		}

		const closeAt = localStorage.getItem(state.closeKey)
		if (closeAt) {
			// hide wheel, but always show trigger button
			appendTriggerButton(designSettings)
		} else {
			appendLuckyDraw(settings)
			appendTriggerButton(designSettings)
			utils.onModalOpen()
		}
	}

	function updateLocalStorageKeys(campaignId) {
		const prefix = state.prefix
		state.localStorageKey = \`\${prefix}executed-\${campaignId}\`
		state.lastFetchKey = \`\${prefix}last-fetch-\${campaignId}\`
		state.settingsKey = \`\${prefix}settings-\${campaignId}\`
		state.timeBarStartKey = \`\${prefix}time-bar-start-\${campaignId}\`
		state.beforeTimeBarCloseKey = \`\${prefix}before-time-bar-close-\${campaignId}\`
		state.afterTimeBarCloseKey = \`\${prefix}after-time-bar-close-\${campaignId}\`
		state.closeKey = \`\${prefix}close-\${campaignId}\`
	}

	/**
	 * Once we’ve fetched the settings and know the campaignId,
	 * purge any leftover keys from previous campaigns and
	 * re-namespace all of our state keys under the new campaign.
	 *
	 * @param {string} campaignId
	 */
	function onNewCampaign(campaignId) {
		// 1. Remove all keys from localStorage that start with our prefix
		//    but *do not* belong to this campaign:
		const toRemove = []
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i)
			if (key && key.startsWith(state.prefix) && !key.includes(\`-\${campaignId}\`)) {
				toRemove.push(key)
			}
		}
		toRemove.forEach((k) => localStorage.removeItem(k))

		// 2. Re-define storage keys on state so they include the campaignId:
		updateLocalStorageKeys(campaignId)
	}

	/**
	 * @returns {string|null} campaignId
	 */
	function getCampaignId() {
		const prefix = 'lucky-draw-'
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i)
			if (key.startsWith(prefix)) {
				const parts = key.split('-')
				return parts[parts.length - 1]
			}
		}
		return null
	}

	function garbageCollect() {
		localStorage.removeItem(state.localStorageKey)
		localStorage.removeItem(state.timeBarStartKey)
		localStorage.removeItem(state.timeBarKey)
		localStorage.removeItem(state.closeKey)
		localStorage.removeItem(state.settingsKey)
		localStorage.removeItem(state.beforeTimeBarCloseKey)
		localStorage.removeItem(state.afterTimeBarCloseKey)
		localStorage.removeItem(state.lastFetchKey)
		localStorage.removeItem(state.purchaseMadeAtKey)
	}

	async function main() {
		appendStyle()

		const { shouldRefetch, campaignId } = await checkIfShouldRefetch()

		// Check if the campaign is still the same and has been executed (localStorageKey)
		const storedCampaignId = getCampaignId()
		updateLocalStorageKeys(storedCampaignId)

		const raw = localStorage.getItem(state.settingsKey)
		if (raw) {
			const executed = localStorage.getItem(state.localStorageKey)
			const settings = JSON.parse(raw)
			const { enabledResetSpinCount, resetSpinCount } = settings.antiCheat
			// default is 30 days
			const defaultResetSpinCount = 30 * 24 * 60 * 60 * 1000
			const resetSpinCountInMs = enabledResetSpinCount ? resetSpinCount : defaultResetSpinCount

			// If executed and before reset date, we stop here
			if (storedCampaignId === campaignId && executed) {
				const lastExecutedMs = new Date(executed).getTime()
				const nextAllowedMs = lastExecutedMs + resetSpinCountInMs

				if (Date.now() < nextAllowedMs) {
					// spun and not yet reset
					checkAfterSpinTimebar(settings.formSettings)
					return
				} else {
					// reset
					garbageCollect()
				}
			}
		}

		onNewCampaign(campaignId)
		if (shouldRefetch) {
			initLuckyDraw()
		} else {
			// load from localStorage and render
			if (raw) {
				const settings = JSON.parse(raw)
				state.settings = settings
				executeComponents(settings)
			}
		}
	}

	// kick off when DOM is ready
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		main()
	} else {
		document.addEventListener('DOMContentLoaded', main)
	}
})()

`;
