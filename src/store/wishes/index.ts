import {IProduct} from '../../models/IProduct'
import {preorderAPI, productsAPI} from '../../api/api'
import {ISetWishesActionType, ISetWishesIdsActionType, IWishesState, WishesActionType, WishesEnum} from './types'
import {AppDispatch} from '../index'


const initialState: IWishesState = {
  wishes: [] as IProduct[],
  wishesIds: [] as number[]
}

export default function wishesReducer(state = initialState, action: WishesActionType) {
  switch (action.type) {
    case WishesEnum.SET_WISHES:
      return {...state, wishes: action.payload}
    case WishesEnum.SET_WISHES_IDs:
      console.log(action.payload)
      return {...state, wishesIds: action.payload}
    default:
      return {...state}
  }
}

export const WishesActionCreators = {
  setWishes: (wishes: IProduct[]): ISetWishesActionType => ({type: WishesEnum.SET_WISHES, payload: wishes}),
  setWishesIds: (wishesIds: number[]): ISetWishesIdsActionType => ({type: WishesEnum.SET_WISHES_IDs, payload: wishesIds}),

  loadWishes: () => async (dispatch: AppDispatch) => {
    const productsURL = localStorage.getItem('wishes_ids')?.split(',').join('&id=')

    if (productsURL) {
      const response = await preorderAPI.getPreorderProducts(productsURL)
      dispatch(WishesActionCreators.setWishes(response.data))
    }
  },

  addWishesId: (id: number) => async (dispatch: AppDispatch) => {
    const wishesId = (id).toString()
    const wishesIds: string | null = localStorage.getItem('wishes_ids')

    if (wishesIds) {
      if (wishesIds.indexOf(wishesId) >= 0) {
        return
      }
      const newCardIds = `${wishesIds},${wishesId}`
      localStorage.setItem('wishes_ids', `${newCardIds}`)

      const productsURL = newCardIds.split(',').join('&id=')

      const response = await productsAPI.getWishesProduct(productsURL)
      dispatch(WishesActionCreators.setWishes(response.data))
      dispatch(WishesActionCreators.setWishesIds(newCardIds.split(',').filter(el => el !== '').map(Number)))

    } else {
      localStorage.setItem('wishes_ids', wishesId)
      const response = await productsAPI.getWishesProduct(wishesId)
      dispatch(WishesActionCreators.setWishes(response.data))
      dispatch(WishesActionCreators.setWishesIds([id]))
    }
  },

  deleteWishesId: (id: number) => async (dispatch: AppDispatch) => {
      const wishesId = (id).toString()
      const wishesIds = localStorage.getItem('wishes_ids')
      const newWishesIds = wishesIds?.replace(`${wishesId}`, '').split(',').filter(el => el !== '')
    if (newWishesIds) {
      dispatch(WishesActionCreators.setWishesIds(newWishesIds.map(Number)))
      localStorage.setItem('wishes_ids', newWishesIds.join())
    }
  }

}
