const Commands = require("../Commands");

class Homepage {
    h1 = new Commands();

 timeMachine = 'locator'
   
 async scrollToTimeMachine (){
 await this.h1.scrollToWebElement(this.timeMachine);

}

async clickOnTimeMachine(){
await this.h1.clickWebElement(this.timeMachine);    
}

async verifyTimeMachine(){
return await this.h1.isWebElementDisplayed(this.timeMachine);    
}


}

module.exports = Homepage;