import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom'
import { routes } from '.';

 const PrivateRoute = ({children}) => {
    const {isAuth} = useSelector((state)=>state.user)
    return isAuth ? children : <Navigate to="/" />;
}

const PrivateRoutes = routes.map(({ path, component, id }) => (
    <Route
      exact
      path={path}
      element={<PrivateRoute>{component}</PrivateRoute>}
      key={id}
    />
  ));

  export default PrivateRoutes