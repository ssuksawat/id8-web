import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import PrivateRoute from 'components/route-helpers/PrivateRoute';

import App from '../App';
import Login from '../auth/Login';
import Logout from '../auth/Logout';
import Signup from '../auth/Signup';

const RedirectToHome = () => (<Redirect to="/" />);
const PrivateTestPage = () => (<div>Private Page!</div>);

const routes = (
<ConnectedRouter history={history}>
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/signup" component={Signup} />
    <PrivateRoute path="/private" component={PrivateTestPage}/>
    <Route component={RedirectToHome} />
  </Switch>
</ConnectedRouter>
);

export default routes;
