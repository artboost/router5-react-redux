import React from 'react';
import ReactDOM from 'react-dom';
import { configureRouter } from '../app/router';

import configureStore from '../app/redux/index';

import Root from '../app';

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
