describe('Create Product Flow', () => {
  beforeEach(() => {
    // Login user before every test with proper credentials (described in your team's assignment)
    // TIP: use cy.login command

    // Visit create product page
  })

  it('should successfully create a product', () => {
    // Fill the form with correct data
    // TIP: for slow network conditions you can use `should("not.be.disabled")` hack when typing smth into first input
    // cypress will wait for the form to be fully operatonal
    // otherwise cypress won't be able to type anything
    // also, you can use type(product_title, {force: true}) but then other inputs will fail

    // Upload dummy image to pass input validation (check readme.md)
    // Intercept form submit request
    // Submit the form
    // Wait a form submit to finish

    // Check everything is correct - observe a successfull notification
    // Check the newly created product to be present on the home page
  })

  it('should display errors if the data is invalid', () => {
    // Fill the form with incorrect data
    // Observe errors
    // Additionally, you may check that redirect didn't happen
  })
})