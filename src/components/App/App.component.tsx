import React from 'react';
import Header from '../Header/Header.component'
import {Wrapper} from './App.style'
import AppRouter from '../AppRouter/AppRouter'
function App() {
  return (
    <Wrapper>
      <Header />
      <AppRouter />
    </Wrapper>
  );
}

export default App;
