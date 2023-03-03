const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            return config;
        },
        projectId: "sdetpro",
        specPattern: "./cypress/tests/*/*",
        baseUrl: "https://www.demoblaze.com/"
    },
    defaultCommandTimeout: 10000
});
