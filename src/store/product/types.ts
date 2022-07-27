import {IProduct} from '../../models/IProduct'

export interface ProductState {
  products: IProduct[]
  currentProduct: IProduct
  category: string
  isLoading: boolean
  error: string | null
  pages: number
}

export enum ProductEnum {
  SET_PRODUCTS = 'SET_PRODUCTS',
  SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT',
  SET_CATEGORY = 'SET_CATEGORY',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_PAGES = 'SET_PAGES',
}

export interface SetProductsAction {
  type: ProductEnum.SET_PRODUCTS
  payload: IProduct[]
}

export interface SetCurrentProductAction {
  type: ProductEnum.SET_CURRENT_PRODUCT
  payload: IProduct
}

export interface SetCategoryAction {
  type: ProductEnum.SET_CATEGORY
  payload: string
}

export interface SetLoadingAction {
  type: ProductEnum.SET_LOADING
  payload: boolean
}

export interface SetErrorAction {
  type: ProductEnum.SET_ERROR
  payload: string
}

export interface SetPagesAction {
  type: ProductEnum.SET_PAGES
  payload: number
}

export type ProductActionType =
  SetProductsAction
  | SetCurrentProductAction
  | SetCategoryAction
  | SetLoadingAction
  | SetErrorAction
  | SetPagesAction