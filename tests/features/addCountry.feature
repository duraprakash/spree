Feature: add country
    As an admin
    I want to add a new country
    So that I can add a new country that is not listed


    Scenario: add a new country
        Given user "admin" has logged in to the admin panel
            | email           | password    |
            | admin@admin.com | admin123456 |
        # When user "admin" adds a new country with following details:
        #     | countryName | countryIsoName | countryIso | countryIso3 |
        #     | Kosovo      | KOSOVO         | XK         | XKX         |
        When user "admin" adds a new country with following details:
            | countryName | countryIsoName | countryIso | countryIso3 |
            | Aaa         | AAA            | AA         | AAA         |
        Then the country "Aaa" should be in the countries list
