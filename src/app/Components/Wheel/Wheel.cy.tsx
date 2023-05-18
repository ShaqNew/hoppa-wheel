import React, { useState } from 'react'
import Wheel from './Wheel'
import ChoicesContext from '@/app/Context/state'
import { choicesList } from '@/app/utils/choices';

// I had trouble implementing context data with this unit 
// test to test the choice swapping function

describe('<Wheel />', () => {
  // const [choicesState, setChoicesState] = useState(choicesList);
  // const value = { choicesState, setChoicesState };
  it('renders', () => {
    
    cy.mount(
      // <ChoicesContext.Provider value={value}>
        <Wheel />
      // </ChoicesContext.Provider>
      )
    cy.get('[data-testid="wheel-div"]').should('exist');
    cy.get('[data-testid="choice-button"]').should('have.length', 4);
  })


})