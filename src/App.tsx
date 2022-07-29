import React, {useEffect} from 'react';
import Header from './components/Header/Header.component'
import AppRouter from './components/AppRouter/AppRouter'
import Confetti from 'react-confetti'
import {useTypedSelector} from './hooks/useTypedSelector'
import {useActions} from './hooks/useActions'

function App() {
  const {isAuth} = useTypedSelector(state => state.auth)
  const {loadCart, loadWishes, setWishesIds} = useActions()
  useEffect(() => {
    loadCart()
    loadWishes()

    const localids = localStorage.getItem('wishes_ids')

    if (localids) {
      setWishesIds(localids?.split(',').filter(el => el !== '').map(Number))
    }
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
