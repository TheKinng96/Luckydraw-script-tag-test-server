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

	// 2) strip imports
	const noImports = data
		.split('\n')
		.filter((line) => !line.trim().startsWith('import '))
		.join('\n')

	// 3) escape ` and $
	let escaped = noImports.replace(/[`$]/g, '\\$&')

	// 4) replace ${PUBLIC_APP_URL} with the actual value
	escaped = escaped.replace(/PUBLIC_APP_URL/g, PUBLIC_APP_URL)

	// 5) replace form regex
	const regexes = {
		REGEX_EMAIL: String.raw`[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,}$`,
	}
	escaped = escaped.replaceAll(/REGEX_EMAIL/g, regexes.REGEX_EMAIL)

	// 6) wrap in a template literal
	const result = `export const rawCode = \`\n${escaped}\n\`;\n`

	// 7) write it out
	await writeFile(outputFile, result, 'utf8')
	console.log(`✅ Wrote escaped code to ${outputFile}`)
}

convert().catch((err) => {
	console.error('Conversion failed:', err)
	process.exit(1)
})
