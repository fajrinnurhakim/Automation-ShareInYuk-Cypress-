const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        env: {
            BASE_URL: "http://localhost:5173/",
            email: "fajrin12345@gmail.com",
            password: "fajrin12345",
            wrongPassword: "wartiyem123",
            requiredPassword: "wa",
            registerName: "wartiyemGod",
            imageUrl:
                "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
            registerEmail: "wartiyem54321@gmail.com",
            registerPassword: "wartiyem54321",
            currentPassword: "wartiyem",
            newPassword: "wartiyem123",
        },

        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        viewportWidth: 1200,
        viewportHeight: 800,
        defaultCommandTimeout: 20000,
        requestTimeout: 20000,
    },
});
