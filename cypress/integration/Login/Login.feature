Feature: Login

  As User
  I want to login in app
  So I can signin correctly

  Background:
    Given I open home page

  Scenario: Valid Login
    When I login correctly
    Then I should see homepage

  Scenario: Invalid Login
    Given I open home page
    When I login incorrectly
    Then I should see error message