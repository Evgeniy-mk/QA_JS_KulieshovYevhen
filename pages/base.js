const { I } = inject();

module.exports = {
  myAccountSpoiler: {
    xpath: '//*[@id="top-links"]/ul/li/span/span'
  },
  registorButton: {
    xpath: '//*[@id="top-links"]/ul/li/ul/li[1]'
  },

  clickMyAccount() {
    I.click(this.myAccountSpoiler);
  },

  clickRegistir() {
    I.click(this.registorButton);
  }

}