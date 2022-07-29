import {IProduct} from '../../models/IProduct'
import {getLocalStorageIds, preorderAPI, setLocalStorageIds} from '../../api/api'
import {
  ISetWishesActionType,
  ISetWishesErrorActionType,
  ISetWishesIdsActionType,
  IWishesState,
  WishesActionType,
  WishesEnum
} from './types'
import {AppDispatch} from '../index'


const initialState: IWishesState = {
  wishes: [] as IProduct[],
  wishesIds: [] as number[],
  error: ''
}

export default function wishesReducer(state = initialState, action: WishesActionType) {
  switch (action.type) {
    case WishesEnum.SET_WISHES:
      return {...state, wishes: action.payload}
    case WishesEnum.SET_WISHES_IDs:
      return {...state, wishesIds: action.payload}
    case WishesEnum.SET_ERROR:
      return {...state, error: action.payload}
    default:
      return {...state}
  }
}

export const WishesActionCreators = {
  setWishes: (wishes: IProduct[]): ISetWishesActionType => ({type: WishesEnum.SET_WISHES, payload: wishes}),
  setError: (error: string): ISetWishesErrorActionType => ({type: WishesEnum.SET_ERROR, payload: error}),
  setWishesIds: (wishesIds: number[]): ISetWishesIdsActionType => ({
    type: WishesEnum.SET_WISHES_IDs,
    payload: wishesIds
  }),

  loadWishes: () => async (dispatch: AppDispatch) => {
    try {
      const wishesIds = getLocalStorageIds('wishes_ids')

      if (wishesIds) {
        const response = await preorderAPI.getPreorderProducts(wishesIds.split(',').join('&id=='))
        dispatch(WishesActionCreators.setWishes(response.data))
      }
    } catch (e: any) {
      dispatch(WishesActionCreators.setError(e.message))
    }
  },

  addWishesId: (id: number) => async (dispatch: AppDispatch) => {
    try {
      const wishesId = (id).toString()
      const wishesIds = getLocalStorageIds('wishes_ids')

      if (wishesIds) {
        const newCardIds = `${wishesIds},${wishesId}`
        setLocalStorageIds('wishes_ids', newCardIds)

        const response = await preorderAPI.getPreorderProducts(newCardIds.split(',').join('&id='))
        dispatch(WishesActionCreators.setWishes(response.data))
        dispatch(WishesActionCreators.setWishesIds(newCardIds.split(',').filter(el => el !== '').map(Number)))

      } else {
        localStorage.setItem('wishes_ids', wishesId)
        const response = await preorderAPI.getPreorderProducts(wishesId)
        dispatch(WishesActionCreators.setWishes(response.data))
        dispatch(WishesActionCreators.setWishesIds([id]))
      }
    } catch (e: any) {
      dispatch(WishesActionCreators.setError(e.message))
    }
  },

  deleteWishesId: (id: number) => async (dispatch: AppDispatch) => {
    try {
      const wishesId = (id).toString()
      const wishesIds = getLocalStorageIds('wishes_ids')

      if (wishesIds) {
        const newWishesIds = wishesIds
          .replace(`${wishesId}`, '')
          .split(',').filter(el => el !== '')
          .map(Number)

        dispatch(WishesActionCreators.setWishesIds(newWishesIds))
        setLocalStorageIds('wishes_ids', newWishesIds.join())
      }
    } catch (e: any) {
      dispatch(WishesActionCreators.setError(e.message))
    }
  }

}
