const { I } = inject();

module.exports = {

//  async getTotalPrice() {
//     return 1;
//   },

//   async getTax(){
//     return 1;
//   },
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




  clickIconsForFinish(){
   
    I.click(this.buttonAddToCart);

    I.click(this.clickIcons);
    I.click(this.checkOutButton);
  },

  verifyCartPage(){
    const atribCartPage = 'Checkout';
    I.seeTextEquals(atribCartPage, this.h1);
  },
  

   fillFormShippingTaxes(){
      //I.fillField(this.firstNameField, NEW_USER.firstName);
  //   I.fillField(this.countryName);
  //   I.fillField(this.countryRegionName);
  //   I.fillField(this.postNumberField, USER.postNumber);
  },
  clickButtonContinue(){
    I.click(this.buttonContinue2);
    I.click(this.buttonContinue3);
    I.click(this.buttonContinue4);
    I.click(this.buttonCheckBox);
    I.click(this.buttonContinue5);
    I.click(this.buttonConfirmOrder);
  },
  verifySuccessPage(){
    const atribCartPage = 'Your order has been placed!';
    I.seeTextEquals(atribCartPage, this.h1);
  },

}
