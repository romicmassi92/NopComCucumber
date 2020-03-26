Feature: User should be able to chane the currency
  @changecurrency
  Scenario: User should to able to change currency to Euro for all featured products
    Given User is in the homepage
    When User selects currency to Euro
    Then User should be able to see prices in Euro for all featured products