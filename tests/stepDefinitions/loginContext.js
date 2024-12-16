const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");

const loginBtnLocator = ".btn-block";
const emailFieldLocator = "#spree_user_email";
const passwordFieldLocator = "#spree_user_password";
const figureElementLocator = "(//figure//img)[2]";
const invalidErrorSelector = ".alert-danger"

Given('user {string} has navigated to the admin login page', async function (user) {
  await page.goto("http://localhost:3000/admin/login");
  expect(page.url()).toBe("http://localhost:3000/admin/login");
});

When('user {string} logs in with following credentials', async function (user, credentials) {
  credentials = credentials.hashes();
  for(credential of credentials){
    await page.locator(emailFieldLocator).fill(credential.email);
    await page.locator(passwordFieldLocator).fill(credential.password);
    await page.locator(loginBtnLocator).click();
  }
});

Then('user {string} should be navigated to admin panel dashboard', async function (user) {
  await expect(page.url()).toBe("http://localhost:3000/");
  await expect(page.locator(figureElementLocator)).toHaveAttribute('title', 'Spree Demo Site');
});

When('user {string} tries to log in with following credentials', async function (user, credentials) {
  credentials = credentials.hashes();
  for(credential of credentials){
    await page.locator(emailFieldLocator).fill(credential.email);
    await page.locator(passwordFieldLocator).fill(credential.password);
    await page.locator(loginBtnLocator).click();
  }
});

Then('error message {string} should be shown', async function (errorMessage) {
  await expect(page.locator(invalidErrorSelector)).toHaveText(errorMessage);
});