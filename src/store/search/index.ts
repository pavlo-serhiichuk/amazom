import {
  IFetchSearchActionType,
  ISearchState,
  ISetErrorActionType,
  ISetLoadingActionType,
  ISetSearchActionType,
  SearchActionType,
  SearchEnum
} from './types'
import {IProduct} from '../../models/IProduct'


const initialState: ISearchState = {
  searchProducts: [] as IProduct[],
  isLoading: false,
  error: ''
}

export default function searchReducer(
  state = initialState,
  action: SearchActionType
) {
  switch (action.type) {
    case SearchEnum.SET_SEARCH:
      return {...state, searchProducts: action.payload}
    default:
      return {...state}
  }
}

export const SearchActionCreators = {
  setSearch: (searchProducts: IProduct[]): ISetSearchActionType => ({
    type: SearchEnum.SET_SEARCH,
    payload: searchProducts
  }),
  fetchSearch: (): IFetchSearchActionType => ({
    type: SearchEnum.FETCH_SEARCH
  }),
  setSearchLoading: (payload: boolean): ISetLoadingActionType => ({
    type: SearchEnum.SET_SEARCH_LOADING,
    payload
  }),
  setSearchError: (payload: string): ISetErrorActionType => ({
    type: SearchEnum.SET_ERROR,
    payload
  })
}
