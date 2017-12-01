import { applyMiddleware, createStore } from 'redux';

import { createMiddleware } from './middleware';
import { createReducer } from './reducers';

export default function configureStore(router, initialState = {}) {
  const middleware = createMiddleware(router);
  return createStore(
    createReducer(),
    initialState,
    applyMiddleware(...middleware)
  );
}
