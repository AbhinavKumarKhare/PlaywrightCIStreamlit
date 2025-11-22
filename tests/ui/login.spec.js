const { test, expect } = require('@playwright/test');
const LoginPage = require('../../src/pages/LoginPage');


test('Login UI test (POM)', async ({ page }) => {
const login = new LoginPage(page);
await login.goto();


// demo site used here — change to your site or app route
await login.login('testuser', 'password');


// simple assertion: url changed or specific content present
await expect(page).toHaveURL(/.*app\.html/);
});