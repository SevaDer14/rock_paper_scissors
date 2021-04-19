const determineWinner = (hands) => {
  // hands = {playerOne: number, playerTwo: number}

  /* Function to determine who wins in the game of Rock Paper Scissors
  using arithmetics. Rock, Paper and Scissors are coded as numbers: 
      Rock = 0
      Paper = 1
      Scissors = 2
  Player wins if his/her hand differs from other's by +1, with the 
  exception of Rock vs Scissors combination where is it -2.
  Difference of 0 between both player hands means tie. */

  let difference = hands.playerOne - hands.playerTwo;

  if (difference === 0) {
    return { playerOneWin: false, playerTwoWin: false };
    
  } else if (difference === 1 || difference === -2) {
    return { playerOneWin: true, playerTwoWin: false };
  }
  return { playerOneWin: false, playerTwoWin: true };
};

module.exports = { determineWinner };
