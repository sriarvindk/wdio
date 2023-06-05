class LoginPage{
    performLogin():void{
        const {validCredentials}= require('../fixtures/sauce-credenials.json')
        $('~test-Username').setValue(validCredentials.Username);
       $('~test-Password').setValue(validCredentials.Password);
       $('~test-LOGIN').click()

    }
}
export default new LoginPage();