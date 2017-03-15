import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './config/vendor';

import './index.css';
import routes from './config/routes';
import reducer from './config/reducer';
import middleware, { sagaMiddleware } from './config/middleware';
import rootSaga from './config/saga';

const store = createStore(reducer, middleware);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
