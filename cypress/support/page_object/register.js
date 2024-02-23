class register {
    registerSuccess() {
        cy.get("a.font-bold.text-secondary").click();
        cy.registerCommand(
            Cypress.env("registerName"),
            Cypress.env("registerEmail"),
            Cypress.env("registerPassword")
        );
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }

    registerFailed() {
        cy.get("a.font-bold.text-secondary").click();
        cy.registerCommand(
            Cypress.env("registerName"),
            Cypress.env("registerEmail"),
            Cypress.env("registerPassword")
        );
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }

    registerRequired() {
        cy.get("a.font-bold.text-secondary").click();
        cy.get(".btn.btn-secondary").contains("Register").click();
        cy.get("#name").should("have.attr", "required");
        cy.get("#email").should("have.attr", "required");
        cy.get("#password").should("have.attr", "required");
    }
}

export default new register();
