describe('User test', () => {
  it('should logout', () => {
    cy.get('[style="padding-top: 5px; padding-right: 20px;"] > a > .mat-focus-indicator').click();
    cy.url().should('include', '/login');
  });
});
