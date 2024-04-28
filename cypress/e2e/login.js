import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given("I am on Home Page", () => {
  cy.visit("https://qauto.forstudy.space", {
    auth: {
      username: "guest",
      password: "welcome2qauto",
    },
  });
});

When('I open Log in modal', () => {
  cy.contains("Sign In").click();
  cy.get(".modal-title").should("have.text", "Log in");
});

When(
  "I enter username {string} and password {string}",
  (username, password) => {
    cy.get("#signinEmail").type(username);
    cy.get("#signinPassword").type(password);
  }
);

When("I click login button", () => {
  cy.get(".modal-footer > .btn-primary").click();
});

Then("I am signed in", () => {
  cy.get("h1").should("contain", "Garage");
});


Then("Login button is disabled", () => {
  cy.get(".btn-primary").should("be.disabled");
});

Then("Error message appears", () => {
  cy.get(".alert").should("have.text", "Wrong email or password");
});
