import React, { Component } from 'react';
import styled from 'styled-components';
import Main from './Main';
import About from './About/About';
import data from '../Data/main.json';
import MyWork from './MyWork';

const Wrapper = styled.div``;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Main mainData={data.main} />
        <About data={data} />
        <MyWork />
      </Wrapper>
    );
  }
}

export default App;
