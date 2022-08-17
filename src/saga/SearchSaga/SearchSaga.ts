import {put, takeEvery} from 'redux-saga/effects'
import {SearchEnum} from '../../store/search/types'
import {SearchActionCreators} from '../../store/search'

export function* searchWorker () {
  yield put(SearchActionCreators.setSearchLoading(true))
  // const response = yield
}

// export function* searchWatcher() {
//   yield takeEvery(SearchEnum.FETCH_SEARCH, searchWorker())
// }