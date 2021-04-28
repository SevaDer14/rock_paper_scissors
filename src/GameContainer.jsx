import React, { useState } from "react";
import { Segment, Header, Button, Grid} from "semantic-ui-react";
import gameLogic from "../src/GameLogic.jsx";


const GameContainer = () => {
  const [playerHand, setPlayerHand] = useState("Your hand of choice");
  const [computerHand, setComputerHand] = useState("PC hand will be here");
  const [resultMessage, setResult] = useState("Someone");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  

  const startGame = (playerHand) => {
    setPlayerHand(playerHand);
    const computerHand = gameLogic.randomHand();
    setComputerHand(computerHand);
    setResult(
      gameLogic.determineWinner(playerHand, computerHand)        
    );
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
            data-cy='winner-display'
            basic
            style={{ fontSize: "28px" }}
          >{`${resultMessage}`}</Segment>
        </Grid.Column>
      </Grid>
      <Segment>
        <Grid columns="2">
          <Grid.Column>
            <Header>Player: {playerScore}</Header>
            <Segment data-cy="player1-hand-display">{playerHand}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Header>Computer: {computerScore}</Header>
            <Segment data-cy="player2-hand-display">{computerHand}</Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

export default GameContainer;
