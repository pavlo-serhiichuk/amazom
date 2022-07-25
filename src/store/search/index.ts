import {ISearchState, ISetSearchActionType, SearchActionType, SearchEnum} from './types'
import {IProduct} from '../../models/IProduct'


const initialState: ISearchState = {
  searchProducts: [] as IProduct[],
}

export default function searchReducer(state = initialState, action: SearchActionType) {
  switch (action.type) {
    case SearchEnum.SET_SEARCH:
      debugger
      return {...state, searchProducts: action.payload}
    default:
      return {...state}
  }
}

export const SearchActionCreators = {
  setSearch: (searchProducts: IProduct[]): ISetSearchActionType => ({type: SearchEnum.SET_SEARCH, payload: searchProducts}),
}
