const { I } = inject();

module.exports = {

  colorDropDown: {xpath: '//label[text()="Color"]/following-sibling::div/a[1]'},
  sizeDropDown: {xpath: '//label[text()="Size"]/following-sibling::div/a[1]'},
  
  colorOption:{xpath: '//label[text()="Color"]/following-sibling::div/ul/li[2]'},
  sizeOption:{xpath: '//label[text()="Size"]/following-sibling::div/ul/li[2]'},
  productPriceText: {xpath: '//div/span[@class="price-new"]'},

  selectColor(){
    I.click(this.colorDropDown);
    I.click(this.colorOption);
  },

  async getproductPrice(){
    const draftProductPrice = await I.grabTextFrom(this.productPriceText);
    const draftColorPrice = await I.grabTextFrom(this.colorOption);
    const draftSizePrice = await I.grabTextFrom(this.sizeOption);
    
    return draftColorPrice.trim().slice(-6, -1);
          //+draftProductPrice.trim().slice(-6, -1) + 
          //+draftSizePrice.trim().slice(-6, -1);

  },

  selectSize(){
    I.click(this.sizeDropDown);
    I.click(this.sizeOption);
  },
}
