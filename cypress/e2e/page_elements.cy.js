describe('CounterApp tests', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('Validates the CounterAPP title', () => {
    cy.get('[data-cy="pageTitle"]').should('be.visible').and('contain', 'CounterApp');
  });

  it('Validates the counter default state', () => {
    cy.get('[data-cy="counter"]').should('be.visible');
    cy.get('[data-cy="counter"]').then((counter) => {
      expect(counter.text().trim()).to.equal('10');
    });
  });

  it('Validates the buttons existence and their values', () => {
    cy.get('[data-cy="increment"]').should('be.visible').and('have.text', '+1');
    cy.get('[data-cy="decrement"]').should('be.visible').and('have.text', '-1');
    cy.get('[data-cy="resetCounter"]').should('be.visible').and('have.text', 'Reset');
  });
});
