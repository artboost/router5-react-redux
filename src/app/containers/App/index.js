import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingOverlay from '../../components/LoadingOverlay';
import Link from '../../components/Link';

import childRouteSelector from '../../redux/selectors/childRoute';

const App = ({ childRoute }) => (
  <div>
    <LoadingOverlay />
    <div style={{ padding: '10px 0' }}>
      <Link
        style={{
          border: '1px solid #222',
          padding: 5,
        }}
        activeStyle={{ fontWeight: '800' }}
        routeName="main"
      >
        Main
      </Link>

      <Link
        style={{
          marginLeft: 5,
          border: '1px solid #222',
          padding: 5,
        }}
        activeStyle={{ fontWeight: '800' }}
        routeName="parent"
      >
        Parent
      </Link>

      <Link
        style={{
          marginLeft: 5,
          border: '1px solid #222',
          padding: 5,
        }}
        activeStyle={{ fontWeight: '800' }}
        routeName="async"
      >
        Async
      </Link>
    </div>

    <div style={{ border: '1px solid black', padding: 5 }}>
      { childRoute }
    </div>
  </div>
);

App.propTypes = { childRoute: PropTypes.node };


export default connect(childRouteSelector())(App);
