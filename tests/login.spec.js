import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Login and Logout Test', async ({ page }) => {
  // Initialize the LoginPage object
  const loginPage = new LoginPage(page);

  // Navigate to the login page
  await loginPage.navigateToLoginPage();

  // Perform login
  await loginPage.login('standard_user', 'secret_sauce');

  // Assert successful login
  await loginPage.assertOnInventoryPage();

  // Perform logout
  await loginPage.logout();

  // Assert successful logout
  await loginPage.assertOnLoginPage();
});

