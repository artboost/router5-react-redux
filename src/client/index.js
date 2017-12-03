import React from 'react';
import ReactDOM from 'react-dom';

import Root from '../app';

import registerServiceWorker from './registerServiceWorker';

import configureStore from '../app/redux/index';
import { configureRouter, startRouter } from '../app/router';

const router = configureRouter();
const store = configureStore(router, window.APP_STATE);

const render = () => {
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
};

startRouter(router, store.getState().router.route).then(render);

registerServiceWorker();
