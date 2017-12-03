import React from 'react';
import ReactDOM from 'react-dom';

import Root from '../app';

import registerServiceWorker from './registerServiceWorker';

import configureStore from '../app/redux/index';
import { configureRouter } from '../app/router';

const router = configureRouter();
const store = configureStore(router, window.APP_STATE);

router.start(store.getState().router.route, () => {
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
