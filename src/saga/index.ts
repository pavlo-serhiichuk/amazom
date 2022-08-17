import {watchOnSearchProducts} from './SearchSaga/SearchSaga'
import {all} from 'redux-saga/effects'

export function* rootWatcher() {
  yield all([
    watchOnSearchProducts()
  ])
}