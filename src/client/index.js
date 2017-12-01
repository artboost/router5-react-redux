import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import configureStore from '../app/redux/index';

import Root from '../app';

// Init redux
const initialState = window.APP_STATE;
const store = configureStore(initialState);

// Render
ReactDOM.render(
  <Root store={store}>
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

registerServiceWorker();
