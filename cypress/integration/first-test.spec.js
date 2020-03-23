describe('First test', () => {
    it('should visit login page', () => {
        cy.visit('/login');
    });

    it('should log user in', () => {
      // cy.get('#email').type(Cypress.config('email'));
      // cy.get('#password').type(Cypress.config('password'));
      cy.get('.login-button').click();
      cy.url().should('include', '/user');
    });
});
