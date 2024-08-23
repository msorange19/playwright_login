const {basePage} = require('../base/basePage.spec');

exports.loginPage = class loginPage extends basePage{
    constructor(page) {
        super(page);
        this.usernameInput = '#user_name_input';
        this.passwordInput = '#password_input';
        this.submitButton = '#login_submit_button';
        this.userName = "//*[@id=\"top_menu\"]/div/div[1]";
        this.userNameError = "(//div[@class='MuiGrid-root errorWrapper error MuiGrid-item MuiGrid-grid-xs-12'])[1]";
        this.passwordError = '//*[@id="app"]/div/div[2]/div[2]/form/div[2]/div/div[2]/div[2]';
        this.incorrectError = '//*[@id="app"]/div/div[2]/div[3]/div/div/div'
    }

    async goToLoginPage(url) {
        await this.page.goto(url);
    }
    async verifyLogin(email, pass)
    {
       // await this.page.pause();
        await this.page.click(this.usernameInput);
        await this.page.fill(this.usernameInput,email);
        await this.page.click(this.passwordInput);
        await this.page.fill(this.passwordInput,pass);
        await this.page.click(this.submitButton);
    }
    async verifyLoginEmailFieldMissingError()
    {
        return this.userNameError;
    }
    async verifyLoginPasswordFieldMissingError()
    {
        await this.page.pause()
        return this.passwordError;
    }
    async verifyIncorrectError()
    {
        return this.incorrectError;
    }
    async verifyVisibleUserName()
    {
        return this.userName;
    }




}