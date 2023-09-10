const USER = {
   
    email: '1694272346089@ukr.net',
    password: '123456',
    postNumber: '54018',
    };

    

Feature('buy product')


Scenario('buy product',  async ({ I, productPage, cartPage, finishBuyPage }) => {
    I.login(USER);
    I.amOnPage('/index.php?route=product/product&product_id=44');
    
    productPage.selectColor();
    productPage.selectSize();

    const productPrice = await productPage.getProductPrice();
    console.log(productPrice);
   //pause();
   //I.proceedToCheckout();
    const totalPrice = await cartPage.getTotalPrice();
    const tax = await cartPage.getTax();
    I.assertEqual(productPrice + tax, totalPrice, "Prices are not in math!")

}).tag("buy");


Scenario('buy product',  async ({ I, productPage, cartPage, finishBuyPage }) => {
    finishBuyPage.clickIconsForFinish();
    finishBuyPage.verifyCartPage();
    finishBuyPage.fillFormShippingTaxes();
    finishBuyPage.clickButtonGetQuotes();


})