describe('template spec', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/');
  })
  it('should render both components', () => {
    cy.get('[data-testid="app-wheel-div"]').should('exist');
    // cy.get('[data-testid="app-wheel-component"]').should('exist');
    cy.get('[data-testid="app-description-div"]').should('exist');
  })
  it('should render the wheel with all choices', () => {
    cy.get('[data-testid="wheel-div"]').should('exist');
    cy.get('[data-testid="choice-button"]').should('have.length', 4);
  })
})

export {}