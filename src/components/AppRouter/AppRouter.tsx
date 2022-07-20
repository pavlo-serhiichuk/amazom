import React from 'react';
import {commonRoutes, privateRoutes, publicRoutes} from '../../routes/routes'
import {Route, Routes} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'

const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.auth)
  return (
    <Routes>
      {commonRoutes.map(route => <Route path={route.path} element={route.element} key={route.path} />)}
      {!isAuth && publicRoutes.map(route => <Route path={route.path} element={route.element} key={route.path} />)}
      {isAuth && privateRoutes.map(route => <Route path={route.path} element={route.element} key={route.path} />)}
    </Routes>
  );
};

export default AppRouter;