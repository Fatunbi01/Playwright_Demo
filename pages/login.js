exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = '[data-test="username"]';
    this.passwordField = '[data-test="password"]';
    this.loginButton = '[data-test="login-button"]';
    this.menuButton = 'text=Open Menu';
    this.logoutButton = 'text=Logout';
  }

  async navigateToLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.page.locator(this.usernameField).fill(username);
    await this.page.locator(this.passwordField).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async assertOnInventoryPage() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  }

  async logout() {
    await this.page.locator(this.menuButton).click();
    await this.page.locator(this.logoutButton).click();
  }

  async assertOnLoginPage() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }
}
