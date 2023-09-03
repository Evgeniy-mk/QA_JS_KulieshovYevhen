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

    //choose en - вибір мови
    I.click({xpath:'//*[@id="form-language"]/div/span'}); 
     I.click({xpath:'//*[@id="form-language"]/div/ul/li[1]/button'});

    //go to registration page-перехід на сторінку регістрації
    basePage.clickMyAccount();
    basePage.clickRegistir();
    accountPage.verifyRegisterAccountPage();
    accountPage.fillNewUserForm(NEW_USER);
    accountPage.submitRegistration();
    accountPage.verifyRegistation();

  
    

    // I.click({xpath:'//*[@id="top-links"]/ul/li/span/span'});
    // I.click({xpath:'//*[@id="top-links"]/ul/li/ul/li[1]'});

    

    
    //pause();
});

//product selection for buy
xScenario('grab',  ({ I }) => {
    I.amOnPage('/');
    I.click({xpath:'//*[@id="form-language"]/div/span'}); //choose en
     I.click({xpath:'//*[@id="form-language"]/div/ul/li[1]/button'});

    //I.click({xpath:'//*[@id="top-links"]/ul/li/span/span'});
    //I.click({xpath:'//*[@id="top-links"]/ul/li/ul/li[1]'});

    const regTitleText = 'Register Account';
    I.seeTextEquals(regTitleText, {xpath: '//*[@id="content"]/h1'});

    I.fillField({xpath: '//*[@id="input-firstname"]'}, "Evgeniy");
    pause();
});