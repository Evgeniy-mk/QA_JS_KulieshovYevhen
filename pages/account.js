const {
  I
} = inject();

module.exports = {
  h1: {
    xpath: '//*[@id="content"]/h1'
  },
  firstNameField: {
    xpath: '//*[@id="input-firstname"]'
  },
  lastNameField: {
    xpath: '//*[@id="input-lastname"]'
  },
  emailField: {xpath: '//*[@id="input-email"]'},
  telephoneField: {xpath: '//*[@id="input-telephone"]'},
  passwordField: {xpath: '//*[@id="input-password"]'},
  passwordConfirmField: {xpath: '//*[@id="input-confirm"]'},

radioFieldOfAccount: {xpath: '//*[@id="content"]/form/div/div/input[1]'},
buttonContinue: {xpath: '//*[@id="content"]/form/div/div/input[2]'},




  verifyRegisterAccountPage() {
    const regTitleText = 'Register Account';
    I.seeTextEquals(regTitleText, this.h1);
  },

  fillNewUserForm(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.emailField, user.email);
    I.fillField(this.telephoneField, user.telephone);
    I.fillField(this.passwordField, user.password);
    I.fillField(this.passwordConfirmField, user.password);
    
    
  },

  submitRegistration() {
    I.click(this.radioFieldOfAccount);
    I.click(this.buttonContinue);
  },

  verifyRegistation() {
    const regTitleText = 'Your Account Has Been Created!';
    I.seeTextEquals(regTitleText, this.h1);
  },
  

 
}