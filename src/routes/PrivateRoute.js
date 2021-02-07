import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../hooks/auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        !!currentUser ? <RouteComponent {...props} /> : <Redirect to={'/'} />
      }
    />
  );
};

export default PrivateRoute;
