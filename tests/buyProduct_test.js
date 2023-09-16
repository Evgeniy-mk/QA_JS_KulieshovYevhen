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
   cartPage.clickIconsForFinish();
   cartPage.clickButtonContinue(); 

   //const totalPrice = await productPage.getTotalPrice();
    const tax = await cartPage.getFlatShippingRate();
    const resultPrice = await cartPage.getTotalPriceField();
    console.log(tax);
    console.log(resultPrice);

    I.assertEqual(productPrice + tax, resultPrice, "Prices are not in math!");
     cartPage.clickConfirmOrder();      
     cartPage.verifyCartPage();

}).tag("buy");


