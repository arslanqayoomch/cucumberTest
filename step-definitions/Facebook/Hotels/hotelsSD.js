const { Given, Then, When } = require("@wdio/cucumber-framework");
const Commands = require("../../../POM/Commands");
const hotelFunctions = require("../../../POM/Test/Hotel");
const hotel1 = new hotelFunctions
const hotelCommands = new Commands




Given(/^I am on hotel.com$/, async function() {
   await browser.url('https://www.hotels.com/')
});

When(/^i scroll down to learn about hotels rewards$/, async function(){
hotelCommands.scrollToWebElement("//a[text()= 'Learn about Hotels.com Rewards']")
})

When(/^i click on learn about hotel rewards$/, async function(){
    hotelCommands.clickWebElement("//a[text()= 'Learn about Hotels.com Rewards']")
})


When(/^i verify hotels rewards is open on a new window$/, async function(){
  expect(await hotelCommands.getAllWindowHandles(), 'error did not open on a new tab')
})

When(/^i click on join now$/, async function(){
    hotelCommands.clickWebElement("//a[text()='JOIN NOW']")
})

Then(/^i verify form is blank/, async function(){
 expect(await hotelCommands.getWindowsCount(), 'form is not blank')
})

Then(/^i verify continue button is not enabled$/, async function(){
 expect(await hotelCommands.isWebElementEnabled("//button[text()='Continue']"), 'continue button is clickable').to.be.false;
})











