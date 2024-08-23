// @ts-check
//const { test,expect} = require('@playwright/test');
const {test} = require('../fixtures/init');
const {describe, beforeEach} = require("node:test");
const {expect} = require("@playwright/test");
const testData = JSON.parse(JSON.stringify(require('../config/auth.json')));


//let page;
describe('@loginPage Sanity testing', () => {

    test.beforeEach(async ({loginObj}) => {
        //page = await browser.newPage()
        await loginObj.goToLoginPage("https://admin.stg.raenabeauty.com/#/login");
    })

    test('@Verify login without username', async ({loginObj, page}) => {

        await loginObj.verifyLogin('', testData.userData.password);
        const emailMissingErrorLocator = await loginObj.verifyLoginEmailFieldMissingError();
        const expectedEmailValidationErrorText = page.locator(emailMissingErrorLocator);
        // const text = await expectedEmailValidationErrorText.innerText()
       //  console.log(text)
        await expect(expectedEmailValidationErrorText).toHaveText(testData.validationError.missingError);
    })
    test('@Verify login without password', async ({loginObj, page}) => {

        await loginObj.verifyLogin(testData.userData.email, '');
        const passwordMissingErrorLocator = await loginObj.verifyLoginPasswordFieldMissingError();
        const expectedPasswordValidationErrorText = page.locator(passwordMissingErrorLocator);
        await expect(expectedPasswordValidationErrorText).toHaveText(testData.validationError.missingError);
    })

    test('@Verify login with wrong email', async ({loginObj, page}) => {
        await loginObj.verifyLogin(testData.userData.wrongEmail, testData.userData.password);
        const incorrectEmailErrorLocator = await loginObj.verifyIncorrectError()
        const expectedIncorrectEmailValidationErrorText = page.locator(incorrectEmailErrorLocator);
        await expect(expectedIncorrectEmailValidationErrorText).toHaveText(testData.validationError.incorrectError);
    })
    test('@Verify login with wrong password', async ({loginObj, page}) => {
        await loginObj.verifyLogin(testData.userData.email, testData.userData.wrongPassword);
        const incorrectPasswordErrorLocator = await loginObj.verifyIncorrectError()
        const expectedIncorrectPasswordValidationErrorText = page.locator(incorrectPasswordErrorLocator);
        await expect(expectedIncorrectPasswordValidationErrorText).toHaveText(testData.validationError.incorrectError);
    })

    test('@verify login with valid email and password ', async ({loginObj, page}) => {
        await loginObj.verifyLogin(testData.userData.email, testData.userData.password);
        const visibleUserName = await loginObj.verifyVisibleUserName();
        const expectedUserName = page.locator(visibleUserName);
        await expect(expectedUserName).toHaveText(testData.userData.email);
    })
})

