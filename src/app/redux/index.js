import { createStore } from 'redux';
import { createReducer } from './reducers';

export default function configureStore(initialState = {}) {
  return createStore(
    createReducer(),
    initialState
  );
}
