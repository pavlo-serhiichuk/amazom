import {IUser} from '../../models/IUser'

export interface AuthState {
  user: IUser
  isAuth: boolean
  isLoading: boolean
  error: string | null
}

export enum AuthEnum {
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USERNAME',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR'
}

export interface SetAuthAction {
  type: AuthEnum.SET_AUTH
  payload: boolean,
}

export interface SetUserAction {
  type: AuthEnum.SET_USER,
  payload: IUser,
}

export interface SetLoadingAction {
  type: AuthEnum.SET_LOADING
  payload: boolean
}

export interface SetErrorAction {
  type: AuthEnum.SET_ERROR
  payload: string
}

export type ActionType = SetAuthAction | SetUserAction | SetLoadingAction | SetErrorAction
