import login from "./login";

class logout {
    logoutSuccess() {
        login.loginSuccess();
        cy.get(".btn.btn-primary.me-2").contains("Logout").click();
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
}

export default new logout();
