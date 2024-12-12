const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");

Given('the admin has navigate to the login page', function(){
    // Write code here that turns the phrase above into concrete actions
    console.log("Hello");
});

When('the admin login with email {string} and password {string}', function(string, string2){
    console.log("When step");
});

Then('the admin should be navigated to the admin dashboard', function(){
    // Write code here that turs the phrase above into concrete actions
    console.log("Then step");
});

Then('error message {string} should be shown', function(string){
    // Write code here that turs the phrase above into concrete actions
    console.log("Then of second scenario");
});