const _ = require("underscore");

const handToNumber = (hand) => {
  return ['Rock', 'Paper', 'Scissors'].indexOf(hand);
}

const randomHand = () => {
  const possibleHands = ["Rock", "Paper", "Scissors"];
  return possibleHands[_.random(0, 2)];
};

const determineWinner = (hands) => {  
  let difference = handToNumber(hands.playerOne) - handToNumber(hands.playerTwo);
  
  if (difference === 0) {
    return 'Tie';
  } else if (difference === 1 || difference === -2) {
    return 'Player Wins!';
  }
  return 'Computer Wins!';
};

exports.determineWinner = determineWinner
exports.randomHand = randomHand