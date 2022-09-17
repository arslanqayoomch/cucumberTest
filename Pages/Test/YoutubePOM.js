const Commands = require("../Commands");

class YtFunctions{

y1 = new Commands();
//a[@href='/c/ufc']
//ufcLogo = "//a[@href='/c/ufc']/div[@id='avatar']//img"; 
ufcLogo = "//a[@href='/c/ufc']"; 
nflLogo = "//a[@href='/c/NFL']"; 
searchBar = '//input[@name="search_query"]';
searchButton = '#search-icon-legacy'
// ('//button[@aria-label="Search"]')

    
    async typeInSearchBox(search){
    await this.y1.typeInWebElement(this.searchBar, search);
    
    }

    async clickSearchButton(){
     await this.y1.clickWebElement(this.searchButton);
     
    }
   
    async isUfcLogoDisplayed(){
      return await this.y1.isWebElementDisplayedWithWait(this.ufcLogo);
    }
    
    async isNflLogoDisplayed(){
        return await this.y1.isWebElementDisplayedWithWait(this.nflLogo);
      }
   
    
    
    }
    
    module.exports = YtFunctions