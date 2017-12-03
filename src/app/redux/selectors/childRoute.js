import React from 'react';
import { createSelector } from 'reselect';
import { routeNodeSelector } from 'redux-router5';
import { getComponent } from '../../router/utils';

const defaultComponent = () => <h1 style={{ color: '#f00' }}>COMPONENT NOT LOADED</h1>;

const getChildRoute = (route, routeNode) => {
  if (route.name === routeNode) {
    return null;
  }
  const component = getComponent(route.name, routeNode) || defaultComponent;
  return React.createElement(component, { route });
};

const childRouteSelector = (routeNodeName = '') => createSelector(
  routeNodeSelector(routeNodeName),
  ({ route, previousRoute }) => ({
    route,
    previousRoute,
    childRoute: getChildRoute(route, routeNodeName),
  })
);

export default childRouteSelector;
