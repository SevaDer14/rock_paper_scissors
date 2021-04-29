describe("displyed hand", () => {
  it("is expected to have black color if it is tie", () => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "random").callsFake(() => {
          return 0;
        });
      },
    });

    cy.get("[data-cy=rock-button]").click();
    cy.get("[data-cy=player-hand-display]").should(
      "have.css",
      "color",
      "rgb(0, 0, 0)"
    );
    cy.get("[data-cy=computer-hand-display]").should(
      "have.css",
      "color",
      "rgb(0, 0, 0)"
    );
  });

  it("is expected to have red color if it is the loosing hand", () => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "random").callsFake(() => {
          return 0;
        });
      },
    });

    cy.get("[data-cy=scissors-button]").click();
    cy.get("[data-cy=player-hand-display]").should(
      "have.css",
      "color",
      "rgb(255, 0, 0)"
    );
    cy.get("[data-cy=computer-hand-display]").should(
      "have.css",
      "color",
      "rgb(0, 128, 0)"
    );
  });

  it("is expected to have green color if it is the winning hand", () => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "random").callsFake(() => {
          return 0;
        });
      },
    });

    cy.get("[data-cy=paper-button]").click();
    cy.get("[data-cy=player-hand-display]").should(
      "have.css",
      "color",
      "rgb(0, 128, 0)"
    );
    cy.get("[data-cy=computer-hand-display]").should(
      "have.css",
      "color",
      "rgb(255, 0, 0)"
    );
  });
});
