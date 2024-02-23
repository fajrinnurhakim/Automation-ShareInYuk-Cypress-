class login {
    loginSuccess() {
        cy.loginCommand(Cypress.env("email"), Cypress.env("password"));
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
    loginWrongPassword() {
        cy.loginCommand(Cypress.env("email"), Cypress.env("wrongPassword"));
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
    loginRequired() {
        cy.get(".btn.btn-secondary").contains("Login").click();
        cy.get("#email").should("have.attr", "required");
        cy.get("#password").should("have.attr", "required");
    }
}

export default new login();
