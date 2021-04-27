describe('user can see and interact with interface', () => {
  it('is expected to successfuly render the page', () => {
    cy.visit("/");    
    cy.get('[data-cy=app-header]').should('contain.text', 'Rock Paper Scissors');
    cy.get('[data-cy=rock-button]').should('contain.text', 'Rock');
    cy.get('[data-cy=paper-button]').should('contain.text', 'Paper');
    cy.get('[data-cy=scissors-button]').should('contain.text', 'Scissors');
    cy.get('[data-cy=player1-hand-display]').should('exist');
    cy.get('[data-cy=player2-hand-display]').should('exist');
  })

  describe("user can play a game using buttons", () => {
  
    before(() => {
      cy.visit("/");
    });

    it("is expected to show rock if user press rock button", () => {
      cy.get("[data-cy=rock-button]").click();
      cy.get("[data-cy=player1-hand-display]").should("contain.text", "Rock");
    });

    it("is expected to show paper if user press paper button", () => {
      cy.get("[data-cy=paper-button]").click();
      cy.get("[data-cy=player1-hand-display]").should("contain.text", "Paper");
    });

    it("is expected to show scissors if user press scissors button", () => {
      cy.get("[data-cy=scissors-button]").click();
      cy.get("[data-cy=player1-hand-display]").should("contain.text", "Scissors");
    });
  })
})
