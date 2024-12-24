const util = require('util');

class DeleteCountryPage {
    constructor(){
        this.countrySelector = "//td[text()='%s']";
        this.deleteSelector = "//td[text()='%s']/following-sibling::td[4]/span/a[2]"
    }

    async getCountryToBeDeleted(countryName){
        const countrySelector = util.format(countryPage.countrySelector,countryName);
        await expect(page.locator(countrySelector)).toHaveText(countryName);
    }

    async delete(countryName){
        const countrySelector = util.format(this.deleteSelector,countryName);
    }
}

module.exports = {DeleteCountryPage}