import React from 'react';
import ReactDOM from 'react-dom';
import { configureRouter } from '../app/router';

import configureStore from '../app/redux/index';

import Root from '../app';

// TODO: Initial state is undefined on initial load, for some reason. Figure out why, and fix!
// Init redux
const initialState = window.APP_STATE;

const router = configureRouter();
const store = configureStore(router, initialState);

// TODO: Navigate using initial state.
router.start('/', () => {
  ReactDOM.render(
    <Root router={router} store={store}>
      <small
        style={{
          display: 'block',
          background: '#000',
          color: '#fff',
        }}
      >
        client-side
      </small>
    </Root>,
    document.getElementById('root')
  );
});
