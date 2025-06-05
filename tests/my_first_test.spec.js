const {test, expect} = require ('@playwright/test')

test('My first test', async({page}) => {
await page.goto('https://saucedemo.com')
await page.pause()
//await expect (page).toHaveTitle('Google')
//Using any object property e.g id.data-test, name, class e.t.c
await page.click('data-test=username')
await page.locator('data-test=username').fill('standard_user')
//await page.locator('[data-test="username"]').fill('captain')
//await page.click('data-test=password')
//await page.locator('//input[@name="password"]').fill('secret_sauce')
//await page.locator('data-test=password').fill('secret_sauce')
//Using css selector
//#login-button
await page.locator('#login-button').click()
await page.pause()
// using xpath
await page.locator('//input[@name="password"]').fill('secret_sauce')
// using text
await page.locator('text=LOGIN').click()
})