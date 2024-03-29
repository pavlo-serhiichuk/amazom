import {
  ProductActionType,
  ProductEnum,
  ProductState,
  SetCategoryAction,
  SetCurrentProductAction,
  SetErrorAction,
  SetLoadingAction, setTotalCountAction,
  SetProductsAction
} from './types'
import {IProduct} from '../../models/IProduct'
import {AppDispatch} from '../index'
import {productsAPI} from '../../api/api'


const initialState: ProductState = {
  products: [] as IProduct[],
  currentProduct: {} as IProduct,
  category: '',
  isLoading: true,
  error: null,
  totalCount: 0,
}

export default function productReducer(
  state = initialState,
  action: ProductActionType) {
  switch (action.type) {
    case ProductEnum.SET_PRODUCTS:
      return {...state, products: action.payload}
    case ProductEnum.SET_CURRENT_PRODUCT:
      return {...state, currentProduct: action.payload}
    case ProductEnum.SET_CATEGORY:
      return {...state, category: action.payload}
    case ProductEnum.SET_LOADING:
      return {...state, isLoading: action.payload}
    case ProductEnum.SET_ERROR:
      return {...state, error: action.payload}
    case ProductEnum.SET_TOTAL_COUNT:
      console.log(action.payload)
      return {...state, totalCount: action.payload}
    default:
      return {...state}
  }
}

export const ProductActionCreators = {
  setProducts: (products: IProduct[]): SetProductsAction => ({type: ProductEnum.SET_PRODUCTS, payload: products}),
  setCurrentProduct: (product: IProduct): SetCurrentProductAction => ({
    type: ProductEnum.SET_CURRENT_PRODUCT,
    payload: product
  }),
  setCategory: (category: string): SetCategoryAction => ({type: ProductEnum.SET_CATEGORY, payload: category}),
  setLoading: (isLoading: boolean): SetLoadingAction => ({type: ProductEnum.SET_LOADING, payload: isLoading}),
  setError: (error: string): SetErrorAction => ({type: ProductEnum.SET_ERROR, payload: error}),
  setTotalCount: (totalCount: number): setTotalCountAction => ({
    type: ProductEnum.SET_TOTAL_COUNT,
    payload: totalCount
  }),
  loadProducts: (
    category: string
  ) => async (dispatch: AppDispatch) => {
    dispatch(ProductActionCreators.setLoading(true))
    setTimeout(async () => {
      try {
        let response = await productsAPI.getProducts(category)
        dispatch(ProductActionCreators.setTotalCount(+response.headers['x-total-count']))
        dispatch(ProductActionCreators.setProducts(response.data))
      } catch (e: any) {
        dispatch(ProductActionCreators.setError(e.message))
      } finally {
        dispatch(ProductActionCreators.setLoading(false))
      }
    }, 500)
  },
  showMore: (
    category: string,
    loadedProducts: IProduct[],
    page: number
  ) => async (dispatch: AppDispatch) => {
    setTimeout(async () => {
      try {
        let response = await productsAPI.getProducts(category, page)
        dispatch(ProductActionCreators.setProducts([...loadedProducts, ...response.data]))

      } catch (e: any) {
        dispatch(ProductActionCreators.setError(e.message))
      }
    }, 600)
  },
  loadCurrentProduct: (
    category: string,
    productId: number
  ) => async (dispatch: AppDispatch) => {

    dispatch(ProductActionCreators.setLoading(true))

    setTimeout(async () => {
      try {
        let {data} = await productsAPI.getCurrentProduct(category, productId)
        if (data.length) {
          dispatch(ProductActionCreators.setCurrentProduct(data[0]))
        } else {
          dispatch(ProductActionCreators.setError("Product wasn't found."))
        }
      } catch (e: any) {
        dispatch(ProductActionCreators.setError(e.message))
      } finally {
        dispatch(ProductActionCreators.setLoading(false))
      }
    }, 2000)
  },
  getSortedProducts: (
    category: string,
    order = 'asc') =>
    async (dispatch: AppDispatch) => {
      dispatch(ProductActionCreators.setLoading(true))
      setTimeout(async () => {
        try {
          let response = await productsAPI.getProductsSortedByPrice(category, order)
          dispatch(ProductActionCreators.setProducts(response.data))
        } catch (e: any) {
          dispatch(ProductActionCreators.setError(e.message))
        } finally {
          dispatch(ProductActionCreators.setLoading(false))
        }
      }, 500)
    }
}


