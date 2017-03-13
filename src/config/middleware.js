import { applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSaga from 'redux-saga';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const sagaMiddleware = createSaga();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
  console.log('middlewares', middlewares);
}

export { sagaMiddleware };
export default compose(applyMiddleware(...middlewares), devTools);
