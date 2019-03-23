@first
Feature: first1
    Scenario Outline: First1
        Given I launch url
        When I enter "<email>"
        When I click on next
        Examples:
        |email|
        |a.b@g.com|
        |b.a@g.com|


