const {basePage} = require("../base/basePage.spec");
exports.orderPage = class OrderPage extends basePage{
    constructor(page) {
        super(page);
        this.createOrderBtn = '#create_order_button';
        this.resellerList = '#resellerList_autocomplete';
        this.addItems = '#add_item';
        this.instockFilter = '#instock_filter_checkbox'
        this.productSelection = '.PrivateSwitchBase-input-161';
        this.listProducts = '._3LhixtevIotyaYekvL3ved';



    }
    async navigateTo(url) {
        await this.page.goto(url);
    }
    async selection(){
        await this.page.click(this.createOrderBtn);
        await this.page.click(this.resellerList)
    }
}