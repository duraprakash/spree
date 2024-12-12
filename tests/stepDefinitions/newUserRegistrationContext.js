const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("playwright/test");

Given('the user has navigated to the register page', function(){
    console.log("hello");
});

Then('the user should be navigated to the admin dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("hello2")
});

When('the user enters following user information', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    // console.log(dataTable.hashes());
    for(const {name, email, password} of dataTable.hashes()){
        // const {name, email, password} = elem;
        console.log(name, email, password);
    }
});


Then('error message {string} should pop up on the webUI', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("Then of second scenario");
});
