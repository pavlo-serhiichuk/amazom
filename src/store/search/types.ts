import {IProduct} from '../../models/IProduct'

export enum SearchEnum {
  SET_SEARCH = 'SET_SEARCH',
}

export interface ISearchState {
  searchProducts: IProduct[]
}

export interface ISetSearchActionType {
  type: SearchEnum.SET_SEARCH
  payload: IProduct[]
}

export type SearchActionType = ISetSearchActionType