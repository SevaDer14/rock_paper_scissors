describe('user can play a game using buttons', () => {
  before( () => {
    cy.visit("/"); 
  })

  it('is expected to show rock if user press rock button', () => {
    cy.get('[data-cy=rock-button]').click
    cy.get('[data-cy=player1-hand-display]').should('contain.text', 'Rock')
  })

  it('is expected to show rock if user press paper button', () => {
    cy.get('[data-cy=paper-button]').click
    cy.get('[data-cy=player1-hand-display]').should('contain.text', 'Paper')
  })

  it('is expected to show rock if user press scissors button', () => {
    cy.get('[data-cy=scissors-button]').click
    cy.get('[data-cy=player1-hand-display]').should('contain.text', 'Scissors')
  })
})
