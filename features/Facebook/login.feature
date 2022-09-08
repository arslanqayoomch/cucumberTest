@login
Feature: Login

    @loginEnabled
    Scenario: Verify login fields are enabled by default
        Given I am on facebook landing page
        Then I verify login username field is enabled
        And I verify login password field is enabled
        And I verify login button field is enabled