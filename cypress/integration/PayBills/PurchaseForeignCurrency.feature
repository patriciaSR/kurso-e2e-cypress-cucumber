Feature: Pay Bills - Purchase Foreign Currency

    Background:
        Given a user already logged in the system
        When I visit -Pay Bills- page
        And I click on -Purchase Foreign Currency- tab
        Then the system shows me "Purchase Foreign Currency" tab form
    
    Scenario: Purchase Foreign Currency Correctly
        When I fill correctly purchase form
        And I click "Purchase" button
        Then I should see "Foreign currency cash was successfully purchased." message

    Scenario: Purchase Foreign Currency - Calculate costs
        When I fill correctly purchase form
        And I click "Calculate Costs" button
        Then I should see -Conversion Amount- message

    Scenario: Pay Saved Payee - Missing Currency
        When I fill correctly purchase form
        But I miss fill "currency" field
        And I click "Purchase" button
        Then I should see alert message
    
    Scenario: Pay Saved Payee - Missing Amount
        When I fill correctly purchase form
        But I miss fill "amount" field
        And I click "Purchase" button
        Then I should see alert message
    
    Scenario: Pay Saved Payee - Missing Amount
        When I fill purchase form except currency radio
        And I click "Purchase" button
        Then I should see alert message
