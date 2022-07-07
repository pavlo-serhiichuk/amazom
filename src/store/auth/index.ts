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

  isAuth: false,
  user: {} as IUser,
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
  setUser: (user: IUser): SetUserAction => ({type: AuthEnum.SET_USER, payload: user}),
  setLoading: (isLoading: boolean): SetLoadingAction => ({type: AuthEnum.SET_LOADING, payload: isLoading}),
  setError: (error: string): SetErrorAction => ({type: AuthEnum.SET_ERROR, payload: error}),
}


  export default authReducer