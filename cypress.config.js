const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://shop.bootcamp.place",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
