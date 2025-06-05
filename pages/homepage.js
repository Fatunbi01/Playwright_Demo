class HomePage {
  constructor(page) {
    this.page = page;
    this.url = 'https://www.saucedemo.com/';
  }

  async navigateToHomePage() {
    await this.page.goto(this.url);
  }
}

export default HomePage; // Ensure this is present
