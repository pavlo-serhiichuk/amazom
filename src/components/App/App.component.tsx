import React, {useEffect} from 'react';
import Header from '../Header/Header.component'
import AppRouter from '../AppRouter/AppRouter'
import Confetti from 'react-confetti'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'

function App() {
  const {isAuth} = useTypedSelector(state => state.auth)
  const {loadCart, loadWishes} = useActions()
  useEffect(() => {
    loadCart()
    loadWishes()
  }, [])

  return (
    <>
      {
        isAuth
        && <Confetti
              initialVelocityX={1}
              numberOfPieces={500}
              recycle={false}
              wind={-0.005}
          />
      }
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
