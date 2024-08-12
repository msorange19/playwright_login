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

    test('@Verify login without username',async ({loginObj,page}) => {

        await loginObj.verifyLogin( '' , testData.userData.password);
        const emailErrorLocator = await loginObj.verifyLoginEmailFieldMissingError();
        const expectedValidationErrorText = page.locator(emailErrorLocator);
      //  const text = await expectedText.innerText()
       // console.log(text)
        await expect(expectedValidationErrorText).toHaveText(testData.validationError.missingError);
    })

    test('@verify login with valid email and password ',  async ({loginObj,page}) => {
        await loginObj.verifyLogin(testData.userData.email, testData.userData.password);
        const visibleUserName = await loginObj.verifyVisibleUserName();
        const expectedUserName = page.locator(visibleUserName);
        const text = await expectedUserName.innerText()
        console.log(text)
        await expect(expectedUserName).toHaveText(testData.userData.email);
    })
})

