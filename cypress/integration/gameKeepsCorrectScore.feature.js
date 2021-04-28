describe("game keeps correct score", () => {  

  it("is expected to have 3 wins for player and 2 for computer", () => {
    cy.visit("/", {
      onBeforeLoad(window) {        
        cy.stub(window.Math, "random").callsFake(
          () => { return 0 }
        );
      },
    });    
    
    cy.get("[data-cy=rock-button]").click();       
    cy.get("[data-cy=paper-button]").click(); 
    cy.get("[data-cy=paper-button]").click(); 
    cy.get("[data-cy=paper-button]").click();
    cy.get("[data-cy=scissors-button]").click();       
    cy.get("[data-cy=scissors-button]").click();

    cy.get("[data-cy=player-score]").should("contain.text", "Player: 3");
    cy.get("[data-cy=computer-score]").should("contain.text", "Computer: 2");
  })

})