const { Given, When, Then } = require("@wdio/cucumber-framework");
const Homepage = require("../../../POM/Darksky/Homepage");

const darkSkyHome = new Homepage();

Given(/^I am on the home page of dark sky$/, async function () {
  await browser.url("https://");
});

When(/^I scroll down to time machine$/, async function () {
  await darkSkyHome.scrollToTimeMachine();
});

When(/^I click on time machine$/, async function () {
  await darkSkyHome.clickOnTimeMachine();
});

Then(/^I verify time machine is displayed$/, async function () {
 expect(await darkSkyHome.verifyTimeMachine(), 'time machine is not displayed').to.be.true;
});



