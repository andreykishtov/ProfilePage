import React, { Component } from 'react';
import styled from 'styled-components';
import Main from './Main';
const Wrapper = styled.div`${'' /* background: url('../images/intro-bg0.jpg') */};`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Main />
      </Wrapper>
    );
  }
}

export default App;
