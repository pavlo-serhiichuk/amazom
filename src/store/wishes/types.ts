import {IProduct} from '../../models/IProduct'

export enum WishesEnum {
  SET_WISHES = 'SET_WISHES',
  SET_WISHES_IDs = 'SET_WISHES_IDs',

}

export interface IWishesState {
  wishes: IProduct[],
  wishesIds: number[]
}

export interface ISetWishesActionType {
  type: WishesEnum.SET_WISHES
  payload: IProduct[]
}

export interface ISetWishesIdsActionType {
  type: WishesEnum.SET_WISHES_IDs
  payload: number[]
}

export type WishesActionType =
  ISetWishesActionType
  | ISetWishesIdsActionType