// @ts-check
const { defineConfig } = require('@playwright/test');


module.exports = defineConfig({
timeout: 90_000,
testDir: './tests',
reporter: [ ['list'], ['allure-playwright'] ],
use: {
headless: true,
viewport: { width: 1280, height: 720 },
ignoreHTTPSErrors: true,
video: 'retain-on-failure',
screenshot: 'only-on-failure',
baseURL: 'http://localhost:3000'
},
});