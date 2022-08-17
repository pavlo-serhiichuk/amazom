import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import article from './article';
import auth from './auth'
import cart from './cart';
import product from './product'
import wishes from './wishes';
import search from './search';
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from '../saga'

const saga = createSagaMiddleware()

const rootReducer =
  combineReducers({
    auth,
    product,
    article,
    cart,
    wishes,
    search
  })

saga.run(rootWatcher)

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    saga
  )
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
