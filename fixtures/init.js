import { test as base } from '@playwright/test';
const { loginPage } = require('../pages/login/loginPage.spec.js');
const {orderPage} = require('../pages/order/orderPage.spec.js');

export const test = base.extend({
loginObj : async ({ page}, use) =>{
    const loginObj = new loginPage(page);
    await use(loginObj);
},
orderObj : async ({page}, use) =>{
    const orderObj = new orderPage(page);
    await use(orderObj);
}
})