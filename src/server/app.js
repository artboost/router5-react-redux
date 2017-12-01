import React from 'react';

import render from './render';

import App from '../app/containers/App/index';

const reactApp = (req, res) => {
  const dom = (
    <App>
      <small
        style={{
          display: 'block',
          background: '#000',
          color: '#fff',
        }}
      >
        server-side
      </small>
    </App>
  );
  const HTML = render(dom);
  res.status(200).send(HTML);
};

export default reactApp;
