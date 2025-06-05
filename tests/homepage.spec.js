import { test, expect } from '@playwright/test';
import HomePage from '../pages/homepage'; // Import the HomePage class

test('Verify the URL of the Home Page', async ({ page }) => {
    test.setTimeout(30000); // Set timeout to 30 seconds
    const homepage = new HomePage(page);
    await homepage.navigateToHomePage();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
  