const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const {LoginPage} = require("../pageObjects/LoginPage");
const {AddCountryPage} = require("../pageObjects/AddCountryPage");

const loginPage = new LoginPage();
const countryPage = new AddCountryPage();
const util = require('util')

Given('user {string} has logged in to the admin panel', async function (user, credentials) {
    await loginPage.navigateToAdminLoginPage();
    for(const credential of credentials.hashes()){
        await loginPage.login(credential.email, credential.password);
    }
});

When('user {string} adds a new country with following details:', async function (user, countryDetails) {
    await countryPage.navigateToCountryPage();
    for(const countryDetail of countryDetails.hashes()){
        await countryPage.addCountry(countryDetail.countryName, countryDetail.countryIsoName, countryDetail.countryIso, countryDetail.countryIso3);
    }
});

Then('the country {string} should be in the countries list', async function (countryName) {
    await page.locator(countryPage.sideBarMenuItems.settingsSelector).click();
    await page.locator(countryPage.sideBarMenuItems.countryLinkSelector).click();
    const countrySelector = util.format(countryPage.countrySelector,countryName);
    await expect(page.locator(countrySelector)).toHaveText(countryName);
});