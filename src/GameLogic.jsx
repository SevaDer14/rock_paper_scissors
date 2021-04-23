const getHandNumbers = (hands) => {
  const handToNumberCorrespondance = { Rock: 0, Paper: 1, Scissors: 2 };
  const playerOneHandNumber = handToNumberCorrespondance[hands.playerOne.to_sym];
  const playerTwoHandNumber = handToNumberCorrespondance[hands.playerTwo.to_sym];
  return playerOneHandNumber, playerTwoHandNumber;
};

const determineWinner = (hands) => {
  // hands = {playerOne: 'string', playerTwo: 'string'}

  /* Function to determine who wins in the game of Rock Paper Scissors
  using arithmetics. Rock, Paper and Scissors are coded as numbers: 
      Rock = 0
      Paper = 1
      Scissors = 2
  Player wins if his/her hand differs from other's by +1, with the 
  exception of Rock vs Scissors combination where is it -2.
  Difference of 0 between both player hands means tie. */

  let playerOneHandNumber, playerTwoHandNumber = getHandNumbers(hands);

  let difference = playerOneHandNumber - playerTwoHandNumber;

  if (difference === 0) {
    return 'No one';
  } else if (difference === 1 || difference === -2) {
    return 'Player';
  }
  return 'Computer';
};

module.exports = { determineWinner };

/*if (difference === 0) {
    return { playerOneWin: false, playerTwoWin: false };
  } else if (difference === 1 || difference === -2) {
    return { playerOneWin: true, playerTwoWin: false };
  }
  return { playerOneWin: false, playerTwoWin: true };*/
