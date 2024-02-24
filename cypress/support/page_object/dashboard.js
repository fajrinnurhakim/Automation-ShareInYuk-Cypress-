import login from "./login";

class dashboard {
    create() {
        login.loginSuccess();
        cy.get("summary.btn").click();
        cy.get("li>a").contains("Dashboard").click();
        cy.get("#caption").type("test");
        cy.get('input[type="file"]').selectFile("cypress/images/logo.png");
        cy.get("button").contains("Create Share").click();
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
    createUnsuccessed() {
        login.loginSuccess();
        cy.get("summary.btn").click();
        cy.get("li>a").contains("Dashboard").click();
        cy.get("button").contains("Create Share").click();
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
    read() {
        login.loginSuccess();
        cy.get("summary.btn").click();
        cy.get("li>a").contains("Dashboard").click();
    }
    update() {
        login.loginSuccess();
        cy.get("summary.btn").click();
        cy.get("li>a").contains("Dashboard").click();
        cy.get(
            "tbody > tr:nth-child(2) > td:last-child > button:first-child"
        ).click();
        cy.on("window:alert", (message) => {
            expect(message).to.equal("Enter the updated caption:");
            cy.window().then((win) => {
                cy.stub(win, "prompt").returns("New Caption");
            });
        });
        cy.on("window:confirm", () => true);
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
    deleteListJob() {
        login.loginSuccess();
        cy.get("summary.btn").click();
        cy.get("li>a").contains("Dashboard").click();
        cy.get(
            "tbody > tr:nth-child(2) > td:last-child > button:last-child"
        ).click();
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
}

export default new dashboard();
