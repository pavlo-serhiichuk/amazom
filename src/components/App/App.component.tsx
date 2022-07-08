import React from 'react';
import HeaderComponent from '../Header/Header.component'
import {Wrapper} from './App.style'
import AppRouter from '../AppRouter/AppRouter'

function App() {
  return (
    <Wrapper>
      <HeaderComponent />
      <AppRouter />
    </Wrapper>
  );
}

export default App;
