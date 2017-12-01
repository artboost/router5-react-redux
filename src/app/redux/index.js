import { applyMiddleware, createStore } from 'redux';

import { createMiddleware } from './middleware';
import { createReducer } from './reducers';

export default function configureStore(initialState = {}) {
  const middleware = createMiddleware();
  return createStore(
    createReducer(),
    initialState,
    applyMiddleware(...middleware)
  );
}
