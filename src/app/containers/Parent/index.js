import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Link from '../../components/Link';

import childRouteSelector from '../../redux/selectors/childRoute';

const Parent = ({ childRoute }) => (
  <div>
    <h1>Parent</h1>
    <em>This component has child routes.</em>

    <div
      style={{
        margin: 5,
        paddingBottom: 8,
        borderBottom: '4px solid #555',
      }}
    >
      <Link
        style={{
          border: '1px solid #222',
          padding: 5,
        }}
        activeStyle={{ fontWeight: '800' }}
        routeName="parent.child"
      >
        Child
      </Link>

      <Link
        style={{
          marginLeft: 5,
          border: '1px solid #222',
          padding: 5,
        }}
        activeStyle={{ fontWeight: '800' }}
        routeName="parent.childParent"
      >
        Child with parent
      </Link>
    </div>

    <div style={{ padding: 5 }}>
      { childRoute || <span>This is the default component.</span> }
    </div>

    {
      childRoute
      &&
      <div style={{ padding: 5 }}>
        <Link routeName="parent">
          <em>Back to Parent</em>
        </Link>
      </div>
    }
  </div>
);
Parent.propTypes = { childRoute: PropTypes.node };

export default connect(childRouteSelector('parent'))(Parent);
