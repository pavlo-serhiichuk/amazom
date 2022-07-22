import {IProduct} from '../../models/IProduct'

export enum WishesEnum {
  SET_WISHES = 'SET_WISHES',
}

export interface IWishesState {
  wishes: IProduct[]
}

export interface ISetWishesActionType {
  type: WishesEnum.SET_WISHES
  payload: IProduct[]
}

export type WishesActionType = ISetWishesActionType