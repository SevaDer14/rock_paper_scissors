const getHandNumbers = (hands) => {
  //const handToNumberCorrespondance = ;
  const playerOneHandNumber = ['Rock', 'Paper', 'Scissors'].indexOf(hands.playerOne);
  const playerTwoHandNumber = ['Rock', 'Paper', 'Scissors'].indexOf(hands.playerTwo);  
  return [playerOneHandNumber, playerTwoHandNumber]
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

  let [playerOneHandNumber, playerTwoHandNumber] = getHandNumbers(hands);
  
  let difference = playerOneHandNumber - playerTwoHandNumber;
  
  if (difference === 0) {
    return 'No one';
  } else if (difference === 1 || difference === -2) {
    return 'Player';
  }
  return 'Computer';
};

module.exports = { determineWinner };

