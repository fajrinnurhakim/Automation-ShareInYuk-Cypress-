class login {
    loginSuccess() {
        cy.loginCommand(Cypress.env("email"), Cypress.env("password"));
    }
    loginWrongPassword() {
        cy.loginCommand(Cypress.env("email"), Cypress.env("wrongPassword"));
    }
    loginRequired() {
        cy.get(".btn.btn-secondary").contains("Login").click();
        cy.get("#email").should("have.attr", "required");
        cy.get("#password").should("have.attr", "required");
    }
}

export default new login();
