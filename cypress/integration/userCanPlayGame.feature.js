const gameLogic = require("../../src/GameLogic.jsx");

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
    
    before(() => {
      cy.get("[data-cy=rock-button]").click();
    });

    it("is expected to retern a correct winner", () => {
      cy.get("[data-cy=player1-hand-display]").then(($value) => {
        const computerHand = $value.text();
        const expectedResult = gameLogic.determineWinner("Rock", computerHand);
        cy.get("[data-cy=winner]").should("contain.text", `${expectedResult} Wins!`);
      });
    });

    
  });
});
