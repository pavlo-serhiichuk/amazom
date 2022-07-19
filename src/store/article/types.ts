import {IArticle} from '../../models/IArticle'

export interface ArticleState {
  articles: IArticle[]
  isLoading: boolean
  error: string | null
}

export enum ArticleEnum {
  SET_ARTICLES = 'SET_ARTICLES',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR'
}

export interface SetArticlesAction {
  type: ArticleEnum.SET_ARTICLES
  payload: IArticle[]
}

export interface SetLoadingAction {
  type: ArticleEnum.SET_LOADING
  payload: boolean
}

export interface SetErrorAction {
  type: ArticleEnum.SET_ERROR
  payload: string
}

export type ArticleAction = SetArticlesAction | SetLoadingAction | SetErrorAction