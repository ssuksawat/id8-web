import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as AuthService from '../../auth/auth.service';

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    AuthService.isAuthenticated() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default PrivateRoute;
