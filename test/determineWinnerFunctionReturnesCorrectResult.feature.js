const expect = require("chai").expect;
const gameLogic = require("../src/GameLogic.jsx");
const rock = 0,
  paper = 1,
  scissors = 2;

describe("determineWinner function always returnes correct winner", function() {
  it('is expected that nobody wins if Player-1 throws "rock" and Player-2 throws "rock"', function() {
    expect(
      gameLogic.determineWinner({
        playerOne: rock,
        playerTwo: rock,
      })
    ).to.eql({
      playerOneWin: false,
      playerTwoWin: false,
    });
  });

  it('is expected that Player-2 wins if Player-1 throws "rock" and Player-2 throws "paper"', function() {
    expect(
      gameLogic.determineWinner({
        playerOne: rock,
        playerTwo: paper,
      })
    ).to.eql({
      playerOneWin: false,
      playerTwoWin: true,
    });
  });

  it('is expected that Player-1 wins if Player-1 throws "rock" and Player-2 throws "scissors"', function() {
    expect(
      gameLogic.determineWinner({
        playerOne: rock,
        playerTwo: scissors,
      })
    ).to.eql({
      playerOneWin: true,
      playerTwoWin: false,
    });
  });

  it('is expected that Player-1 wins if Player-1 throws "paper" and Player-2 throws "rock"', function() {
    expect(
      gameLogic.determineWinner({
        playerOne: paper,
        playerTwo: rock,
      })
    ).to.eql({
      playerOneWin: true,
      playerTwoWin: false,
    });
  });

  it('is expected that nobody wins if Player-1 throws "paper" and Player-2 throws "paper"', function() {
    expect(
      gameLogic.determineWinner({
        playerOne: paper,
        playerTwo: paper,
      })
    ).to.eql({
      playerOneWin: false,
      playerTwoWin: false,
    });
  });

  it('is expected that Player-2 wins if Player-1 throws "paper" and Player-2 throws "scissors"', function() {
    expect(
      gameLogic.determineWinner({
        playerOne: paper,
        playerTwo: scissors,
      })
    ).to.eql({
      playerOneWin: false,
      playerTwoWin: true,
    });
  });

  it('is expected that Player-2 wins if Player-1 throws "scissors" and Player-2 throws "rock"', function() {
    expect(
      gameLogic.determineWinner({
        playerOne: scissors,
        playerTwo: rock,
      })
    ).to.eql({
      playerOneWin: false,
      playerTwoWin: true,
    });
  });

  it('is expected that Player-1 wins if Player-1 throws "scissors" and Player-2 throws "paper"', function() {
    expect(
      gameLogic.determineWinner({
        playerOne: scissors,
        playerTwo: paper,
      })
    ).to.eql({
      playerOneWin: true,
      playerTwoWin: false,
    });
  });

  it('is expected that nobody wins if Player-1 throws "scissors" and Player-2 throws "scissors"', function() {
    expect(
      gameLogic.determineWinner({
        playerOne: scissors,
        playerTwo: scissors,
      })
    ).to.eql({
      playerOneWin: false,
      playerTwoWin: false,
    });
  });
});
