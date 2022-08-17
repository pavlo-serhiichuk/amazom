import {all} from 'redux-saga/effects'
import {watchOnSearchProducts} from './searchSaga'
import {watchOnLoadArticles} from './articlesSaga'

export function* rootWatcher() {
  yield all([
    watchOnSearchProducts(),
    watchOnLoadArticles()
  ])
}