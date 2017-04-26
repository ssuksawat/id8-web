import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from '../auth/auth.reducer';

const reducer = combineReducers({
  auth,
  router: routerReducer
});

export default reducer;
