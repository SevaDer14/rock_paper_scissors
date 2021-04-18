// -- This file contains all functions of game's logic --

const determineWinner = (hands) => {
  /* 
  Function to determine who wins in the game of Rock Paper Scissors
  using arithmetics. Rock, Paper and Scissors are coded as numbers: 
      Rock = 0
      Paper = 1
      Scissors = 2
  Player wins if his/her hand differs from other's by +1, with the 
  exception of Rock vs Scissors combination where is it -2.
  Difference of 0 between both player hands means tie.     
*/

  // throws = {playerOne: number, playerTwo: number}
  let difference = hands.playerTwo - hands.playerOne;
  if (difference === 0) {
    // both throw the same thing
    return { playerOneWin: false, playerTwoWin: false };
  } else if (difference === 1 || difference === -2) {
    // playerTwo throws stronger hand
    return { playerOneWin: false, playerTwoWin: true };
  }
  // else playerOne wins
  return { playerOneWin: true, playerTwoWin: false };
};

module.exports = { determineWinner };
