const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://shop.bootcamp.place",
    env: {
      create_product_url: "/create-product",
      payment_status_url: "/payment-status",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
