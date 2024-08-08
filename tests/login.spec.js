// @ts-check
//const { test,expect} = require('@playwright/test');
const {test} = require('../fixtures/init');
const {describe, beforeEach} = require("node:test");
const {expect} = require("@playwright/test");
const testData = JSON.parse(JSON.stringify(require('../config/auth.json')));


//let page;
describe('loginPage', () => {

    test.beforeEach(async ({loginObj}) => {
        //page = await browser.newPage()
        await loginObj.goToLoginPage("https://admin.stg.raenabeauty.com/#/login");
    })

    test('Verify login without username',async ({loginObj,page}) => {

        await loginObj.verifyLogin( '' , testData.password);
        const expectedText = page.locator(loginObj.userNameError);
        await expect(expectedText).toHaveText(testData.missingError);
    })

    test('verify login with valid email and password ',  async ({loginObj,page}) => {
        await loginObj.verifyLogin(testData.email, testData.password);
        const expectedName = page.locator(loginObj.userName);
        await expect(expectedName).toHaveText(testData.email);
    })
})

