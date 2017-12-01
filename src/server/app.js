import React from 'react';
import { configureRouter } from '../app/router';

import render from './render';

import Root from '../app';
import configureStore from '../app/redux/index';

const reactApp = (req, res) => {
  const router = configureRouter();
  const store = configureStore(router, {});

  const app = (
    <Root router={router} store={store}>
      <small
        style={{
          display: 'block',
          background: '#000',
          color: '#fff',
        }}
      >
        server-side
      </small>
    </Root>
  );

  router.start(req.url, () => {
    const HTML = render(app, store.getState());
    res.status(200).send(HTML);
  });
};

export default reactApp;
