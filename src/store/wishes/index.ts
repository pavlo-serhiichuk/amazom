import {IProduct} from '../../models/IProduct'
import {
  getLocalStorageIds,
  preorderAPI,
  setLocalStorageIds} from '../../api/api'
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

export default function wishesReducer(
  state = initialState,
  action: WishesActionType
) {
  switch (action.type) {
    case WishesEnum.SET_WISHES:
      return {...state, wishes: action.payload}
    case WishesEnum.SET_WISHES_IDs:
      return {...state, wishesIds: action.payload}
    case WishesEnum.SET_WISHES_ERROR:
      return {...state, error: action.payload}
    default:
      return {...state}
  }
}

export const WishesActionCreators = {
  setWishes: (wishes: IProduct[]): ISetWishesActionType => ({
    type: WishesEnum.SET_WISHES,
    payload: wishes
  }),
  setError: (error: string): ISetWishesErrorActionType => ({
    type: WishesEnum.SET_WISHES_ERROR,
    payload: error
  }),
  setWishesIds: (wishesIds: string): ISetWishesIdsActionType => ({
    type: WishesEnum.SET_WISHES_IDs,
    payload: wishesIds.split(',').filter(el => el !== '').map(Number)
  }),

  loadWishes: () => async (dispatch: AppDispatch) => {
    try {
      const wishesIds = getLocalStorageIds('wishes_ids')

      if (wishesIds) {
        const response = await preorderAPI.getPreorderProducts(wishesIds.split(',').join('&id='))
        dispatch(WishesActionCreators.setWishes(response.data))
      } else {
        dispatch(WishesActionCreators.setWishes([]))
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
        const newWishesIds = `${wishesIds},${wishesId}`

        const response = await preorderAPI.getPreorderProducts(newWishesIds.split(',').join('&id='))
        dispatch(WishesActionCreators.setWishes(response.data))
        dispatch(WishesActionCreators.setWishesIds(newWishesIds))
        setLocalStorageIds('wishes_ids', newWishesIds)

      } else {
        const response = await preorderAPI.getPreorderProducts(wishesId)
        dispatch(WishesActionCreators.setWishes(response.data))
        dispatch(WishesActionCreators.setWishesIds(wishesId))
        setLocalStorageIds('wishes_ids', wishesId)
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
        const newWishesIds = wishesIds.replace(`${wishesId}`, '')

        dispatch(WishesActionCreators.setWishesIds(newWishesIds))
        setLocalStorageIds('wishes_ids', newWishesIds.toString())
      }
    } catch (e: any) {
      dispatch(WishesActionCreators.setError(e.message))
    }
  }
}
