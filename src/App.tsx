import React, {useEffect} from 'react';
import Header from './components/Header/Header.component'
import AppRouter from './components/AppRouter/AppRouter'
import Confetti from 'react-confetti'
import {useTypedSelector} from './hooks/useTypedSelector'
import {useActions} from './hooks/useActions'
import {getLocalStorageIds} from './api/api'

function App() {
  const {isAuth} = useTypedSelector(state => state.auth)
  const {wishesIds} = useTypedSelector(state => state.wishes)
  const {cartIds} = useTypedSelector(state => state.cart)
  const {
    loadCart,
    loadWishes,
    setWishesIds,
    setCartIds
  } = useActions()

  const localWishesIds = getLocalStorageIds('wishes_ids')
  const localCartIds = getLocalStorageIds('cart_ids')

  useEffect(() => {

    if (localWishesIds) {
      setWishesIds(localWishesIds)
    }

    if (localCartIds) {
      setCartIds(localCartIds)
    }
  }, [])

  useEffect(() => {
    loadWishes()
  }, [wishesIds])

  useEffect(() => {
    loadCart()
  }, [cartIds])

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
