import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import auth from './auth'
import product from './product'

const rootReducer = combineReducers({
  auth,
  product
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
