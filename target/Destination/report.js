$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/registration.feature");
formatter.feature({
  "name": "User should able to register successfully,",
  "description": "  So that he can use all user features from our website",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should able to register",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@registration"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on register page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest.MyStepdefs.userIsOnRegisterPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters all registration details",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest.MyStepdefs.userEntersAllRegistrationDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on register button",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.userClicksOnRegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest.MyStepdefs.userShouldAbleToRegisterSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});