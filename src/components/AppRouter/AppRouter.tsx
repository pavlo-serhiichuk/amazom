import React, {useEffect} from 'react';
import {commonRoutes, privateRoutes, publicRoutes} from '../../routes/routes'
import {Route, Routes, useNavigate} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'

const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuth) navigate('/')
  }, [isAuth])

  return (
    <Routes>
      {commonRoutes.map(route => <Route path={route.path} element={route.element} key={route.path} />)}
      {!isAuth && publicRoutes.map(route => <Route path={route.path} element={route.element} key={route.path} />)}
      {isAuth && privateRoutes.map(route => <Route path={route.path} element={route.element} key={route.path} />)}
    </Routes>
  );
};

export default AppRouter;