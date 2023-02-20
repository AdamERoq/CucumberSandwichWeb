Feature: Cucumber Sandwhich website

  Scenario: Does the webite load a title that changes color
    Given website loaded with a title 'Ingredients'
    When Ingredients button is clicked
    Then the 'Ingredients' title should change color

  Scenario: Does ingredients page load
    Given load webpage 'index'
    When click on the link 'Ingredients' 
    Then 'Ingredients' title should appear
    

    