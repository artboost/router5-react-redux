import React from 'react'

import render from './render'

import App from '../shared/App'

const reactApp = (req, res) => {
  const HTML = render(
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
  res.status(200).send(HTML)
};

export default reactApp
