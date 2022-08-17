import {IProduct} from '../../models/IProduct'

export enum SearchEnum {
  SET_SEARCH = 'SET_SEARCH',
  FETCH_SEARCH = 'FETCH_SEARCH',
  SET_SEARCH_LOADING = 'SET_SEARCH_LOADING',
  SET_ERROR = 'SET_ERROR'
}

export interface ISearchState {
  searchProducts: IProduct[],
  isLoading: boolean
  error: string
}

export interface ISetSearchActionType {
  type: SearchEnum.SET_SEARCH
  payload: IProduct[]
}

export interface IFetchSearchActionType {
  type: SearchEnum.FETCH_SEARCH
  query: string
}

export interface ISetLoadingActionType {
  type: SearchEnum.SET_SEARCH_LOADING
  payload: boolean
}

export interface ISetErrorActionType {
  type: SearchEnum.SET_ERROR
  payload: string
}

export type SearchActionType =
  ISetSearchActionType
  | IFetchSearchActionType
  | ISetLoadingActionType
  | ISetErrorActionType