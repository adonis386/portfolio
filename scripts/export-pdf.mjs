/**
 * Print-ready A4 PDF from the running app (http://localhost:5173/cv-ats.html).
 * Requires Microsoft Edge or Chrome, plus `npm run dev`.
 */
import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer-core'

const outFile = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'adonis-gonzalez-cv.pdf')

const browsers = [
  process.env.EDGE_PATH,
  process.env.CHROME_PATH,
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
].filter((value) => Boolean(value))

const executablePath = browsers.find((path) => path && existsSync(path))
if (!executablePath) {
  console.error('No se encontró Edge ni Chrome. Abre el CV y usa Imprimir → Guardar como PDF.')
  process.exit(1)
}

const origin = process.env.CV_URL ?? 'http://localhost:5173/cv-ats.html'

await mkdir(dirname(outFile), { recursive: true })

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
})

try {
  const page = await browser.newPage()
  await page.emulateMediaType('print')
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 })
  await page.goto(origin, { waitUntil: 'networkidle0', timeout: 30_000 })
  await page.waitForSelector('h1', { timeout: 10_000 })
  await page.evaluate(async () => {
    await document.fonts.ready
    const images = [...document.images]
    await Promise.all(
      images.map((image) =>
        image.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              image.addEventListener('load', resolve, { once: true })
              image.addEventListener('error', resolve, { once: true })
            }),
      ),
    )
  })
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  })
  const preview = await page.evaluate(() => document.body.innerText.slice(0, 200))
  console.log('preview:', preview.replace(/\s+/g, ' ').trim())
  try {
    await writeFile(outFile, pdfBuffer)
    console.log(`PDF escrito en ${outFile}`)
  } catch {
    const fallback = outFile.replace(/\.pdf$/i, '-new.pdf')
    await writeFile(fallback, pdfBuffer)
    console.warn(`El PDF original está abierto. Escrito en ${fallback}`)
  }
} finally {
  await browser.close()
}
