// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="shopping-cart-link"]').click();
//   await page.locator('[data-test="checkout"]').click();
//   await page.locator('[data-test="firstName"]').click();
//   //await page.locator('[data-test="firstName"]').press('CapsLock');
//   //await page.locator('[data-test="firstName"]').fill('O');
//   //await page.locator('[data-test="firstName"]').press('CapsLock');
//   await page.locator('[data-test="firstName"]').fill('Olumide');
//   await page.locator('[data-test="lastName"]').click();
//   //await page.locator('[data-test="lastName"]').press('CapsLock');
//   //await page.locator('[data-test="lastName"]').fill('F');
//   //await page.locator('[data-test="lastName"]').press('CapsLock');
//   await page.locator('[data-test="lastName"]').fill('Fatunbi');
//   await page.locator('[data-test="postalCode"]').click();
//   await page.locator('[data-test="postalCode"]').fill('10001');
//   await page.locator('[data-test="continue"]').click();
//   await page.locator('[data-test="finish"]').click();
//   await page.locator('[data-test="back-to-products"]').click();
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.locator('[data-test="logout-sidebar-link"]').click();
// });
import { test, expect } from '@playwright/test';
import addToCart_logout from '../pages/addtocart_logout'; // Import the class

test('Complete purchase and logout on SauceDemo', async ({ page }) => {
  // Initialize the addToCart_logout object
  const addToCartPage = new addToCart_logout(page);

  // Navigate to the Home Page
  await addToCartPage.navigateToHomePage();

  // Login
  await addToCartPage.login('standard_user', 'secret_sauce');

  // Add to cart
  await addToCartPage.addToCart();

  // Checkout process
  await addToCartPage.checkout('Olumide', 'Fatunbi', '10001');

  // Logout
  await addToCartPage.logout();

  // Verify user is redirected to the login page
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});

