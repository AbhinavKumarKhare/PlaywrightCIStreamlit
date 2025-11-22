const { test, expect } = require('@playwright/test');
const HomePage = require('../../src/pages/HomePage');


test('Search feature test (POM)', async ({ page }) => {
await page.goto('https://www.wikipedia.org');
const home = new HomePage(page);


await home.search('Playwright');
await expect(page).toHaveURL(/Playwright/);
await expect(page.locator('#firstHeading')).toHaveText('Playwright');
});