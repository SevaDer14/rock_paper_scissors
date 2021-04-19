describe('user can see app interface', () => {
  it('is expected to successfuly render the page', () => {
    cy.visit("/");    
    cy.get('[data-cy=app-header]').should('contain.text', 'Rock Paper Scissors');
    cy.get('[data-cy=rock-button]').should('contain.text', 'Rock');
    cy.get('[data-cy=paper-button]').should('contain.text', 'Paper');
    cy.get('[data-cy=scissors-button]').should('contain.text', 'Scissors');
    cy.get('[data-cy=player1-hand-display]').should('exist');
    cy.get('[data-cy=player2-hand-display]').should('exist');
  })
})
