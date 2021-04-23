import React, { useState } from "react";
import { Segment, Header, Button, Grid } from "semantic-ui-react";
import gameLogic from "../src/GameLogic.jsx";

const GameContainer = () => {
  const [playerOneHand, setplayerOneHand] = useState("Your hand of choice");
  const [playerTwoHand, setplayerTwoHand] = useState("PC hand will be here");
  const [winner, setWinner] = useState("Someone");

  const randomHand = () => {
    const possibleHands = ["Rock", "Paper", "Scissors"];
    return possibleHands[Math.floor(Math.random() * 3)]
  }

  const gameOn = (playerOneHand) => {    
    const computerHand = randomHand
    setplayerOneHand(playerOneHand);
    setplayerTwoHand(computerHand);
    setWinner(gameLogic.determineWinner(playerOneHand, computerHand))
  };

  return (
    <>
      <Segment>
        <Header data-cy="player-choice-header">Pick Your Hand</Header>
        <Button data-cy="rock-button" onClick={() => gameOn("Rock")}>
          Rock
        </Button>
        <Button
          data-cy="paper-button"
          onClick={() => gameOn("Paper")}
        >
          Paper
        </Button>
        <Button
          data-cy="scissors-button"
          onClick={() => gameOn("Scissors")}
        >
          Scissors
        </Button>
      </Segment>

      <Segment>
        <Grid columns="2">
          <Grid.Column>
            <Segment data-cy="player1-hand-display">{playerOneHand}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment data-cy="player2-hand-display">{playerTwoHand}</Segment>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment>
        {`${winner} Wins!`}
      </Segment>
    </>
  );
};

export default GameContainer;
