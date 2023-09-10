const { fillNewUserForm } = require("../pages/account");

Feature('register');
const NEW_USER = {
    firstName: 'Evgeniy',
    lastName: '22',
    email: Date.now() + '@ukr.net',
    telephone: '38050000000',
    password: '123456',
   
}

//page selection, filling in fields
Scenario('click fill, see',  ({ I, basePage,  accountPage }) => {
    I.amOnPage('/');

    //go to registration page-перехід на сторінку регістрації
    basePage.clickLanguage();
    basePage.clickMyAccount();
    basePage.clickRegister();

    accountPage.verifyRegisterAccountPage();
    accountPage.fillNewUserForm(NEW_USER);
    accountPage.submitRegistration();
    accountPage.verifyRegistation();
    
});

