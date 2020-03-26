package WebTest;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class MyStepdefs {

    HomePage homePage = new HomePage();
    RegistrationPage registrationPage = new RegistrationPage();
    RegistrationResultPage registrationResultPage = new RegistrationResultPage();

    @Given("user is on register page")
    public void userIsOnRegisterPage()
    { homePage.ClickOnRegisterButton();
    }

    @When("user enters all registration details")
    public void userEntersAllRegistrationDetails()
    {
        registrationPage.userEntersRegistrationDetails();
    }

    @And("user clicks on register button")
    public void userClicksOnRegisterButton() {
    }

    @Then("user should able to register successfully")
    public void userShouldAbleToRegisterSuccessfully()
    {
        registrationResultPage.VerifyUserRegistrationSuccessMessage();

    }

}
