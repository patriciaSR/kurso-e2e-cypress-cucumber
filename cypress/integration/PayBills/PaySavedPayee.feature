Feature: Pay Bills - Pay Saved Correctly

  As a logged User
  I want to make payment to my saved payees
  So I can save the payment

  Background:
    Given a user already logged in the system
    When I visit -Pay Bills- page
    Then the system shows me "Pay Saved Payee" tab form
  
  Scenario: Pay Saved Correctly
    When I fill correctly payment form
    And I click "Pay" button
    Then I should see "The payment was successfully submitted." message

  Scenario: Pay Saved Payee - Missing Amount
    When I fill correctly payment form
    But I miss fill "amount" field
    And I click "Pay" button
    Then I should see "amount" field with "Please fill in this field." alert message

  Scenario: Pay Saved Payee - Missing Date
    When I fill correctly payment form
    But I miss fill "date" field
    And I click "Pay" button
    Then I should see "date" field with "Please fill in this field." alert message