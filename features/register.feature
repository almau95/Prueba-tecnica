Feature: Register
    
    Scenario: Registration
      Given I open login screen
      When I enter to registration screen
      And I enter a valid user information
      And I click the register button
      Then I should see the home screen