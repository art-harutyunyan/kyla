describe('Increment/Decrement buttons functionality', () => {
  beforeEach(function () {
    cy.visit('');
    cy.get('[data-cy="counter"]').invoke('text').as('counterDefaultValue');
  });

  it('Validates increment number functionality', function () {
    cy.get('[data-cy="increment"]').click();
    cy.get('[data-cy="counter"]').then((counter) => {
      expect(counter.text().trim()).to.equal((parseInt(this.counterDefaultValue) + 1).toString());
    });
  });

  it('Validates decrement number functionality', function () {
    cy.get('[data-cy="decrement"]').click();
    cy.get('[data-cy="counter"]').then((counter) => {
      expect(counter.text().trim()).to.equal((parseInt(this.counterDefaultValue) - 1).toString());
    });
  });

  it('Validate the Reset button', function () {
    cy.get('[data-cy="increment"]').click().click();
    cy.get('[data-cy="resetCounter"]').click();
    cy.get('[data-cy="counter"]').then((counter) => {
      expect(counter.text().trim()).to.equal(parseInt(this.counterDefaultValue).toString());
    });
  });
});
