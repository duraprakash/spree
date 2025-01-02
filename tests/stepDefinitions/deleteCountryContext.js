const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const util = require('util');
const {LoginPage} = require("../pageObjects/LoginPage");
const {AddCountryPage} = require("../pageObjects/AddCountryPage");
const {DeleteCountryPage} = require("../pageObjects/DeleteCountryPage");

const loginPage = new LoginPage();
const countryPage = new AddCountryPage();
const deletePage = new DeleteCountryPage()

Given('user {string} has added a new country with following details:', async function (user, countryDetails) {
    await countryPage.navigateToCountryPage();
    countryDetails = countryDetails.hashes();

    await countryPage.addCountry(countryDetails[0].countryName, countryDetails[0].countryIsoName, countryDetails[0].countryIso, countryDetails[0].countryIso3);

    await page.locator(countryPage.sideBarMenuItems.settingsSelector).click();
    await page.locator(countryPage.sideBarMenuItems.countryLinkSelector).click();    
    const countrySelector = util.format(countryPage.countrySelector,countryDetails[0].countryName);
    await expect(page.locator(countrySelector)).toHaveText(countryDetails[0].countryName);
});

When('user {string} deletes the country {string}', async function (user, countryName) {
    await deletePage.delete(countryName);
});

Then('the country {string} should not be in the countries list', async function (countryName) {
    return 'pending';
});
