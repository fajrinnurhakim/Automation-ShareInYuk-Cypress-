import login from "../support/page_object/login";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Login Success", () => {
        login.loginSuccess();
    });

    it("Login Wrong Password", () => {
        login.loginWrongPassword();
    });

    it("Login Required Field", () => {
        login.loginRequired();
    });
});
