import logout from "../support/page_object/logout";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("logout Success", () => {
        logout.logoutSuccess();
    });
});
