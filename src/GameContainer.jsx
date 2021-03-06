import React, { useState } from "react";
import { Segment, Header, Button, Grid } from "semantic-ui-react";
import gameLogic from "../src/GameLogic.jsx";

const GameContainer = () => {
  const [playerHand, setPlayerHand] = useState("Your hand");
  const [computerHand, setComputerHand] = useState("PC hand");
  const [resultMessage, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerHandColor, setPlayerHandColor] = useState("black");
  const [computerHandColor, setComputerHandColor] = useState("black");

  const handleOutcome = (gameOutcome) => {
    if (gameOutcome.tie) {
      setResult("Tie");
      setPlayerHandColor("black");
      setComputerHandColor("black");
    } else if (gameOutcome.player) {
      setResult("Player Wins!");
      setPlayerScore(playerScore + 1);
      setPlayerHandColor("green");
      setComputerHandColor("red");
    } else if (gameOutcome.computer) {
      setResult("Computer Wins!");
      setComputerScore(computerScore + 1);
      setComputerHandColor("green");
      setPlayerHandColor("red");
    }
  };

  const startGame = (playerHand) => {
    setPlayerHand(playerHand);
    const computerHand = gameLogic.randomHand();
    setComputerHand(computerHand);
    handleOutcome(gameLogic.determineWinner(playerHand, computerHand));
  };

  return (
    <>
      <Grid columns="2">
        <Grid.Column>
          <Segment>
            <Header data-cy="player-choice-header">Pick Your Hand</Header>
            <Button data-cy="rock-button" onClick={() => startGame("Rock")}>
              Rock
            </Button>
            <Button data-cy="paper-button" onClick={() => startGame("Paper")}>
              Paper
            </Button>
            <Button
              data-cy="scissors-button"
              onClick={() => startGame("Scissors")}
            >
              Scissors
            </Button>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment
            data-cy="winner-display"
            basic
            style={{ fontSize: "28px" }}
          >{`${resultMessage}`}</Segment>
        </Grid.Column>
      </Grid>
      <Segment>
        <Grid columns="2">
          <Grid.Column>
            <Header data-cy="player-score">Player: {playerScore}</Header>
            <Segment
              data-cy="player-hand-display"
              style={{ fontSize: "28px", color: playerHandColor }}
            >
              {playerHand}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Header data-cy="computer-score">Computer: {computerScore}</Header>
            <Segment
              data-cy="computer-hand-display"
              style={{ fontSize: "28px", color: computerHandColor }}
            >
              {computerHand}
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

export default GameContainer;
