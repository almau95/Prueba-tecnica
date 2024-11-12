Feature: Login
    
    Scenario: Login
      Given I open login screen
      When I enter a valid username and password
      And I click the loggin button
      Then I should see the home screen