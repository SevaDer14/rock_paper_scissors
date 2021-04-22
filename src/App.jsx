
import React, { Component, useState } from 'react'
import { Container, Segment, Header, Image, Grid } from 'semantic-ui-react'
import GameContainer from './GameContainer'
//import background from '../public/img/RPS_background.jpg'



class App extends Component {
  
  

  render () {
    return (
      <Container fluid>
        <Image src='/img/RPS_background.jpg' fluid centered/>
        <Container text textAlign='center'>

          <Segment inverted>
            <Header data-cy='app-header'>Rock Paper Scissors</Header>
          </Segment>

          <GameContainer/>

        </Container>
        
      </Container>
    )
  }
}

export default App;
