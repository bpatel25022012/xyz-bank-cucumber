$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/bank/resources/featurefile/bankmanager.feature");
formatter.feature({
  "line": 2,
  "name": "Bank manager feature",
  "description": "As a user I want to check bank manager functionality on xyz bank website",
  "id": "bank-manager-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankManager"
    }
  ]
});
formatter.before({
  "duration": 28345310900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Bank manager should add customer successfully",
  "description": "",
  "id": "bank-manager-feature;bank-manager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter first name \"Tiger\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter last name \"Foster\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter post code \"HA2 6JT\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see customer added successfully message",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 294144000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 271648700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 635416400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiger",
      "offset": 20
    }
  ],
  "location": "BankManagerSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 826545900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foster",
      "offset": 19
    }
  ],
  "location": "BankManagerSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 566368800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA2 6JT",
      "offset": 19
    }
  ],
  "location": "BankManagerSteps.iEnterPostCode(String)"
});
formatter.result({
  "duration": 914519600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 229959800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 37875200,
  "status": "passed"
});
formatter.after({
  "duration": 1336105100,
  "status": "passed"
});
formatter.before({
  "duration": 17046520900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Bank manager should delete customer successfully",
  "description": "",
  "id": "bank-manager-feature;bank-manager-should-delete-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on customers tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I search customer by name \"Albus\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on delete button",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 11407400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 2031220800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnCustomersTab()"
});
formatter.result({
  "duration": 229763900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Albus",
      "offset": 27
    }
  ],
  "location": "BankManagerSteps.iSearchCustomerByName(String)"
});
formatter.result({
  "duration": 626387200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnDeleteButton()"
});
formatter.result({
  "duration": 10317257800,
  "status": "passed"
});
formatter.after({
  "duration": 1003999700,
  "status": "passed"
});
formatter.uri("src/test/java/com/bank/resources/featurefile/customerpage.feature");
formatter.feature({
  "line": 3,
  "name": "Customer page feature",
  "description": "As a user I customer page functionality on xyz bank website",
  "id": "customer-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Customer"
    }
  ]
});
formatter.before({
  "duration": 18102704000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Customer should login and logout successfully",
  "description": "",
  "id": "customer-page-feature;customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select customer name \"Albus Dumbledore\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify logout button is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see your name lable is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 4948000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 1170655700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Albus Dumbledore",
      "offset": 24
    }
  ],
  "location": "CustomerPageSteps.iSelectCustomerName(String)"
});
formatter.result({
  "duration": 1169826700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 220524400,
  "status": "passed"
});
formatter.match({
  "location": "CustomerPageSteps.iVerifyLogoutButtonIsDisplayed()"
});
formatter.result({
  "duration": 301192900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 10140122500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerPageSteps.iShouldSeeYourNameLableIsDisplayed()"
});
formatter.result({
  "duration": 103165100,
  "status": "passed"
});
formatter.after({
  "duration": 926937600,
  "status": "passed"
});
formatter.before({
  "duration": 20727957700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Customer should deposit money successfully",
  "description": "",
  "id": "customer-page-feature;customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select customer name \"Albus Dumbledore\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on deposit wihtdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verifty depsit successful message displayed on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 3242100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 185707900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Albus Dumbledore",
      "offset": 24
    }
  ],
  "location": "CustomerPageSteps.iSelectCustomerName(String)"
});
formatter.result({
  "duration": 1900287500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 655785300,
  "status": "passed"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnDepositButton()"
});
formatter.result({
  "duration": 348852900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "CustomerPageSteps.iEnterAmount(String)"
});
formatter.result({
  "duration": 377263000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnDepositWihtdrawButton()"
});
formatter.result({
  "duration": 154321000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerPageSteps.iVeriftyDepsitSuccessfulMessageDisplayedOnTheScreen()"
});
formatter.result({
  "duration": 113867300,
  "status": "passed"
});
formatter.after({
  "duration": 874139300,
  "status": "passed"
});
});