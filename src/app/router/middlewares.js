import { startLoading, stopLoading } from '../redux/reducers/loading/actions';
/* eslint-disable no-restricted-syntax */
import { getActivatedRoutes } from './utils';

const asyncComponentLoader = routes => () => (toState, fromState) => {
  const onActivateHandlers =
    getActivatedRoutes(routes, toState, fromState)
      .filter(route => !route.component)
      .map(route => new Promise((resolve, reject) => {
        route.loadComponent()
          .then(component => Object.assign(route, { component: component.default }))
          .then(resolve)
          .catch(reject);
      }));
  return Promise.all(onActivateHandlers);
};

const asyncDataLoader = routes => (router, dependencies) => (toState, fromState) => {
  const prefetches =
    getActivatedRoutes(routes, toState, fromState)
      .filter(route => (!!route && !!route.prefetch))
      .map(route => route.prefetch(toState, dependencies.store));

  dependencies.store.dispatch(startLoading());
  return Promise
    .all(prefetches)
    .then((data) => {
      const routeData = data.reduce((acc, rData) => ({ ...acc, ...rData }), toState.data || {});
      dependencies.store.dispatch(stopLoading());
      return { ...toState, data: routeData };
    });
};

const statusCodeDecorator = routes => () => (toState, fromState) => {
  const status =
    getActivatedRoutes(routes, toState, fromState)
      .reduce((s, route) => route.status || s, 200);
  return Promise.resolve({ ...toState, status });
};

export { asyncComponentLoader, asyncDataLoader, statusCodeDecorator };
