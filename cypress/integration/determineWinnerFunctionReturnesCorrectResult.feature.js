const gameLogic = require('../../src/GameLogic.jsx')
const rock = 0, paper = 1, scissors = 2
let result = {}

describe('determineWinner function always returnes correct winner', () => {

  it('is expected that nobody wins if Player-1 throws "rock" and Player-2 throws "rock"', () => {
    result = gameLogic.determineWinner({playerOneThrow: rock, playerTwoThrow: rock})
    expect(result.playerOneWin).to.eq(false)
    expect(result.playerTwoWin).to.eq(false)
  });

  it('is expected that Player-2 wins if Player-1 throws "rock" and Player-2 throws "paper"', () => {
    result = gameLogic.determineWinner({playerOneThrow: rock, playerTwoThrow: paper})
    expect(result.playerOneWin).to.eq(false)
    expect(result.playerTwoWin).to.eq(true)
  });

  it('is expected that Player-1 wins if Player-1 throws "rock" and Player-2 throws "scissors"', () => {
    result = gameLogic.determineWinner({playerOneThrow: rock, playerTwoThrow: scissors})
    expect(result.playerOneWin).to.eq(true)
    expect(result.playerTwoWin).to.eq(false)
  });

  it('is expected that Player-1 wins if Player-1 throws "paper" and Player-2 throws "rock"', () => {
    result = gameLogic.determineWinner({playerOneThrow: paper, playerTwoThrow: rock})
    expect(result.playerOneWin).to.eq(true)
    expect(result.playerTwoWin).to.eq(false)
  });

  it('is expected that nobody wins if Player-1 throws "paper" and Player-2 throws "paper"', () => {
    result = gameLogic.determineWinner({playerOneThrow: paper, playerTwoThrow: paper})
    expect(result.playerOneWin).to.eq(false)
    expect(result.playerTwoWin).to.eq(false)
  });

  it('is expected that Player-2 wins if Player-1 throws "paper" and Player-2 throws "scissors"', () => {
    result = gameLogic.determineWinner({playerOneThrow: paper, playerTwoThrow: scissors})
    expect(result.playerOneWin).to.eq(false)
    expect(result.playerTwoWin).to.eq(true)
  });

  it('is expected that Player-2 wins if Player-1 throws "scissors" and Player-2 throws "rock"', () => {
    result = gameLogic.determineWinner({playerOneThrow: scissors, playerTwoThrow: rock})
    expect(result.playerOneWin).to.eq(false)
    expect(result.playerTwoWin).to.eq(true)
  });

  it('is expected that Player-1 wins if Player-1 throws "scissors" and Player-2 throws "paper"', () => {
    result = gameLogic.determineWinner({playerOneThrow: scissors, playerTwoThrow: paper})
    expect(result.playerOneWin).to.eq(true)
    expect(result.playerTwoWin).to.eq(false)
  });

  it('is expected that nobody wins if Player-1 throws "scissors" and Player-2 throws "scissors"', () => {
    result = gameLogic.determineWinner({playerOneThrow: scissors, playerTwoThrow: scissors})
    expect(result.playerOneWin).to.eq(false)
    expect(result.playerTwoWin).to.eq(false)
  });

})
