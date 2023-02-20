const assert = require('assert');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const {AfterAll, BeforeAll} = require('@cucumber/cucumber')


const Browser = require("../../Browser");
const browser = new Browser();
const timeout = 20000;

BeforeAll(function() {
    browser.browserBuild();
}, timeout);

Before(function() {
    browser.browserNavigate('http://127.0.0.1:5500/index.html');
}, timeout);

AfterAll(function() {
    browser.browserExit();// ref this for line 31
}, timeout);


Given("website loaded with a title {string}", function(value) {
    browser.getElement("textColor");
});

Given("load webpage {string}", function(value) {
    browser.getElement("header");
});

When("click on the link {string}", function(value) {
    browser.elementClick("ingredients")
});

/*When("the ingredients button is clicked", function(value) {
    const button = browser.getElement(ingredients);// check the hint in teams
    button.elementClick("button")
    const textColor = elementColor("textColor")
    assert(browser(textColor) == value);
});*/

When("Ingredients button is clicked", function() {
    browser.elementClick("button");
});

Then("the {string} title should change color", async function(value) {  
    const titleColor = await browser.elementColor("textColor");
    console.log(`${titleColor}`);
    value = "rgba(255, 0, 0, 1)";
    assert(value == titleColor);
});

Then("{string} title should appear", function(value) {  
    value == browser.getElement("button");
});

