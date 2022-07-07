import {
  ProductActionType,
  ProductEnum,
  ProductState,
  SetErrorAction,
  SetLoadingAction,
  SetProductsAction
} from './types'
import {IProduct} from '../../models/IProduct'



const initialState: ProductState = {
  products: [] as IProduct[],
  isLoading: false,
  error: null
}

const authReducer = (state = initialState, action: ProductActionType) => {
  switch (action.type) {
    case ProductEnum.SET_PRODUCTS:
      return {...state, products: action.payload}
    case ProductEnum.SET_LOADING:
      return {...state, isLoading: action.payload}
    case ProductEnum.SET_ERROR:
      return {...state, error: action.payload}
    default:
      return {...state}
  }
}

export const AuthActionCreators = {
  setProducts: (products: IProduct[]): SetProductsAction => ({type: ProductEnum.SET_PRODUCTS, payload: products}),
  setLoading: (isLoading: boolean): SetLoadingAction => ({type: ProductEnum.SET_LOADING, payload: isLoading}),
  setError: (error: string): SetErrorAction => ({type: ProductEnum.SET_ERROR, payload: error}),
}


export default authReducer