class LoginPage {
/** @param {import('@playwright/test').Page} page */
constructor(page) {
this.page = page;
this.username = '#username';
this.password = '#password';
this.signInButton = 'text=Sign in';
}


async goto() {
await this.page.goto('/');
}


async login(user, pass) {
await this.page.fill(this.username, user);
await this.page.fill(this.password, pass);
await this.page.click(this.signInButton);
}
}


module.exports = LoginPage;