import { applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSaga from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import history from './history';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const sagaMiddleware = createSaga();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

export { sagaMiddleware };
export default compose(applyMiddleware(...middlewares), devTools);
