import React from 'react'
import Market from '../pages/Market/Market.page'
import Login from '../pages/Auth/Login.page'
import SignUp from '../pages/Auth/SignUp.page'
import Category from '../pages/Category/Category.page'
import {RoutePath} from '../utils/paths'
import Main from '../pages/Main/Main.page'
import Articles from '../pages/Articles/Articles.page'
import Product from '../components/Product/Product.component'
import Account from '../pages/Account/Account.page'
import Wishes from '../pages/Wishes/Wishes.page'
import Cart from '../pages/Cart/Cart.page'

export interface IRoute {
  path: string
  element: React.ReactNode
}

export const commonRoutes = [
  {path: RoutePath.MAIN, element: <Main />},
  {path: RoutePath.MARKET, element: <Market />},
  {path: RoutePath.CATEGORY, element: <Category />},
  {path: RoutePath.ARTICLES, element: <Articles />},
  {path: RoutePath.PRODUCT, element: <Product />},
  {path: RoutePath.WISHES, element: <Wishes />},
  {path: RoutePath.CART, element: <Cart />},
]

export const publicRoutes: IRoute[] = [
  {path: RoutePath.LOGIN, element: <Login />},
  {path: RoutePath.SIGNUP, element: <SignUp />},
];

export const privateRoutes: IRoute[] = [
  {path: RoutePath.ACCOUNT, element: <Account />},
]