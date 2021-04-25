const GameLogic = require("../../src/GameLogic");

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

  describe("when playing against PC winner is correctly determined", () => {
    
    describe('compures picks Rock', () => {
      beforeEach(() => {
        cy.stub(gameLogic, 'randomHand').with(0)
      })

      it("is expected to retern a correct winner", () => {
        cy.get("[data-cy=rock-button]").click();
        cy.get("[data-cy=winner-display]").should("contain.text", "Tie");
      })

      it("is expected to retern a correct winner", () => {
        cy.get("[data-cy=paper-button]").click();
        cy.get("[data-cy=winner-display]").should("contain.text", "Player Wins!");
      })

      it("is expected to retern a correct winner", () => {
        cy.get("[data-cy=scissors-button]").click();
        cy.get("[data-cy=winner-display]").should("contain.text", "Computer Wins!");
      })
    })
    
    describe('compures picks Paper', () => {
      beforeEach(() => {
        cy.stub(gameLogic, 'randomHand').with(1)
      })

      it("is expected to retern a correct winner", () => {
        cy.get("[data-cy=rock-button]").click();
        cy.get("[data-cy=winner-display]").should("contain.text", "Computer Wins!");
      })
    
      it("is expected to retern a correct winner", () => {
        cy.get("[data-cy=paper-button]").click();
        cy.get("[data-cy=winner-display]").should("contain.text", "Tie");
      })
    
      it("is expected to retern a correct winner", () => {
        cy.get("[data-cy=scissors-button]").click();
        cy.get("[data-cy=winner-display]").should("contain.text", "Player Wins!");
      })
    })

    describe('compures picks Scissors', () => {
      beforeEach(() => {
        cy.stub(gameLogic, 'randomHand').with(2)
      })

      it("is expected to retern a correct winner", () => {
        cy.get("[data-cy=rock-button]").click();
        cy.get("[data-cy=winner-display]").should("contain.text", "Player Wins!");
      })
    
      it("is expected to retern a correct winner", () => {
        cy.get("[data-cy=paper-button]").click();
        cy.get("[data-cy=winner-display]").should("contain.text", "Computer Wins!");
      })
    
      it("is expected to retern a correct winner", () => {
        cy.get("[data-cy=scissors-button]").click();
        cy.get("[data-cy=winner-display]").should("contain.text", "Tie");
      })
    })
    
  });
});
