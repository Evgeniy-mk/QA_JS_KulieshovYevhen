const USER = {
   
    email: '1694272346089@ukr.net',
    password: '123456',
    postNumber: '54018',
    };

    

Feature('buy product')


Scenario('buy product',  async ({ I, productPage, cartPage }) => {
    I.login(USER);
    I.amOnPage('/index.php?route=product/product&product_id=48');
    
    productPage.selectColor();
    productPage.selectSize();

    const productPrice = await productPage.getTotalPrice();
    console.log(productPrice);
   //pause();
   
    const totalPrice = await productPage.getTotalPrice();
    // const tax = await cartPage.getTax();
    // I.assertEqual(productPrice + tax, totalPrice, "Prices are not in math!");

    //I.proceedToCheckout();

    cartPage.clickIconsForFinish();
    
    cartPage.verifyCartPage();
     cartPage.fillFormShippingTaxes();
     
     
    cartPage.clickButtonContinue();


}).tag("buy");


