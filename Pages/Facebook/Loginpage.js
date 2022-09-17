const Commands = require("../Commands");

class Loginpage{
    command = new Commands();

     //locators
     loginErrorlocator = '//div[contains(text(), “The email or mobile”)]';
    //functions
    /**
     * function to get if error is displayed
     */
    async isLoginErrorDisplayed(){
      const loginErrMsg = this.command.getTextFromWebElement(this.loginErrorlocator);
         return await this.command.isWebElementDisplayed(this.loginErrMsg);
  }

}

module.exports = Loginpage;