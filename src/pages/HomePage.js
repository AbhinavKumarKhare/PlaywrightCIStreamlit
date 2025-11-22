class HomePage {
/** @param {import('@playwright/test').Page} page */
constructor(page) {
this.page = page;
this.searchInput = '#searchInput';
this.firstHeading = '#firstHeading';
}


async search(text) {
await this.page.fill(this.searchInput, text);
await this.page.keyboard.press('Enter');
}


async getHeading() {
return this.page.textContent(this.firstHeading);
}
}


module.exports = HomePage;