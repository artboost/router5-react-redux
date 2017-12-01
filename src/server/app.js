import React from 'react';

import render from './render';

import Root from '../app';
import configureStore from '../app/redux/index';

const reactApp = (req, res) => {
  const store = configureStore({});

  const app = (
    <Root store={store}>
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

  const HTML = render(app, store.getState());
  res.status(200).send(HTML);
};

export default reactApp;
