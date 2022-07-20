import {
  ActionType,
  AuthEnum,
  AuthState,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction, SetUserAction,
} from './types'
import {IUser} from '../../models/IUser'
import {AppDispatch} from '../index'
import axios from 'axios'
import {serverURL} from '../../api/api'

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: null
}

const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case AuthEnum.SET_AUTH:
      console.log('entered')
      return {...state, isAuth: action.payload}
    case AuthEnum.SET_USER:
      console.log('entered')
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
  login: (email: string, password: string) => async (dispatch: AppDispatch) => {
    const response = await axios.post(`${serverURL}login`, {email, password})
    console.log(response.data.user)
    dispatch(AuthActionCreators.setUser(response.data.user))
    dispatch(AuthActionCreators.setAuth(true))
  },
  signUp: (firstName: string, lastName: string, email: string, password: string) => async (dispatch: AppDispatch) => {
    const response = await axios.post(`${serverURL}register`, {firstName, lastName, email, password})
    console.log(response.data.user)
    dispatch(AuthActionCreators.setUser(response.data.user))
    dispatch(AuthActionCreators.setAuth(true))
  }
}


  export default authReducer