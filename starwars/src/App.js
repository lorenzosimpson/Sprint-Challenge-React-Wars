import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 5rem;
`

const App = () => {

  return (
    <div className="App">
      <StyledHeader className="Header">React Wars</StyledHeader>
      <CardContainer />
    </div>
  );
}

export default App;
