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

3. Run `example.cy.js`. You should see a home page with the list of products.

## Useful tips & notes:

1. The database is reset to initial state every `15 minutes`. Please take that into account.

2. It's a good practice to rely on special attributes while working with e2e tests. So, before trying to work with any element in the DOM, try to find a specific data attribute called `data-cy`, which was defined by us in many places beforehand.

3. To test Stripe integration properly read this article, which explains how to work with iframes in cypress: [Working with iframes in Cypress](https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress)

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

### Enjoy!
