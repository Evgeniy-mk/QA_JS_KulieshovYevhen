//const { emailField, passwordField, signInButton,loginButton,myOrdersText } = require("./pages/account");
const emailField = {css:"#input-email"};
const passwordField = {css: "#input-password"};
const signInButton = {xpath: '//a[text()="Sign In"]'};
const loginButton = {xpath: '//input[@type="submit"]'};
const myOrdersText =  { xpath: '//*[@id="content"]/h2[2]'};

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
    

  });
}
