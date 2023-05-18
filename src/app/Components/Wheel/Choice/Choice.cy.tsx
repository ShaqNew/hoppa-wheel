import React from 'react'
import Choice from './Choice'
import { choicesList } from '@/app/utils/choices'

describe('<Choice />', () => {
  it('renders', () => {
    cy.mount(<Choice
      key={0}
      choice={choicesList[0]}
      swapChoices={()=>{}}
     />)
     cy.get('[data-testid="choice-button"]').should('exist');
     cy.get('[data-testid="choice-button-text"]').should('have.text', 'High Resolution Camera');
  })

  it('triggers swapChoices() when clicked', () => {
    const onClick = cy.stub().as('swapChoices');
    cy.mount(<Choice
      key={0}
      choice={choicesList[0]}
      swapChoices={onClick}
     />)
    cy.get('[data-testid="choice-button"]').click()
    cy.get('@swapChoices').should('have.been.called');
  })
})