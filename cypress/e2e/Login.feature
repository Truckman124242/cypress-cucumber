Feature: Login

Scenario: Successfully signing in
    Given I am on Home Page
    When I open Log in modal
    When I enter username "olehsolodkyi1998@gmail.com" and password "12345Test"
    When I click login button
    Then I am signed in

Scenario: Login button is disabled when leaving fields empty in "Log in" modal
    Given I am on Home Page
    When I open Log in modal
    Then Login button is disabled

Scenario: Entering incorrect credentails when signing in
    Given I am on Home Page
    When I open Log in modal
    When I enter username "test@gmail.com" and password "newPass"
    When I click login button
    Then Error message appears


