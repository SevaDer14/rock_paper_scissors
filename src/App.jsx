import React, { Component } from "react";
import { Container, Segment, Header } from "semantic-ui-react";
import GameContainer from "./GameContainer";
//import background from '../public/img/RPS_background.jpg'

class App extends Component {
  render() {
    return (
      
      <div class="box">
        <Container text textAlign="center">
          <Segment inverted style={{marginTop: '150px'}}>
            <Header data-cy="app-header">Rock Paper Scissors</Header>
          </Segment>
          <GameContainer />
        </Container>
      </div>
    );
  }
}

export default App;
