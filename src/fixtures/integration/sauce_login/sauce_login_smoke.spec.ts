// import LoginPage from './support/sauce_login/LoginPage_screen';
const add_class = require('./support/sauce_login/LoginPage_screen')
describe("swag Labs",()=>{
    it("login",async()=>{
       await add_class.performLogin();
    })
})