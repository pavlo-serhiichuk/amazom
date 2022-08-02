import {
  ActionType,
  AuthEnum,
  IAuthState,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction, SetUserAction,
} from './types'
import {IUser} from '../../models/IUser'
import {AppDispatch} from '../index'
import {authAPI} from '../../api/api'

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: null
}

export default function authReducer(
  state = initialState,
  action: ActionType
) {
  switch (action.type) {
    case AuthEnum.SET_AUTH:
      return {...state, isAuth: action.payload}
    case AuthEnum.SET_USER:
      return {...state, user: action.payload}
    case AuthEnum.SET_LOADING:
      return {...state, isLoading: action.payload}
    case AuthEnum.SET_ERROR:
      return {...state, error: action.payload}
    default:
      return {...state}
  }
}

export const AuthActionCreators = {
  setAuth: (isAuth: boolean): SetAuthAction => ({type: AuthEnum.SET_AUTH, payload: isAuth}),
  setUser: (user: IUser): SetUserAction => ({type: AuthEnum.SET_USER, payload: user}),
  setLoading: (isLoading: boolean): SetLoadingAction => ({type: AuthEnum.SET_LOADING, payload: isLoading}),
  setError: (error: string): SetErrorAction => ({type: AuthEnum.SET_ERROR, payload: error}),
  login: (
    email: string,
    password: string
  ) => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setLoading(true))
    try {
      const response = await authAPI.login(email, password)
      dispatch(AuthActionCreators.setUser(response.data.user))
      dispatch(AuthActionCreators.setAuth(true))
    } catch (e: any) {
      dispatch(AuthActionCreators.setError(e.message))
    } finally {
      dispatch(AuthActionCreators.setLoading(false))
    }
  },
  signUp: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setLoading(true))
    try {
      const response = await authAPI.signUp(firstName, lastName, email, password)
      dispatch(AuthActionCreators.setUser(response.data.user))
      dispatch(AuthActionCreators.setAuth(true))
    } catch (e: any) {
      dispatch(AuthActionCreators.setError(e.message))
    } finally {
      dispatch(AuthActionCreators.setLoading(false))
    }
  }
}