import { combineReducers } from 'redux';
import fooReducer from './foo/index';

export function createReducer() {
  return combineReducers({
    foo: fooReducer,
  });
}
