import React from 'react'
import Market from '../pages/Market/Market.page'
import Login from '../pages/Auth/Login.page'
import SignUp from '../pages/Auth/SignUp.page'
import Category from '../pages/Category/Category.page'
import {PathEnum} from '../utils/paths'
import Main from '../pages/Main/Main.page'
import Articles from '../pages/Articles/Articles.page'
import Product from '../pages/Product/Product.page'
import Account from '../pages/Account/Account.page'
import Wishes from '../pages/Wishes/Wishes.page'
import Cart from '../pages/Cart/Cart.page'
import Search from '../pages/Search/Search.page'
import ErrorPage from '../pages/Error/Error.page'

export interface IRoute {
  path: string
  element: React.ReactNode
}

export const commonRoutes = [
  {path: PathEnum.MAIN, element: <Main />},
  {path: PathEnum.MARKET, element: <Market />},
  {path: PathEnum.CATEGORY, element: <Category />},
  {path: PathEnum.ARTICLES, element: <Articles />},
  {path: PathEnum.PRODUCT, element: <Product />},
  {path: PathEnum.WISHES, element: <Wishes />},
  {path: PathEnum.CART, element: <Cart />},
  {path: PathEnum.SEARCH, element: <Search />},
  {path: PathEnum.ERROR, element: <ErrorPage />},
]

export const publicRoutes: IRoute[] = [
  {path: PathEnum.LOGIN, element: <Login />},
  {path: PathEnum.SIGNUP, element: <SignUp />},
];

export const privateRoutes: IRoute[] = [
  {path: PathEnum.ACCOUNT, element: <Account />},
]