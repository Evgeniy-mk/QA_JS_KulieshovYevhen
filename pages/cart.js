const { I } = inject();

module.exports = {


  buttonAddToCart: {xpath: '//*[@id="button-cart"]'},
  clickIcons: {xpath:'//*[@id="cart-total2"]' }, 
  checkOutButton: {xpath: '//a[@class="btn-primary btn-r"]'},
  h1: {xpath: '//*[@id="content"]/h1'},

  firstNameField: {xpath: '//*[@id="input-payment-firstname"]'},

  countryName:{ xpath: '//div/a[text()="Ukraine"]'},
  countryRegionName: {xpath:'//div/a[text()="Mykolayivska Oblast"]' },
  postNumberField: {xpath: '//*[@id="input-postcode"] '},
  buttonContinue2: {xpath: '//*[@id="button-payment-address"]'}, 
  buttonContinue3: {xpath: '//*[@id="button-shipping-address"]'}, 
  buttonContinue4: {xpath: '//*[@id="button-shipping-method"]'}, 

  buttonCheckBox: {xpath: '//*[@id="agree1"]'}, 
  buttonContinue5: {xpath: '//*[@id="button-payment-method"]'}, 
  buttonConfirmOrder: {xpath: '//*[@id="button-confirm"]'}, 
  
  flatShippingRate: {xpath: '//tr/td[text()="$5.00"]'}, //*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[2]/td[2]
  totalPrice: {xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[3]/td[2]'},


  clickIconsForFinish(){
   
    I.click(this.buttonAddToCart);

    I.click(this.clickIcons);
    I.click(this.checkOutButton);
  },

  verifyCartPage(){
    const atribCartPage = 'Checkout';
    I.seeTextEquals(atribCartPage, this.h1);
  },
     
  
  clickButtonContinue(){
    I.click(this.buttonContinue2);
    I.click(this.buttonContinue3);
    I.click(this.buttonContinue4);
    I.click(this.buttonCheckBox);
    I.click(this.buttonContinue5);
    //pause();
    
  },

// берем податок 
async getFlatShippingRate(){
  const flatShippingRateField = await I.grabTextFrom(this.flatShippingRate);
  return +flatShippingRateField.replace(/[^0-9.]/g, '');
},
// берем повну ціну вартість+податок
async getTotalPriceField(){
  const totalPriceField = await I.grabTextFrom(this.totalPrice);
  return +totalPriceField.replace(/[^0-9.]/g, '');
},
clickConfirmOrder(){
  I.click(this.buttonConfirmOrder);
},
 
  verifySuccessPage(){
    const atribCartPage = 'Your order has been placed!';
    I.seeTextEquals(atribCartPage, this.h1);
  },

}
