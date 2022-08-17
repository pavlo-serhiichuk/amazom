import {call, put, takeEvery} from 'redux-saga/effects'
import {ArticleActionCreators} from '../../store/article'
import {articlesAPI} from '../../api/api'
import {ArticleEnum} from '../../store/article/types'

async function loadArticlesFromAPI () {
  return await articlesAPI.getArticles()
}

function* onLoadArticles () {
  try {
    yield put(ArticleActionCreators.setLoading(true))
    const {data} = yield call(loadArticlesFromAPI)
    yield put(ArticleActionCreators.setArticles(data))
    yield put(ArticleActionCreators.setLoading(false))
  } catch (e: any) {
    yield put(ArticleActionCreators.setError(e.message))
  }
}

export function* watchOnLoadArticles () {
  yield takeEvery(ArticleEnum.FETCH_ARTICLES, onLoadArticles)
}