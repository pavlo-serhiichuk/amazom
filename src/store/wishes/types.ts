import {IProduct} from '../../models/IProduct'

export enum WishesEnum {
  SET_WISHES = 'SET_WISHES',
  SET_WISHES_IDs = 'SET_WISHES_IDs',
  SET_ERROR = 'SET_ERROR'
}

export interface IWishesState {
  wishes: IProduct[],
  wishesIds: number[],
  error: string
}

export interface ISetWishesActionType {
  type: WishesEnum.SET_WISHES
  payload: IProduct[]
}

export interface ISetWishesIdsActionType {
  type: WishesEnum.SET_WISHES_IDs
  payload: number[]
}

export interface ISetWishesErrorActionType {
  type: WishesEnum.SET_ERROR
  payload: string
}

export type WishesActionType =
  ISetWishesActionType
  | ISetWishesIdsActionType
  | ISetWishesErrorActionType