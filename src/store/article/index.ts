import {IArticle} from '../../models/IArticle'
import {
  ArticleAction,
  ArticleEnum,
  ArticleState,
  FetchArticlesAction,
  SetArticlesAction,
  SetErrorAction,
  SetLoadingAction
} from './types'

const initialState: ArticleState = {
  articles: [] as IArticle[],
  isLoading: false,
  error: null
}

export default function articleReducer(
  state = initialState,
  action: ArticleAction
) {
  switch (action.type) {
    case ArticleEnum.SET_ARTICLES:
      return {...state, articles: action.payload}
    case ArticleEnum.SET_LOADING:
      return {...state, isLoading: action.payload}
    case ArticleEnum.SET_ERROR:
      return {...state, error: action.payload}
    default:
      return {...state}
  }
}

export const ArticleActionCreators = {
  setArticles:
    (articles: IArticle[]): SetArticlesAction => ({
        type: ArticleEnum.SET_ARTICLES,
        payload: articles
      }),
  setLoading:
    (isLoading: boolean): SetLoadingAction => ({
        type: ArticleEnum.SET_LOADING,
        payload: isLoading
      }),
  setError:
    (error: string): SetErrorAction => ({
        type: ArticleEnum.SET_ERROR,
        payload: error
      }),
  fetchArticles: (): FetchArticlesAction => ({
    type: ArticleEnum.FETCH_ARTICLES
  })
}