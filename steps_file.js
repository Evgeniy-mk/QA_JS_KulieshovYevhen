//const { emailField, passwordField } = require("./pages/account");

// in this file you can append custom step methods to 'I' object
emailField = {css:"#input-email"};
passwordField = {css: "#input-password"};
signInButton = {xpath: '//a[text()="Sign In"]'};
loginButton = {xpath: '//input[@type="submit"]'};
myOrdersText =  { xpath: '//*[@id="content"]/h2[2]'};

module.exports = function() {
  return actor({

  login(user) {
    this.amOnPage('/');
    this.click(signInButton);
    this.fillField(emailField, user.email);
    this.fillField(passwordField,user.password);
    this.click(loginButton);
    this.seeTextEquals("My Orders", myOrdersText);
     },
     //proceedToCheckout(){}

  });
}
