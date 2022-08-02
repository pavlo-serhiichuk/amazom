import {IProduct} from '../../models/IProduct'
import {
  CartActionType,
  CartEnum,
  ICartState,
  ISetCartErrorActionType,
  ISetCartIdsActionType,
  SetCartAction
} from './types'
import {AppDispatch} from '../index'
import {
  getLocalStorageIds,
  preorderAPI,
  setLocalStorageIds
} from '../../api/api'

const initialState: ICartState = {
  cart: [] as IProduct[],
  cartIds: [] as number[],
  error: ''
}

export default function cartReducer(
  state = initialState,
  action: CartActionType
) {
  switch (action.type) {
    case CartEnum.SET_CART:
      return {...state, cart: action.payload}
    case CartEnum.SET_CART_IDs:
      return {...state, cartIds: action.payload}
    case CartEnum.SET_CART_ERROR:
      return {...state, error: action.payload}
    default:
      return {...state}
  }
}

export const CartActionCreators = {
  setCart: (cart: IProduct[]): SetCartAction => ({
    type: CartEnum.SET_CART,
    payload: cart
  }),
  setCartError: (error: string): ISetCartErrorActionType => ({
    type: CartEnum.SET_CART_ERROR,
    payload: error
  }),
  setCartIds: (cartIds: string): ISetCartIdsActionType => ({
    type: CartEnum.SET_CART_IDs,
    payload: cartIds.split(',').filter(el => el !== '').map(Number)
  }),

  loadCart: () => async (dispatch: AppDispatch) => {
    try {
      const cartIds = getLocalStorageIds('cart_ids')

      if (cartIds) {
        const response = await preorderAPI.getPreorderProducts(cartIds.split(',').join('&id='))
        dispatch(CartActionCreators.setCart(response.data))
      } else {
        dispatch(CartActionCreators.setCart([]))
      }
    } catch (e: any) {
      dispatch(CartActionCreators.setCartError(e.message))
    }
  },

  addCartId: (id: number) => async (dispatch: AppDispatch) => {
    try {
      const cartId = (id).toString()
      const cartIds = getLocalStorageIds('cart_ids')

      if (cartIds) {
        const newCardIds = `${cartIds},${cartId}`

        const response = await preorderAPI.getPreorderProducts(newCardIds.split(',').join('&id='))
        dispatch(CartActionCreators.setCart(response.data))
        dispatch(CartActionCreators.setCartIds(newCardIds))
        setLocalStorageIds('cart_ids', `${newCardIds}`)
      } else {
        const response = await preorderAPI.getPreorderProducts(cartId)
        dispatch(CartActionCreators.setCart(response.data))
        dispatch(CartActionCreators.setCartIds(cartId))
        setLocalStorageIds('cart_ids', cartId)
      }

    } catch (e: any) {
      dispatch(CartActionCreators.setCartError(e.message))
    }
  },

  deleteCartId: (id: number) => async (dispatch: AppDispatch) => {
    try {
      const cartId = (id).toString()
      const cartIds = getLocalStorageIds('cart_ids')

      if (cartIds) {
        const newCartIds = cartIds.replace(`${cartId}`, '')

        dispatch(CartActionCreators.setCartIds(newCartIds))
        setLocalStorageIds('cart_ids', newCartIds.toString())
      }
    } catch (e: any) {
      dispatch(CartActionCreators.setCartError(e.message))
    }
  }
}
