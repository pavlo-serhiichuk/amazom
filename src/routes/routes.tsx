import React from 'react'
import Market from '../pages/Market/Market.page'
import Login from '../pages/Login/Login.page'
import SignUp from '../pages/SignUp/SignUp.page'
import Category from '../pages/Category/Category.page'
import {RouteEnum} from '../constants/routes'
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
  {path: RouteEnum.MAIN, element: <Main />},
  {path: RouteEnum.MARKET, element: <Market />},
  {path: RouteEnum.CATEGORY, element: <Category />},
  {path: RouteEnum.ARTICLES, element: <Articles />},
  {path: RouteEnum.PRODUCT, element: <Product />},
  {path: RouteEnum.WISHES, element: <Wishes />},
  {path: RouteEnum.CART, element: <Cart />},
]

export const publicRoutes: IRoute[] = [
  {path: RouteEnum.LOGIN, element: <Login />},
  {path: RouteEnum.SIGNUP, element: <SignUp />},
];

export const privateRoutes: IRoute[] = [
  {path: RouteEnum.ACCOUNT, element: <Account />},
]