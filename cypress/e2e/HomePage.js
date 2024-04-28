import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given("I am on Home Page", () => {
  cy.visit("https://qauto.forstudy.space/", {
    auth: {
      username: "guest",
      password: "welcome2qauto",
    },
  });
});

Then("I see all social media buttons", () => {
  cy.get(".socials_icon").should("have.length", 5);
});

When('I click on SignUp button', () => {
  cy.contains("Sign up").click();
});

Then("I see Registration modal", () => {
  cy.get(".modal-title").should("have.text", "Registration");
});

When('I click on Sign In button', () => {
  cy.contains("Sign In").click();
});

Then("I see Log In modal", () => {
  cy.get(".modal-title").should("have.text", "Log in");
});