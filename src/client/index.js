import React from 'react';
import ReactDOM from 'react-dom';
import { configureRouter } from '../app/router';

import registerServiceWorker from './registerServiceWorker';
import configureStore from '../app/redux/index';

import Root from '../app';

// Init redux
const initialState = window.APP_STATE;

const router = configureRouter();
const store = configureStore(router, initialState);

// Render
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

registerServiceWorker();
