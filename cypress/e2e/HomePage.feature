Feature: Home Page

Scenario: All 5 social media buttons are present
    Given I am on Home Page
    Then I see all social media buttons

Scenario: Registration modal is present
    Given I am on Home Page
    When I click on SignUp button
    Then I see Registration modal
    
    Scenario: Log in  modal is present
    Given I am on Home Page
    When I click on Sign In button
    Then I see Log In modal