
import React, { Component, useState } from 'react'
import { Container, Segment, Header, Button, Grid } from 'semantic-ui-react'
import GameContainer from './GameContainer'
const gameLogic = require('../src/GameLogic.jsx')



class App extends Component {
  
  

  render () {
    return (
      <Container text textAlign='center'>

        <Segment inverted>
          <Header data-cy='app-header'>Rock Paper Scissors</Header>
        </Segment>

        <GameContainer/>
        
      </Container>
    )
  }
}

export default App;
