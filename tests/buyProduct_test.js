const FileReader = require('../helpers/fileReader');

const PATH = './productIds.txt';
const productIds = FileReader.readFile(PATH);



const USER = {
   
    email: '1694272346089@ukr.net',
    password: '123456',
    postNumber: '54018',
    };

    let productLink = new DataTable(['productLink']);
    productLink.add(['/index.php?route=product/product&product_id=44']);
    productLink.add(['/index.php?route=product/product&product_id=48']);
    productLink.add(['/index.php?route=product/product&product_id=68']);

    

Feature('buy product')


Data(productLink).Scenario('buy product',  async ({ I, productPage, cartPage, current  }) => {
    I.login(USER);
    I.amOnPage(current.productLink);
    console.log(FileReader.convertStringToArray(productIds));
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


