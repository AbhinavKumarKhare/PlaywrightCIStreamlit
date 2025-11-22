const { test, expect } = require('@playwright/test');


test('Navigation test', async ({ page }) => {
await page.goto('https://github.com');
await page.click('a[href="/features"]');
await expect(page).toHaveURL(/features/);
await page.click('a[href="/pricing"]');
await expect(page).toHaveURL(/pricing/);
});