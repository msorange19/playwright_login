import { test as base } from '@playwright/test';
const { loginPage } = require('../pages/login/loginPage.spec.js');

export const test = base.extend({
loginObj : async ({ page}, use) =>{
    const loginObj = new loginPage(page);
    await use(loginObj);
}
})