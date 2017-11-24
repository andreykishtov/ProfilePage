import React, { Component } from 'react';
import styled from 'styled-components';
import Main from './Main';
import About from './About/About';
import data from '../Data/main.json';

const Wrapper = styled.div``;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Main mainData={data.main} />
        <About data={data} />
      </Wrapper>
    );
  }
}

export default App;
