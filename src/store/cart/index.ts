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
  setCartIds: (cartIds: number[]): ISetCartIdsActionType => ({
    type: CartEnum.SET_CART_IDs,
    payload: cartIds
  }),

  loadCart: () => async (dispatch: AppDispatch) => {
    try {
      const cartIds = getLocalStorageIds('cart_ids')

      if (cartIds) {
        const response = await preorderAPI.getPreorderProducts(cartIds.split(',').join('&id='))
        dispatch(CartActionCreators.setCart(response.data))
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
        dispatch(CartActionCreators.setCartIds(newCardIds.split(',').filter(el => el !== '').map(Number)))
        setLocalStorageIds('cart_ids', `${newCardIds}`)
      } else {
        const response = await preorderAPI.getPreorderProducts(cartId)
        dispatch(CartActionCreators.setCart(response.data))
        dispatch(CartActionCreators.setCartIds([id]))
        setLocalStorageIds('cart_ids', cartId)
      }

    } catch (e: any) {
      dispatch(CartActionCreators.setCartError(e.message))
    }
  },

  deleteCartId: (id: number) => async (dispatch: AppDispatch) => {
    try {
      const wishesId = (id).toString()
      const wishesIds = getLocalStorageIds('cart_ids')

      if (wishesIds) {
        const newCartIds = wishesIds
          .replace(`${wishesId}`, '')
          .split(',').filter(el => el !== '')
          .map(Number)

        dispatch(CartActionCreators.setCartIds(newCartIds))
        setLocalStorageIds('cart_ids', newCartIds.join())
      }
    } catch (e: any) {
      dispatch(CartActionCreators.setCartError(e.message))
    }
  }
}
//
// export const CartActionCreators = {
//   setCart: (cart: IProduct[]): SetCartAction => ({type: CartEnum.SET_CART, payload: cart}),
//   loadCart: () => async (dispatch: AppDispatch) => {
//     const productsURL = localStorage.getItem('cart_ids')?.split(',').join('&id=')
//
//     if (productsURL) {
//       const response = await preorderAPI.getPreorderProducts(productsURL)
//       dispatch(CartActionCreators.setCart(response.data))
//     }
//   },
//   addCartId: (id: number) => async (dispatch: AppDispatch) => {
//     const cartId = (id).toString()
//     const cartIds: string | null = localStorage.getItem('cart_ids')
//
//     if (cartIds) {
//       if (cartIds.indexOf(cartId) >= 0) {
//         return false
//       }
//
//       const newCardIds = `${cartIds},${cartId}`
//       localStorage.setItem('cart_ids', `${newCardIds}`)
//
//       const productsURL = newCardIds.split(',').join('&id=')
//       const response = await preorderAPI.getPreorderProducts(productsURL)
//       dispatch(CartActionCreators.setCart(response.data))
//
//     } else {
//       localStorage.setItem('cart_ids', cartId)
//       const response = await preorderAPI.getPreorderProducts(cartId)
//       dispatch(CartActionCreators.setCart(response.data))
//     }
//   },
//   deleteCartId: (id: number) => async (dispatch: AppDispatch) => {
//     const wishesId = (id).toString()
//     const wishesIds = localStorage.getItem('cart_ids')
//
//     if (wishesIds) {
//       localStorage.setItem('cart_ids', wishesIds.replace(`${wishesId}`, '').split(',').join())
//     }
//   }
// }
