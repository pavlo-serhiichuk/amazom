import {AppDispatch} from '../index'
import axios from 'axios'
import {
  ActionType,
  AuthEnum,
  AuthState,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction, SetUserAction,
} from './types'
import {IUser} from '../../models/IUser'

const initialState: AuthState = {

  user: {} as IUser,
  isAuth: false,
  isLoading: false,
  error: null
}

const authReducer = (state = initialState, action: ActionType) => {
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
  setLoading: (isLoading: boolean): SetLoadingAction => ({type: AuthEnum.SET_LOADING, payload: isLoading}),
  setUser: (user: IUser): SetUserAction => ({type: AuthEnum.SET_USER, payload: user}),
  setError: (error: string): SetErrorAction => ({type: AuthEnum.SET_ERROR, payload: error}),
  signIn: (email: any, password: any) => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setLoading(true))
    setTimeout(async () => {
      try {
        const {data} = await axios.post<any>('http://localhost:1115/signin', {
          'email': email,
          'password': password
        })
        dispatch(AuthActionCreators.setUser(data.user))
        dispatch(AuthActionCreators.setAuth(true))
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
      } catch (e: any) {
        dispatch(AuthActionCreators.setLoading(false))
        dispatch(AuthActionCreators.setError(e.message))
      }
    }, 500)

  },
  login: (email: string, username: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setLoading(true))
    setTimeout(async () => {
      try {
        const response = await axios.post<any>('http://localhost:1115/register', {
          'email': email,
          'username': username,
          'password': password
        })

        dispatch(AuthActionCreators.setUser(response.data.user.username))
        dispatch(AuthActionCreators.setAuth(true))

        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('username', username)
      } catch (e: any) {
        dispatch(AuthActionCreators.setLoading(false))
        dispatch(AuthActionCreators.setError(e.message))
      }
    }, 2000)
  },
  logOut: () => async (dispatch: AppDispatch) => {
    localStorage.clear()
    dispatch(AuthActionCreators.setAuth(false))
    dispatch(AuthActionCreators.setUser({} as IUser))
  }
}


  export default authReducer