import React from 'react';

import Root from '../app';

import configureStore from '../app/redux';
import { configureRouter } from '../app/router';

import render from './render';

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
    const state = store.getState();
    const HTML = render(app, state);

    const { router: { route: { status } } } = state;
    res.status(status).send(HTML);
  });
};

export default reactApp;
