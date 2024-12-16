const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");

Given('user {string} has navigated to the admin login page', function (username) {
  // Write code here that turns the phrase above into concrete actions
  return 'passed';
});

When('user {string} logs in with following credentials', function (string, dataTable) {
  // Write code here that turns the phrase above into concrete actions
  return 'passed';
});

Then('user {string} should be navigated to admin panel dashboard', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'passed';
});

