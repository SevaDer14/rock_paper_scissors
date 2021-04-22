import React, { useState } from 'react'
import { Segment, Header, Button, Grid } from 'semantic-ui-react'

const GameContainer = () => {
  
  const [playerOneHand, setHand] = useState('Your hand of choice')

  const setPlayerOneHand = (playerOneHand) => {
    setHand(playerOneHand)
  }  
  
  return (
    <>
        <Segment>
          <Header data-cy='player-choice-header'>Pick Your Hand</Header>
          <Button data-cy='rock-button' onClick={() => setPlayerOneHand('Rock')}>Rock</Button>
          <Button data-cy='paper-button' onClick={() => setPlayerOneHand('Paper')}>Paper</Button>
          <Button data-cy='scissors-button' onClick={() => setPlayerOneHand('Scissors')}>Scissors</Button>
        </Segment>

        <Segment>
          <Grid columns='2'>
            <Grid.Column>
              <Segment data-cy='player1-hand-display'>{playerOneHand}</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment data-cy='player2-hand-display'></Segment>
            </Grid.Column>
          </Grid>
        </Segment>
    </>
  )
}

export default GameContainer
