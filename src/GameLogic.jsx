
const determineWinner = (bothPlayerThrows) => {
  if (bothPlayerThrows.playerOneThrow === bothPlayerThrows.playerTwoThrow) {
    return {playerOneWin: false, playerTwoWin: false}
  }
  return {playerOneWin: false, playerTwoWin: true}
}

module.exports = { determineWinner }
