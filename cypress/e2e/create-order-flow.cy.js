const getIframeBody = () => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  // this timeout is needed for the case of slow nerwork conditions
  return cy.get('#checkout iframe', { timeout: 20000 })
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
}

describe('Create Order Flow', () => {
  beforeEach(() => {
    // Login user before every test with proper credentials (described in your team's assignment)
    // TIP: use cy.login command

    // Visit home page
    // Add proper products to cart (described in your team's assignment)
    // Go to cart
    // Change product(s) quantity (if needed)
    // Click 'Order' button
  })

  it('should successfully submits payment form and creates an order', () => {
    // Fill in the Stripe payment form with proper test data https://docs.stripe.com/testing
    // TIP: for slow network conditions wait approximately 60 more seconds when typing card data to the first input

    // Submit the form
    // Check if payment is successful and user is redirected to the right page
  })

  it('should not submit a payment form if payment details are invalid', () => {
    // Fill in the Stripe payment form with incorrect data and check errors for each field
    // TIP: for slow network conditions wait approximately 60 more seconds when typing card data to the first input

    // Try to submit a form, redirect should not happen
  })
})