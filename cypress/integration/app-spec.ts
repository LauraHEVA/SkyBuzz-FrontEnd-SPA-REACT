// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/login");
  });

  it("renders the app should find h2 with login", function () {
    cy.get("h3").should("contain", "Sign in and start buzzing");
  });

  it("should find the 1st input and type Luis0, then should find the 2nd input and type Luis1234", function () {
    cy.get("input").first().type("Luis0").should("have.value", "Luis0");
    cy.get("input").last().type("Luis1234").should("have.value", "Luis1234");
    cy.get("button").contains("Log in").click();
  });
});

export {};
