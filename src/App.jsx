
import React, { Component } from 'react'
import { Container, Segment, Header, Button, Grid } from 'semantic-ui-react'

const gameLogic = require('../src/GameLogic.jsx')

class App extends Component {
  render () {
    return (
      <Container text textAlign='center'>
        <Segment inverted>
          <Header data-cy='app-header'>Rock Paper Scissors</Header>
        </Segment>
        <Segment>
          <Header data-cy='player-choice-header'>Pick Your Hand</Header>
          <Button data-cy='rock-button'>Rock</Button>
          <Button data-cy='paper-button'>Paper</Button>
          <Button data-cy='scissors-button'>Scissors</Button>
        </Segment>
        <Segment>
          <Grid columns='2'>
            <Grid.Column>
              <Segment data-cy='player1-hand-display'></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment data-cy='player2-hand-display'></Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

export default App;
