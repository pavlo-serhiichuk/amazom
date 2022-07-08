import React from 'react';
import {commonRoutes, publicRoutes} from '../../routes/routes'
import {Route, Routes} from 'react-router-dom'

const AppRouter = () => {

  return (
    <Routes>
      {commonRoutes.map(route => <Route path={route.path} element={route.element} key={route.path} />)}
      {publicRoutes.map(route => <Route path={route.path} element={route.element} key={route.path} />)}
    </Routes>
  );
};

export default AppRouter;