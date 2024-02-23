// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("loginCommand", (email, password) => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get(".btn.btn-secondary").contains("Login").click();
});

Cypress.Commands.add("registerCommand", (name, email, password) => {
    cy.get("#name").type(name);
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("#agree").click();
    cy.get(".btn.btn-secondary").contains("Register").click();
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
