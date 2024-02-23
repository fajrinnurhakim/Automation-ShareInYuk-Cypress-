import register from "../support/page_object/register";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Register Success", () => {
        register.registerSuccess();
    });
    it("Register Failed", () => {
        register.registerFailed();
    });
    it("Register Required Field", () => {
        register.registerRequired();
    });
});
