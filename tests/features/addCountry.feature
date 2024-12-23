Feature: add country
    As an admin
    I want to add a new country
    So that I can manage orders and shipping according to the country


    Scenario: add a new country
        Given user "admin" has logged in to the admin panel with following credentials:
            | email           | password    |
            | admin@admin.com | admin123456 |
        When user "admin" adds a new country with following details:
            | countryName | countryIsoName | countryIso | countryIso3 |
            | Kosovo      | KOSOVO         | XK         | XKX         |
        Then the country "Kosovo" should be in the countries list