
describe("user can play a game using buttons", () => {  
  
  it("winner is correctly determined when computer picks Rock", () => {
    cy.visit("/", {
      onBeforeLoad(window) {        
        cy.stub(window.Math, "random").callsFake(
          () => { return 0 }
        );
      },
    });    
    
    cy.get("[data-cy=rock-button]").click();       
    cy.get("[data-cy=winner-display]").should("contain.text", "Tie");

    cy.get("[data-cy=paper-button]").click();       
    cy.get("[data-cy=winner-display]").should("contain.text", "Player Wins!");

    cy.get("[data-cy=scissors-button]").click();       
    cy.get("[data-cy=winner-display]").should("contain.text", "Computer Wins!");
  })

  it("winner is correctly determined when computer picks Paper", () => {
    cy.visit("/", {
      onBeforeLoad(window) {        
        cy.stub(window.Math, "random").callsFake(
          () => { return 0.5 }
        );
      },
    });    
    
    cy.get("[data-cy=rock-button]").click();       
    cy.get("[data-cy=winner-display]").should("contain.text", "Computer Wins!");

    cy.get("[data-cy=paper-button]").click();       
    cy.get("[data-cy=winner-display]").should("contain.text", "Tie");

    cy.get("[data-cy=scissors-button]").click();       
    cy.get("[data-cy=winner-display]").should("contain.text", "Player Wins!");
  })

  it("winner is correctly determined when computer picks Scissors", () => {
    cy.visit("/", {
      onBeforeLoad(window) {        
        cy.stub(window.Math, "random").callsFake(
          () => { return 1 }
        );
      },
    });    
    
    cy.get("[data-cy=rock-button]").click();       
    cy.get("[data-cy=winner-display]").should("contain.text", "Player Wins!");

    cy.get("[data-cy=paper-button]").click();       
    cy.get("[data-cy=winner-display]").should("contain.text", "Computer Wins!");

    cy.get("[data-cy=scissors-button]").click();       
    cy.get("[data-cy=winner-display]").should("contain.text", "Tie");
  })
})
