const _ = require("underscore");

const handToNumber = (hand) => {
  return ['Rock', 'Paper', 'Scissors'].indexOf(hand);
}

const randomHand = () => {
  const possibleHands = ["Rock", "Paper", "Scissors"];
  return possibleHands[Math.floor(Math.random()*2)];
};

const determineWinner = (playerHand, computerHand) => {  
  let difference = handToNumber(playerHand) - handToNumber(computerHand);
  
  if (difference === 0) {
    return 'Tie';
  } else if (difference === 1 || difference === -2) {
    return 'Player Wins!';
  }
  return 'Computer Wins!';
};

exports.determineWinner = determineWinner
exports.randomHand = randomHand