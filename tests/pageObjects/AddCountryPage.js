class AddCountryPage {
    constructor(){
        this.countryNameInputFieldSelector = "#country_name";
        this.countryIsoNameFieldSelector = "#country_iso_name";
        this.countryIsoFieldSelector = "#country_iso";
        this.countryIso3FieldSelector = "#country_iso3";
        this.countryStateCheckboxSelector = "label[for='country_states_required']";
        this.createCountrySelector = "//button[@type='submit']";
        this.countrySelector = "//td[text()='%s']";
        this.profileIconSelector = "//button[@id='account-button']";
        this.adminPanelMenuSelector = "//a[text()='Admin Panel']";

        this.sideBarMenuItems = {
            settingsSelector: "a[href='#sidebar-settings']",
            countryLinkSelector: "a[href='/admin/countries']",
            newCountryLinkSelector: "(//a[@id='admin_new_country'])[1]",
        }
    }

    async navigateToCountryPage(){
        await page.locator(this.profileIconSelector).click();
        await page.locator(this.adminPanelMenuSelector).click();
        await page.locator(this.sideBarMenuItems.settingsSelector).click();
        await page.locator(this.sideBarMenuItems.countryLinkSelector).click();
    }

    async navigateToCountryPageFromSettings(){
        await page.locator(this.sideBarMenuItems.settingsSelector).click();
        await page.locator(this.sideBarMenuItems.countryLinkSelector).click();
    }

    async addCountry(countryName, countryIsoName, countryIso, countryIso3){
        await page.locator(this.sideBarMenuItems.newCountryLinkSelector).click();
        await page.fill(this.countryNameInputFieldSelector, countryName);
        await page.fill(this.countryIsoNameFieldSelector, countryIsoName);
        await page.fill(this.countryIsoFieldSelector, countryIso);
        await page.fill(this.countryIso3FieldSelector, countryIso3);
        await page.locator(this.countryStateCheckboxSelector).click();
        await page.locator(this.createCountrySelector).click();
    }
}

module.exports = { AddCountryPage };