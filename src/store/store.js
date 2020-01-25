import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Admin
import { adminReducer } from 'store/admin/reducers';
import { watchAdmin } from 'store/admin/sagas';
// Auth
import { authReducer } from 'store/auth/reducers';
import { watchAuth } from 'store/auth/sagas';

export const getStore = history => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;

  const sagaMiddleware = createSagaMiddleware();

  const createRootReducer = () =>
    combineReducers({
      auth: authReducer,
      admin: adminReducer
    });

  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(watchAuth);
  sagaMiddleware.run(watchAdmin);

  return store;
};
