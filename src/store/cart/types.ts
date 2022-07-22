import {IProduct} from '../../models/IProduct'

export enum CartEnum {
  CART = 'CART',
}

export interface ICartState {
  cart: IProduct[]
}

export interface SetCartAction {
  type: CartEnum.CART
  payload: IProduct[]
}

export type CartActionType = SetCartAction