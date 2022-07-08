import React from 'react'
import MarketPage from '../pages/Market/Market.page'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import CategoryPage from '../pages/Category/Category.page'

export interface IRoute {
  path: string
  element: React.ReactNode
}

enum RouteName {
  MARKET = '/market',
  // CLASSES = '/classes',
  // FORMS = '/forms',
  // CLASS_CONTEXT = '/class/context',
  // FUNCTION_CONTEXT = '/class/function',
  // REACT_BITS = '/react-bits',
  // COMMON = '/common',
  CATEGORY = '/market/:category',
  SIGNIN = '/signup',
  LOGIN = '/login',
  // USERS = '/users',
  // ERROR = '/error',
}


export const commonRoutes = [
{path: RouteName.MARKET, element: <MarketPage />},
{path: RouteName.CATEGORY, element: <CategoryPage />},
]

export const publicRoutes: IRoute[] = [
  {path: RouteName.LOGIN, element: <Login />},
  {path: RouteName.SIGNIN, element: <SignUp />},
];
//
// export const privateRoutes: IRoute[] = [
//   // {path: RouteName.PROFILE, element: <Profile />, name: 'My Profile'},
// ]