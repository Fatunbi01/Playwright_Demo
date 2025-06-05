class addToCart_logout {
    constructor(page) {
      this.page = page;
  
      // Define Selectors
      this.usernameField = '[data-test="username"]';
      this.passwordField = '[data-test="password"]';
      this.loginButton = '[data-test="login-button"]';
      this.addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
      this.shoppingCartLink = '[data-test="shopping-cart-link"]';
      this.checkoutButton = '[data-test="checkout"]';
      this.firstNameField = '[data-test="firstName"]';
      this.lastNameField = '[data-test="lastName"]';
      this.postalCodeField = '[data-test="postalCode"]';
      this.continueButton = '[data-test="continue"]';
      this.finishButton = '[data-test="finish"]';
      this.backToProductsButton = '[data-test="back-to-products"]';
      this.openMenuButton = 'button:has-text("Open Menu")';
      this.logoutButton = '[data-test="logout-sidebar-link"]';
    }
  
    // Actions
    async navigateToHomePage() {
      await this.page.goto('https://www.saucedemo.com/');
    }
  
    async login(username, password) {
      await this.page.locator(this.usernameField).fill(username);
      await this.page.locator(this.passwordField).fill(password);
      await this.page.locator(this.loginButton).click();
    }
  
    async addToCart() {
      await this.page.locator(this.addToCartButton).click();
    }
  
    async checkout(firstName, lastName, postalCode) {
      await this.page.locator(this.shoppingCartLink).click();
      await this.page.locator(this.checkoutButton).click();
      await this.page.locator(this.firstNameField).fill(firstName);
      await this.page.locator(this.lastNameField).fill(lastName);
      await this.page.locator(this.postalCodeField).fill(postalCode);
      await this.page.locator(this.continueButton).click();
      await this.page.locator(this.finishButton).click();
    }
  
    async logout() {
      await this.page.locator(this.backToProductsButton).click();
      await this.page.locator(this.openMenuButton).click();
      await this.page.locator(this.logoutButton).click();
    }
  }
  
  export default addToCart_logout;
  

  