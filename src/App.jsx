const gameLogic = require('../src/GameLogic.jsx')


function App() {
  let result = gameLogic.determineWinner({playerOneThrow: 0, playerTwoThrow: 1})
  debugger
  return (
    <div>
      {result}
    </div>
  );
}

export default App;
