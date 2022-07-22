import {IProduct} from '../../models/IProduct'
import {productsAPI, serverURL} from '../../api/api'
import axios from 'axios'
import {ISetWishesActionType, IWishesState, WishesActionType, WishesEnum} from './types'
import {AppDispatch} from '../index'


const initialState: IWishesState = {
  wishes: [] as IProduct[],
}

export default function wishesReducer(state = initialState, action: WishesActionType) {
  switch (action.type) {
    case WishesEnum.SET_WISHES:
      return {...state, wishes: action.payload}
    default:
      return {...state}
  }
}

export const WishesActionCreators = {
  setWishes: (wishes: IProduct[]): ISetWishesActionType => ({type: WishesEnum.SET_WISHES, payload: wishes}),
  loadWishes: () => async (dispatch: AppDispatch) => {
    const productsURL = localStorage.getItem('wishes_ids')?.split(',').join('&id=')
    const response = await axios.get(`${serverURL}products?id=${productsURL}`)
    console.log(`${serverURL}products?id=${productsURL}`)
    dispatch(WishesActionCreators.setWishes(response.data))
  },
  addWishesId: (id: number) => async (dispatch: AppDispatch) => {
    const wishesId = (id).toString()
    const wishesIds: string | null = localStorage.getItem('wishes_ids')

    if (wishesIds) {
      if (wishesIds.indexOf(wishesId) >= 0) {
        return false
      }
      const newCardIds = `${wishesIds},${wishesId}`
      localStorage.setItem('wishes_ids', `${newCardIds}`)

      const productsURL = newCardIds.split(',').join('&id=')
      const response = await productsAPI.getWishesProduct(productsURL)
      dispatch(WishesActionCreators.setWishes(response.data))

    } else {
      localStorage.setItem('wishes_ids', wishesId)
      const response = await productsAPI.getWishesProduct(wishesId)
      dispatch(WishesActionCreators.setWishes(response.data))
    }
  }
}
