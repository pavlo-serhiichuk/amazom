import {IProduct} from '../../models/IProduct'

export enum CartEnum {
  SET_CART = 'SET_CART',
  SET_CART_IDs = 'SET_CART_IDs',
  SET_CART_ERROR = 'SET_CART_ERROR'
}

export interface ICartState {
  cart: IProduct[]
  cartIds: number[]
  error: string
}

export interface SetCartAction {
  type: CartEnum.SET_CART
  payload: IProduct[]
}

export interface ISetCartIdsActionType {
  type: CartEnum.SET_CART_IDs
  payload: number[]
}

export interface ISetCartErrorActionType {
  type: CartEnum.SET_CART_ERROR
  payload: string
}

export type CartActionType =
  SetCartAction
  | ISetCartIdsActionType
  | ISetCartErrorActionType