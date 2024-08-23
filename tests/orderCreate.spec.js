const {test} = require('../fixtures/init');
const {describe, beforeEach} = require("node:test");
const {expect} = require("@playwright/test");
const testData = JSON.parse(JSON.stringify(require('../config/auth.json')));


//let page;
describe('@loginPage Sanity testing', () => {

    test.beforeEach(async ({loginObj, orderObj, page}) => {
        //page = await browser.newPage()
        await loginObj.goToLoginPage("https://admin.stg.raenabeauty.com/#/login");
        await loginObj.verifyLogin(testData.userData.email, testData.userData.password);
        await orderObj.navigateTo("https://admin.stg.raenabeauty.com/#/manage-orders/orders")
    })

    test.skip('@Verify order', async ({orderObj, page}) => {
        await orderObj.selection();
    })



})
