import {IProduct} from '../../models/IProduct'

export enum WishesEnum {
  SET_WISHES = 'SET_WISHES',
  SET_WISHES_IDs = 'SET_WISHES_IDs',
  SET_LOADING = 'SET_LOADING',
  SET_WISHES_ERROR = 'SET_WISHES_ERROR'
}

export interface IWishesState {
  wishes: IProduct[]
  wishesIds: number[]
  isLoading: boolean
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

export interface ISetLoadingActionType {
  type: WishesEnum.SET_LOADING
  payload: boolean
}

export interface ISetWishesErrorActionType {
  type: WishesEnum.SET_WISHES_ERROR
  payload: string
}

export type WishesActionType =
  ISetWishesActionType
  | ISetLoadingActionType
  | ISetWishesIdsActionType
  | ISetWishesErrorActionType