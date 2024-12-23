const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const util = require('util');
const {LoginPage} = require("../pageObjects/LoginPage");
const {AddCountryPage} = require("../pageObjects/AddCountryPage");

const loginPage = new LoginPage();
const countryPage = new AddCountryPage();

Given('user {string} has logged in to the admin panel with following credentials:', async function (user, credentials) {
    await loginPage.navigateToAdminLoginPage();
    credentials = credentials.hashes();
    await loginPage.login(credentials[0].email, credentials[0].password);
});

When('user {string} adds a new country with following details:', async function (user, countryDetails) {
    await countryPage.navigateToCountryPage();
    countryDetails = countryDetails.hashes()
    await countryPage.addCountry(countryDetails[0].countryName, countryDetails[0].countryIsoName, countryDetails[0].countryIso, countryDetails[0].countryIso3);
});

Then('the country {string} should be in the countries list', async function (countryName) {
    await page.locator(countryPage.sideBarMenuItems.settingsSelector).click();
    await page.locator(countryPage.sideBarMenuItems.countryLinkSelector).click();
    const countrySelector = util.format(countryPage.countrySelector,countryName);
    await expect(page.locator(countrySelector)).toHaveText(countryName);
});