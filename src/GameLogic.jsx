const handToNumber = (hand) => {
  return ['Rock', 'Paper', 'Scissors'].indexOf(hand);
}

const determineWinner = (hands) => {  
  let difference = handToNumber(hands.playerOne) - handToNumber(hands.playerTwo);
  
  if (difference === 0) {
    return 'No one';
  } else if (difference === 1 || difference === -2) {
    return 'Player';
  }
  return 'Computer';
};

module.exports = { determineWinner };

