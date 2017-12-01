/* eslint-disable no-restricted-syntax */
import { startsWithSegment } from 'router5-helpers';
import { transitionPath } from 'router5';

import allRoutes from './routes';

export function getActivatedRoutes(routes, toState, fromState) {
  const { toActivate } = transitionPath(toState, fromState);
  return toActivate.map(segment => getRoute(segment, routes));
}

// Recursively traverse routes, until route matching segment is found.
// Throws error if none is found.
export const getRoute = (segment, routes) => {
  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i];
    if (route.name === segment) {
      return route;
    }

    // Segment is child route of current route.
    if (startsWithSegment(segment, route.name) && route.children) {
      const splitSegment = segment.split('.');
      splitSegment.shift();
      if (splitSegment.length > 0) {
        return getRoute(splitSegment.join('.'), route.children);
      }
    }
  }
  throw new Error('route not found');
};

/**
 * Using getRoute, finds component of route.
 * Supplying a route name will find a child route of node with given name.
 * E.g.:
 * getComponent(admin, '') => admin
 * getComponent(admin.crowdfunding, admin) => crowdfunding
 * getComponent(admin.crowdfunding.prospects, admin.crowdfunding) => prospects
 * @param name Current route name, childroutes separated with dots (e.g. admin.crowdfunding)
 * @param nodeName The node from which to select from. If set, will find child route of node with name.
 * @returns Component (if exists), otherwise null.
 */
export function getComponent(name, nodeName = '') {
  const segments = name.split('.'); // Break route in segments (levels)
  const nodeSegments = nodeName.split('.');

  const depth = nodeName === ''
    ? 1
    : nodeSegments.length + 1;

  const segment = segments.slice(0, depth).join('.');
  const route = getRoute(segment, allRoutes);
  return route.component || null;
}
