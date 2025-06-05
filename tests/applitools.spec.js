import { test, expect } from '@playwright/test';
test('Demo login test', async ({ page }) =>{
await page.goto('https://kitchen.applitools.com')
//await page.locator('[placeholder="Enter your username"]').fill('Raghav')
//await page.locator('[placeholder="Enter your password"]').fill('1234')
//await page.locator('[id="log-in"]').click()
//await page.locator('text=Sign in').click()
await page.pause()
// Assertions
// Check if an element is present
if(await page.$('text=The Kitchen')){
await page.locator('text=The Kitchen').click()
// Check attribute value (class)
await expect(page.locator('text=The Kitchen')).toHaveClass('chakra-heading css-dpmy2a')
await page.pause()
//check page to have title

//
}
})