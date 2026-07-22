const { chromium } = require('playwright-core')

;(async () => {
  const browser = await chromium.launch({
    executablePath: String.raw`C:\Users\harro\AppData\Local\ms-playwright\chromium-1228\chrome-win64\chrome.exe`,
  })
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  const errors = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  page.on('pageerror', (err) => errors.push(String(err)))

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
  await page.waitForSelector('text=VisionOps')
  await page.locator('footer').scrollIntoViewIfNeeded()
  await page.screenshot({ path: 'footer.png' })
  const footerText = await page.locator('footer').innerText()
  console.log('--- FOOTER TEXT ---')
  console.log(footerText)

  for (const path of ['/about', '/blog', '/case-studies', '/support']) {
    await page.goto(`http://localhost:5173${path}`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(300)
    const name = path.replace('/', '')
    await page.screenshot({ path: `${name}.png`, fullPage: true })
    console.log(`captured ${path}`)
  }

  console.log('--- CONSOLE ERRORS ---')
  console.log(errors.length ? errors.join('\n') : 'none')

  await browser.close()
})()
