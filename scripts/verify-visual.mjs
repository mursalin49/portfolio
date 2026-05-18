import { mkdir } from "node:fs/promises";
import { chromium } from "@playwright/test";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const baseUrl = process.env.PORTFOLIO_URL ?? "http://127.0.0.1:5173/";

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 900 },
];

await mkdir("artifacts", { recursive: true });

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
});

const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
  });
  await page.waitForSelector(".three-hero-canvas canvas", { state: "visible" });
  await page.waitForTimeout(900);

  const canvasStats = await page.evaluate(() => {
    const canvas = document.querySelector(".three-hero-canvas canvas");
    const gl = canvas?.getContext("webgl2") ?? canvas?.getContext("webgl");

    if (!canvas || !gl) {
      return { hasCanvas: Boolean(canvas), sampled: 0, litPixels: 0 };
    }

    const width = gl.drawingBufferWidth;
    const height = gl.drawingBufferHeight;
    const points = [
      [0.35, 0.25],
      [0.55, 0.35],
      [0.7, 0.5],
      [0.55, 0.65],
      [0.35, 0.75],
      [0.82, 0.32],
      [0.18, 0.52],
      [0.68, 0.78],
    ];
    const pixel = new Uint8Array(4);
    let litPixels = 0;

    for (const [xRatio, yRatio] of points) {
      const x = Math.min(width - 1, Math.max(0, Math.floor(width * xRatio)));
      const y = Math.min(height - 1, Math.max(0, Math.floor(height * yRatio)));
      gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
      if (pixel[0] + pixel[1] + pixel[2] + pixel[3] > 35) {
        litPixels += 1;
      }
    }

    return {
      hasCanvas: true,
      sampled: points.length,
      litPixels,
      width,
      height,
    };
  });

  for (const selector of ["#about", "#skills", "#education", "#experience", "#projects", "#contact"]) {
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(350);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(350);

  await page.screenshot({
    path: `artifacts/portfolio-${viewport.name}.png`,
    fullPage: true,
  });

  results.push({ ...viewport, canvasStats });
  await page.close();
}

await browser.close();

for (const result of results) {
  console.log(
    `${result.name}: ${result.canvasStats.width}x${result.canvasStats.height}, ` +
      `${result.canvasStats.litPixels}/${result.canvasStats.sampled} canvas samples lit`
  );

  if (!result.canvasStats.hasCanvas || result.canvasStats.litPixels < 2) {
    throw new Error(`${result.name} canvas appears blank or under-rendered.`);
  }
}
