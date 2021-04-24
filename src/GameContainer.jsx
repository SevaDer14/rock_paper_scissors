import React, { useState } from "react";
import { Segment, Header, Button, Grid, Divider } from "semantic-ui-react";
import gameLogic from "../src/GameLogic.jsx";
import _ from "underscore";

const GameContainer = () => {
  const [playerOneHand, setplayerOneHand] = useState("Your hand of choice");
  const [playerTwoHand, setplayerTwoHand] = useState("PC hand will be here");
  const [winner, setWinner] = useState("Someone");

  const randomHand = () => {
    const possibleHands = ["Rock", "Paper", "Scissors"];
    return possibleHands[_.random(0, 2)];
  };

  const gameOn = (playerOneHand) => {
    setplayerOneHand(playerOneHand);
    const computerHand = randomHand();
    setplayerTwoHand(computerHand);
    setWinner(
      gameLogic.determineWinner({
        playerOne: playerOneHand,
        playerTwo: computerHand,
      })
    );
  };

  return (
    <>
      <Grid columns="2">
        <Grid.Column>
          <Segment>
            <Header data-cy="player-choice-header">Pick Your Hand</Header>
            <Button data-cy="rock-button" onClick={() => gameOn("Rock")}>
              Rock
            </Button>
            <Button data-cy="paper-button" onClick={() => gameOn("Paper")}>
              Paper
            </Button>
            <Button
              data-cy="scissors-button"
              onClick={() => gameOn("Scissors")}
            >
              Scissors
            </Button>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment
            basic
            style={{ fontSize: "28px" }}
          >{`${winner} Wins!`}</Segment>
        </Grid.Column>
      </Grid>
      <Segment>
        <Grid columns="2">
          <Grid.Column>
            <Header>Player:</Header>
            <Segment data-cy="player1-hand-display">{playerOneHand}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Header>Computer:</Header>
            <Segment data-cy="player2-hand-display">{playerTwoHand}</Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

export default GameContainer;
