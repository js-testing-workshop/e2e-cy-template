# Online Store E2E testing template

This repo is created in order to practice with `cypress` e2e tests using the production version of the [Shop Bootcamp Place](https://shop.bootcamp.place)

## Run Tests

1. Install dependencies:

```bash
npm install
```

2. Run Cypress

```bash
npm run cypress:open
```

3. Run `login-flow-example.cy.js`. It has examples of basic login scenarios. You can also check how the code looks like.

## Assignments

Each team will have the assignment -- write a code in `create-order-flow.cy.js` to buy a particular subset of products:

### Team-1

**Credentials:** **email:** foo@bar.com, **password:** Qwerty123

**Assignment:** buy any Dell laptop, any mouse, any monitor x2

### Team-2

**Credentials:** **email:** john@doe.com, **password:** Qwerty123

**Assignment:** buy any video card, Kingston SSD, any RAM x2

### Team-3

**Credentials:** **email:** uncle@bob.com, **password:** Qwerty123

**Assignment:** buy any video card x2, any gaming keyboard, Logitech mouse

### Team-4

**Credentials:** **email:** peter@pan.com, **password:** Qwerty123

**Assignment:** buy any Asus video card, any sound card, any monitor x2

**P.S.** Also, there are other boilerplates prepared, so you can cover other aspects of the application with E2E tests, namely `create-product-flow.cy.js`

## Useful tips & notes:

1. The database is reset to initial state every `15 minutes`. Please take that into account.

2. It's a good practice to rely on special attributes while working with e2e tests. So, before trying to work with any element in the DOM, try to find a specific data attribute called `data-cy`, which was defined by us in many places beforehand.

3. To test Stripe integration properly read this article, which explains how to work with iframes in cypress: [Working with iframes in Cypress](https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress). To be more specific, we in our tests we use the function called `getIframeBody`, which you can find in `create-order-flow.cy.js` file. It allows us to interact with Stripe fields within the IFrame like this:

```javascript
getIframeBody()
  .find("#cardNumber", { timeout: 60000 })
  .type("4242 4242 4242 4242");
```

4. We use `imgur` to store product images. So, in order to simulate the image upload during product creation process, you can use the following block of code:

```javascript
cy.get("[data-cy='image']").selectFile({
  contents: Cypress.Buffer.from("file contents"),
  fileName: "example.png",
  mimeType: "image/png",
  lastModified: Date.now(),
});

// intercept requests to imgur in order to not upload a real image
cy.intercept("POST", "https://api.imgur.com/**", {
  data: {
    link: "https://i.imgur.com/huOsvQS.png",
  },
});
```

5. To make tests pass under slow network condition we often put some additional checks on inputs before interacting with them:

```javascript
cy.get("[data-cy='name']").should("not.be.disabled").type("some data");
```

or, we wait for some request to finish:

```javascript
// intercept the request
cy.intercept("POST", "/some_url").as("reqIdentifier");
// wait for a request to finish
cy.wait("@reqIdentifier");
```

or, we explicitly put some timeout:

```javascript
cy.get("[data-cy='name']", { timeout: 60000 }).type("some data");
```

or, we can even change the configuration of Cypress to increase all default timeouts:

```javascript
import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 10000,
  execTimeout: 120000,
  taskTimeout: 120000,
  pageLoadTimeout: 120000,
  requestTimeout: 10000,
  responseTimeout: 60000,
});
```

Working with timeouts may seem strange for a developer, but it's rather normal in the scope of E2E tests. Because even if you're sure that some element is(or will be) 100% present on the page, the Cypress doesn't know that. So, under the hood it consistenly tries to repeat the command execution during the specified timeout and as soon as it happens, Cypress moves to the next one without waiting for the timeout to finish. Otherwise it could stuck randomly and each test run could take days and lots of resources. to better understand this concept, you can familiarize yourself with the concept of flaky tests https://docs.cypress.io/guides/cloud/flaky-test-management.

### Enjoy!
