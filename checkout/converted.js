export const rawCode = `
;(function () {
	const state = {
		purchaseMadeAtKey: 'lucky-draw-purchase-made-at',
	}

	async function recordRedeem() {
		const shopId = window.Colorme?.shop?.account_id
		const customerId = window.Colorme?.customer?.id

		const { keyId, key } = await fetch(\`https://4a6a-2405-6580-94e0-7700-35ea-eec9-8ebe-756.ngrok-free.app/api/hmac?shop=\${shopId}\`).then((r) => {
			if (!r.ok) throw new Error('Failed to get HMAC key')
			return r.json()
		})

		function base64ToBytes(b64) {
			const bin = atob(b64)
			const arr = new Uint8Array(bin.length)
			for (let i = 0; i < bin.length; i++) {
				arr[i] = bin.charCodeAt(i)
			}
			return arr
		}

		const keyBytes = base64ToBytes(key)

		const payload = JSON.stringify({
			shopId,
			customerId,
		})

		const subtleKey = await crypto.subtle.importKey(
			'raw',
			keyBytes,
			{ name: 'HMAC', hash: 'SHA-256' },
			false,
			['sign'],
		)

		const sigBuffer = await crypto.subtle.sign('HMAC', subtleKey, new TextEncoder().encode(payload))

		const signature = Array.from(new Uint8Array(sigBuffer))
			.map((b) => b.toString(16).padStart(2, '0'))
			.join('')

		fetch('https://4a6a-2405-6580-94e0-7700-35ea-eec9-8ebe-756.ngrok-free.app/api/redeemed', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				'X-HMAC-Key-Id': keyId,
				'X-HMAC-Signature': signature,
			},
			body: payload,
		})
			.then((r) => {
				if (!r.ok) throw new Error('Fetch failed')
				localStorage.setItem(state.purchaseMadeAtKey, new Date().toISOString())
				return r.json()
			})
			.catch(console.error)
	}

	// kick off when DOM is ready
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		recordRedeem()
	} else {
		document.addEventListener('DOMContentLoaded', recordRedeem)
	}
})()

`;
