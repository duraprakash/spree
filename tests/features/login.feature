Feature: login
    As an admin
    I want to log in to the website admin panel
    So that I can manage my products

    Background: 
        Given user 'admin' has navigated to the admin login page


    Scenario: login with valid credentials
        When user 'admin' logs in with following credentials
            | email           | password    |
            | admin@gmail.com | admin123456 |
        Then user 'admin' should be navigated to admin panel dashboard


    Scenario Outline: login with invalid credentials
        When the user tries to log in with following credentials
            | email   | password   |
            | <email> | <password> |
        Then error message "<errroMessage>" should be shown
        Examples:
            | email           | password    | errorMessage              |
            | admin@admin.com | abc         | Invalid email or password |
            | xyz@admin.com   | admin123456 | Invalid email or password |
            | xyz@admin.com   | abc         | Invalid email or password |
            |                 | admin123456 | Invalid email or password |
            | admin@admin.com |             | Invalid email or password |
            | admin@admin.com | admin123456 | Logged in successfully    |