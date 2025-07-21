// rawCodeConverter.js
import { readFile, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: resolve(process.cwd(), '.env') })
const PUBLIC_APP_URL = process.env.PUBLIC_APP_URL

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const inputFile = resolve(__dirname, 'rawTag.js')
const outputFile = resolve(__dirname, 'converted.js')

async function convert() {
	// 1) load
	const data = await readFile(inputFile, 'utf8')

	// 2) escape ` and $
	let escaped = data.replace(/[`$]/g, '\\$&')

	// 3) replace ${PUBLIC_APP_URL} with the actual value
	escaped = escaped.replace(/PUBLIC_APP_URL/g, PUBLIC_APP_URL)

	// 4) wrap in a template literal
	const result = `export const rawCode = \`\n${escaped}\n\`;\n`

	// 5) write it out
	await writeFile(outputFile, result, 'utf8')
	console.log(`✅ Wrote escaped code to ${outputFile}`)
}

convert().catch((err) => {
	console.error('Conversion failed:', err)
	process.exit(1)
})
