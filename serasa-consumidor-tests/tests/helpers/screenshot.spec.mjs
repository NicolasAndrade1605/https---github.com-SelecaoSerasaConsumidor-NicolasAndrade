import puppeteer from 'puppeteer';
import fs from 'fs/promises';

async function takeScreenshot(driver, path = './evidencia.png') {
    const screenshot = await driver.takeScreenshot();
    await fs.writeFile(path, screenshot, 'base64');
}

export { takeScreenshot };
