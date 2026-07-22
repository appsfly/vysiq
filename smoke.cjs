const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  const errors = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  page.on('pageerror', (err) => errors.push(String(err)))

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
  await page.waitForSelector('text=VisionOps')
  await page.locator('footer').scrollIntoViewIfNeeded()
  await page.screenshot({ path: 'footer.png', clip: undefined, fullPage: false })
  const footerHtml = await page.locator('footer').innerText()
  console.log('--- FOOTER TEXT ---')
  console.log(footerHtml)

  for (const path of ['/about', '/blog', '/case-studies', '/support']) {
    await page.goto(`http://localhost:5173${path}`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(300)
    const name = path === '/' ? 'home' : path.replace('/', '')
    await page.screenshot({ path: `${name}.png`, fullPage: true })
    console.log(`captured ${path}`)
  }

  console.log('--- CONSOLE ERRORS ---')
  console.log(errors.length ? errors.join('\n') : 'none')

  await browser.close()
})()
