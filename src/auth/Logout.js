import React from 'react';
import { Redirect } from 'react-router-dom';

import { logout } from './auth.service';

const Logout = () => {
  logout();
  return <Redirect to="/" />;
};

export default Logout;
