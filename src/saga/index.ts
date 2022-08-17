import {all} from 'redux-saga/effects'
import {watchOnSearchProducts} from './SearchSaga/SearchSaga'
import {watchOnLoadArticles} from './ArticlesSaga/ArticlesSaga'

export function* rootWatcher() {
  yield all([
    watchOnSearchProducts(),
    watchOnLoadArticles()
  ])
}