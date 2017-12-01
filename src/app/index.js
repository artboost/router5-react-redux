/* eslint-disable global-require */
/*
 *
 * AppRoot
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import App from './containers/App';

const Root = ({ store, children }) => (
  <Provider store={store}>
    <App>
      { children }
    </App>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Root;
