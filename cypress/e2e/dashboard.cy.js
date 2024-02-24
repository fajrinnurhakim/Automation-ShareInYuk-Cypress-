import dashboard from "../support/page_object/dashboard";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Create Success", () => {
        dashboard.create();
    });

    it("Create Error", () => {
        dashboard.createUnsuccessed();
    });
    it("Read data", () => {
        dashboard.read();
    });
    it("Update data", () => {
        dashboard.update();
    });
    it("Delete data", () => {
        dashboard.deleteListJob();
    });
});
