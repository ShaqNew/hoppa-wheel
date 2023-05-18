import React from 'react'
import Description from './Description'
import { choicesList } from '@/app/utils/choices'

describe('<Description />', () => {
  it('renders', () => {
    choicesList[0].position = 2
    cy.mount(<Description key={0} choice={choicesList[0]}/>)
    cy.get('[data-testid="description-div"]').should('exist');
    cy.get('[data-testid="description-div"]').should('not.have.css', 'border', '1px solid rgb(0, 0, 0)');
    cy.get('[data-testid="description-popup-div"]').should('have.css', 'opacity', '0');
    cy.get('[data-testid="description-popup-div"]').should('have.css', 'margin-left', '450px');
  })
  it('displays additional information when selected', () => {
    choicesList[0].position = 1
    cy.mount(<Description key={0} choice={choicesList[0]}/>)
    cy.get('[data-testid="description-div"]').should('have.css', 'border', '1px solid rgb(0, 0, 0)');
    cy.get('[data-testid="description-popup-div"]').should('have.css', 'opacity', '1');
    cy.get('[data-testid="description-popup-div"]').should('have.css', 'margin-left', '530px');
    cy.get('[data-testid="description-popup-div"]').should('contain', "Preserve memories");
    cy.get('[data-testid="description-popup-div"]').should('contain', "create lasting impressions");
  })
})