Feature: login
    As an admin
    I want to login to the admin dashboard
    So that I can manage my products

Background:
    Given the admin has navigate to the login page

Scenario: login with valid credentials
    When the admin login with email "admin@admin.com" and password "admin123456"
    Then the admin should be navigated to the admin dashboard

Scenario: login with invalid credentials
    When the admin login with email "admin1@admin.com" and password "123456"
    Then error message "Invalid credentials" should be shown