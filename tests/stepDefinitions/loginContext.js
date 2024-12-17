const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const {LoginPage} = require("../pageObjects/LoginPage");

const loginPage = new LoginPage();

Given('user {string} has navigated to the admin login page', async function (user) {
  await loginPage.navigateToAdminLoginPage();
  expect(page.url()).toBe("http://localhost:3000/admin/login");
});

When('user {string} logs in with following credentials', async function (user, credentials) {
  credentials = credentials.hashes();
  for(const credential of credentials){
    await loginPage.login(credential.email, credential.password);
  }
});

Then('user {string} should be navigated to admin panel dashboard', async function (user) {
  await expect(page.url()).toBe("http://localhost:3000/");
  await expect(page.locator(loginPage.spreeLogoSelector)).toHaveAttribute('title', 'Spree Demo Site');
});

When('user {string} tries to log in with following credentials', async function (user, credentials) {
  credentials = credentials.hashes();
  for(const credential of credentials){
    await loginPage.login(credential.email, credential.password);
  }
});

Then('error message {string} should be shown', async function (errorMessage) {
  await expect(page.locator(loginPage.errMessageSelector)).toHaveText(errorMessage);
});