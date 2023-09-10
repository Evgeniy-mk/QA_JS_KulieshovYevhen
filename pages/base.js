const { I } = inject();

module.exports = {
  myAccountSpoiler: {
    xpath: '//*[@id="top-links"]/ul/li/span/span'
  },
  registorButton: {
    xpath: '//*[@id="top-links"]/ul/li/ul/li[1]'
  },
  languageSelection: {
    xpath: '//*[@id="form-language"]/div/span'
  },
  languageSelectionEn: {
    xpath: '//*[@id="form-language"]/div/ul/li[1]/button'
  },
  


  clickMyAccount() {
    I.click(this.myAccountSpoiler);
  },

  clickRegister() {
    I.click(this.registorButton);
  },

  clickLanguage(){
    I.click(this.languageSelection);
    I.click(this.languageSelectionEn);
  },

}