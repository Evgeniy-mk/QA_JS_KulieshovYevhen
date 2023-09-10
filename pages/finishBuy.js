const { I } = inject();

module.exports = {

  clickIcons: {xpath: '//button[@class = "linearicons-cart]' }, //*[@id="cart"]/button
  clickButtonCheckout: {xpath:'//*[@id="cart"]/ul/li[3]/div/a[2]'},
  h2: {xpath: '//*[@id="content"]/h2'},
  countryName:{ xpath: '//div/a[text()="Ukraine"]'},
  countryRegionName: {xpath:'//div/a[text()="Mykolayivska Oblast"]' },
  postNumberField: {xpath: '//*[@id="input-postcode"] '},
  buttonGetQuotes: {xpath: '//*[@id="button-quote"]'}, 
  
  clickIconsForFinish(){
    I.click(this.clickIcons);
    I.click(this.clickButtonCheckout);
  },

  verifyCartPage(){
    const atribCartPage = 'What would you like to do next?';
    I.seeTextEquals(atribCartPage, this.h2);
  },
  fillFormShippingTaxes(){
    I.fillField(this.countryName);
    I.fillField(this.countryRegionName);
    I.fillField(this.postNumberField, USER.postNumber);
  },
  clickButtonGetQuotes(){
    I.click(this.buttonGetQuotes);
    
  },

}
