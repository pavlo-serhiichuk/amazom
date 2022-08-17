import {put, takeEvery, call} from 'redux-saga/effects'
import {IFetchSearchActionType, SearchEnum} from '../../store/search/types'
import {SearchActionCreators} from '../../store/search'
import {searchAPI} from '../../api/api'

async function fetchSearchProducts(
  query: string) {
  return await searchAPI.getSearchedProducts(query)
}

function* onSearchProducts(
  {query}: IFetchSearchActionType) {
  try {
    yield put(SearchActionCreators.setSearchLoading(true))
    const {data} = yield call(fetchSearchProducts, query)
    yield put(SearchActionCreators.setSearch(data))
  } catch (e: any) {
    put(SearchActionCreators.setSearchError(e.message))
  }
}

export function* watchOnSearchProducts() {
  yield takeEvery(
    SearchEnum.FETCH_SEARCH,
    onSearchProducts
  )
}