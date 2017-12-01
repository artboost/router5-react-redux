import React from 'react';
import ReactDOM from 'react-dom';

import App from '../shared/App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App>
    <small
      style={{
        display: 'block',
        background: '#000',
        color: '#fff',
      }}
    >
      client-side
    </small>
  </App>,
  document.getElementById('root')
);

registerServiceWorker();
