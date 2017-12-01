import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';
import fooReducer from './foo/index';

export function createReducer() {
  return combineReducers({
    router: router5Reducer,
    foo: fooReducer,
  });
}
