const handToNumber = (hand) => {
  return ["Rock", "Paper", "Scissors"].indexOf(hand);
};

const randomHand = () => {
  const possibleHands = ["Rock", "Paper", "Scissors"];
  return possibleHands[Math.floor(Math.random() * 3)];
};

const determineWinner = (playerHand, computerHand) => {
  let difference = handToNumber(playerHand) - handToNumber(computerHand);

  if (difference === 0) {
    return { tie: true, player: false, computer: false };
  } else if (difference === 1 || difference === -2) {
    return { tie: false, player: true, computer: false };
  }
  return { tie: false, player: false, computer: true };
};

exports.determineWinner = determineWinner;
exports.randomHand = randomHand;
