import {
  ProductActionType,
  ProductEnum,
  ProductState, SetCategoryAction,
  SetErrorAction,
  SetLoadingAction,
  SetProductsAction
} from './types'
import {IProduct} from '../../models/IProduct'
import {AppDispatch} from '../index'
import {productsAPI} from '../../api/api'



const initialState: ProductState = {
  products: [] as IProduct[],
  category: 'books',
  isLoading: false,
  error: null
}

const productReducer = (state = initialState, action: ProductActionType) => {
  switch (action.type) {
    case ProductEnum.SET_PRODUCTS:
      return {...state, products: action.payload}
    case ProductEnum.SET_CATEGORY:
      return {...state, category: action.payload}
    case ProductEnum.SET_LOADING:
      return {...state, isLoading: action.payload}
    case ProductEnum.SET_ERROR:
      return {...state, error: action.payload}
    default:
      return {...state}
  }
}

export const ProductActionCreators = {
  setProducts: (products: IProduct[]): SetProductsAction => ({type: ProductEnum.SET_PRODUCTS, payload: products}),
  setCategory: (category: string): SetCategoryAction => ({type: ProductEnum.SET_CATEGORY, payload: category}),
  setLoading: (isLoading: boolean): SetLoadingAction => ({type: ProductEnum.SET_LOADING, payload: isLoading}),
  setError: (error: string): SetErrorAction => ({type: ProductEnum.SET_ERROR, payload: error}),
  loadProducts: (category: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(ProductActionCreators.setLoading(true))
      let response = await productsAPI.getProducts(category)
      dispatch(ProductActionCreators.setProducts(response.data))
      console.log(response.data)
    } catch (e: any) {
      dispatch(ProductActionCreators.setError(e.message))
    } finally {
      dispatch(ProductActionCreators.setLoading(false))
    }
  }
}


export default productReducer