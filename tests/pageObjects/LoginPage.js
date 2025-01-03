class LoginPage {
    constructor(){
        this.loginBtnSelector = ".btn-block";
        this.emailFieldSelector = "#spree_user_email";
        this.passwordFieldSelector = "#spree_user_password";
        this.spreeLogoSelector = "(//figure//img)[2]";
        this.errMessageSelector = ".alert-danger";
    }

    async navigateToAdminLoginPage() {
        await page.goto("http://localhost:3000/admin/login");
    }

    async login(email,password){
        await page.waitForSelector(this.emailFieldSelector);
        await page.fill(this.emailFieldSelector, email);
        await page.fill(this.passwordFieldSelector, password);
        await page.locator(this.loginBtnSelector).click();
    }
}

module.exports = { LoginPage };