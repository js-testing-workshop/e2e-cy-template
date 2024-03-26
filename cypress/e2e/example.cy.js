describe("Login Flow", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Shows something", () => {
    // products list should be visible
    // and at least 1 product is there
    cy.get("[data-cy='products-list']").find('.os-product-card').should('have.length.least', 1);
  });
});
