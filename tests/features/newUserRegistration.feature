Feature: register
    As a user
    I want to register to the spree website
    So that I can manage my products

    Background:
        Given the user has navigated to the register page

    Scenario: register with valid credentials
        When the user enters following user information
            | name   | email            | password      | confirmpassword |
            | admin1 | admin1@gmail.com | admin1@123456 | admin1@123456   |
        Then the user should be navigated to the admin dashboard

    Scenario: register with already existing user
        Given the user has been registered with following user information
            | name   | email            | password      | confirmpassword |
            | admin1 | admin1@gmail.com | admin1@123456 | admin1@123456   |
        And the user has been navigated to the admin dashboard
        And user has logged out
        And the user has navigated to the register page
        When the user enters following user information
            | name   | email            | password      | confirmpassword |
            | admin1 | admin1@gmail.com | admin1@123456 | admin1@123456   |
        Then error message "User already exists. Please choose another email address." should pop up on the webUI 
