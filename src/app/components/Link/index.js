import React from 'react';
import PropTypes from 'prop-types';
import { BaseLink, withRoute } from 'react-router5';
import { startsWithSegment } from 'router5-helpers';

const Link = ({ route, routeName, style = {}, activeStyle = {}, children }) => (
  <BaseLink
    routeName={routeName}
    style={
      startsWithSegment(route.name, routeName)
        ? { ...style, ...activeStyle }
        : style
    }
  >
    { children }
  </BaseLink>
);

Link.propTypes = {
  route: PropTypes.string,
  routeName: PropTypes.string.isRequired,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
  children: PropTypes.node,
};

export default withRoute(Link);
