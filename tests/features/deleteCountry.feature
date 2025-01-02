Feature:
    As an admin
    I want to delete an existing country
    So that I can manage countries with complex and unfeasible delivery options


    Scenario:
        Given user "admin" has logged in to the admin panel with following credentials:
            | email           | password    |
            | admin@admin.com | admin123456 |
        And user "admin" has added a new country with following details:
            | countryName | countryIsoName | countryIso | countryIso3 |
            | Kosovo      | KOSOVO         | XK         | XKX         |
        When user "admin" deletes the country "Kosovo"
        Then the country "Kosovo" should not be in the countries list