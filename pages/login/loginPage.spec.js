const {basePage} = require('../base/basePage.spec');

exports.loginPage = class loginPage extends basePage{
    constructor(page) {
        super(page);
        this.usernameInput = '#user_name_input';
        this.passwordInput = '#password_input';
        this.submitButton = '#login_submit_button';
        this.userName = "//*[@id=\"top_menu\"]/div/div[1]";
        this.userNameError = "//*[@id=\"app\"]/div/div[2]/div[2]/form/div[1]/div/div[2]/div[2]";
        this.passwordError = "//*[@id=\"app\"]/div/div[2]/div[2]/form/div[2]/div/div[2]/div[2]";
    }

    async goToLoginPage(url) {
        await this.page.goto(url);
    }
    async verifyLogin(email, pass)
    {
        await this.page.click(this.usernameInput);
        await this.page.fill(this.usernameInput,email);
        await this.page.click(this.passwordInput);
        await this.page.fill(this.passwordInput,pass);
        await this.page.click(this.submitButton);
    }
    
}