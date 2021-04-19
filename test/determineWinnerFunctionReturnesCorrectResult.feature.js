const expect = require('chai').expect;
const gameLogic = require("../src/GameLogic.jsx");
const rock = 0,
  paper = 1,
  scissors = 2;
let result = {};

describe("determineWinner function always returnes correct winner", () => {
  it('is expected that nobody wins if Player-1 throws "rock" and Player-2 throws "rock"', () => {
    result = gameLogic.determineWinner({ 
      playerOne: rock, 
      playerTwo: rock 
    });
    expect(result.playerOneWin).to.eq(false);
    expect(result.playerTwoWin).to.eq(false);
  });

  it('is expected that Player-2 wins if Player-1 throws "rock" and Player-2 throws "paper"', () => {
    result = gameLogic.determineWinner({ 
      playerOne: rock, 
      playerTwo: paper 
    });
    expect(result.playerOneWin).to.eq(false);
    expect(result.playerTwoWin).to.eq(true);
  });

  it('is expected that Player-1 wins if Player-1 throws "rock" and Player-2 throws "scissors"', () => {
    result = gameLogic.determineWinner({
      playerOne: rock,
      playerTwo: scissors,
    });
    expect(result.playerOneWin).to.eq(true);
    expect(result.playerTwoWin).to.eq(false);
  });

  it('is expected that Player-1 wins if Player-1 throws "paper" and Player-2 throws "rock"', () => {
    result = gameLogic.determineWinner({ 
      playerOne: paper, 
      playerTwo: rock 
    });
    expect(result.playerOneWin).to.eq(true);
    expect(result.playerTwoWin).to.eq(false);
  });

  it('is expected that nobody wins if Player-1 throws "paper" and Player-2 throws "paper"', () => {
    result = gameLogic.determineWinner({ 
      playerOne: paper, 
      playerTwo: paper 
    });
    expect(result.playerOneWin).to.eq(false);
    expect(result.playerTwoWin).to.eq(false);
  });

  it('is expected that Player-2 wins if Player-1 throws "paper" and Player-2 throws "scissors"', () => {
    result = gameLogic.determineWinner({
      playerOne: paper,
      playerTwo: scissors,
    });
    expect(result.playerOneWin).to.eq(false);
    expect(result.playerTwoWin).to.eq(true);
  });

  it('is expected that Player-2 wins if Player-1 throws "scissors" and Player-2 throws "rock"', () => {
    result = gameLogic.determineWinner({
      playerOne: scissors,
      playerTwo: rock,
    });
    expect(result.playerOneWin).to.eq(false);
    expect(result.playerTwoWin).to.eq(true);
  });

  it('is expected that Player-1 wins if Player-1 throws "scissors" and Player-2 throws "paper"', () => {
    result = gameLogic.determineWinner({
      playerOne: scissors,
      playerTwo: paper,
    });
    expect(result.playerOneWin).to.eq(true);
    expect(result.playerTwoWin).to.eq(false);
  });

  it('is expected that nobody wins if Player-1 throws "scissors" and Player-2 throws "scissors"', () => {
    result = gameLogic.determineWinner({
      playerOne: scissors,
      playerTwo: scissors,
    });
    expect(result.playerOneWin).to.eq(false);
    expect(result.playerTwoWin).to.eq(false);
  });
});
