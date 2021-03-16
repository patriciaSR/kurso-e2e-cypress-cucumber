Feature: Pay Bills - Add New Payee Correctly

  As a logged User
  I want to add new payee
  So I can send the new payment

  Background:
    Given a user already logged in the system
    When I visit -Pay Bills- page
    And I click on -Add New Payee- tab
    Then the system shows me "Add New Payee" tab form

  Scenario: Add New Payee Correctly
    When I fill correctly new payee form
    And I click "Add" button
    Then I should see "The new payee test was successfully created." message

  Scenario: Add New Payee - Missing Name
    When I fill correctly new payee form
    But I miss fill "name" field
    And I click "Add" button
    Then I should see "name" field with "Please fill in this field." alert message

  Scenario: Add New Payee - Missing Address
    When I fill correctly new payee form
    But I miss fill "address" field
    And I click "Add" button
    Then I should see "address" field with "Please fill in this field." alert message

  Scenario: Add New Payee - Missing Account
    When I fill correctly new payee form
    But I miss fill "account" field
    And I click "Add" button
    Then I should see "account" field with "Please fill in this field." alert message
