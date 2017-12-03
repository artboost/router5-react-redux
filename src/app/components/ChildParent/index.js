import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Link from '../../components/Link';

import childRouteSelector from '../../redux/selectors/childRoute';

const ChildParent = ({ childRoute }) => (
  <div>
    This component has one child.

    <div>
      {
        childRoute
        ||
        <Link routeName="parent.childParent.grandChild">
          Click here to navigate to it.
        </Link>
      }
    </div>
  </div>
);

ChildParent.propTypes = { childRoute: PropTypes.node };

export default connect(childRouteSelector('parent.childParent'))(ChildParent);
