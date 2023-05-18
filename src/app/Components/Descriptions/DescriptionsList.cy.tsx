import React from 'react'
import DescriptionsList from './DescriptionsList'

describe('<DescriptionsList />', () => {
  it('renders', () => {
    cy.mount(<DescriptionsList />)
    cy.get('[data-testid="descriptionsList-div"]').should('exist');
    cy.get('[data-testid="description-div"]').should('have.length', 4);
  })
})