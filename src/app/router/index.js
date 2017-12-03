import createRouter from 'router5';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';

import { asyncComponentLoader, asyncDataLoader, statusCodeDecorator } from './middlewares';

import routes from './routes';

export function configureRouter() {
  const router = createRouter(routes, {
    defaultRoute: '404',
    trailingSlash: true,
    strictQueryParams: true,
  }).usePlugin(browserPlugin({ useHash: false }))
    .usePlugin(listenersPlugin());

  router.useMiddleware(statusCodeDecorator(routes));
  router.useMiddleware(asyncComponentLoader(routes));
  router.useMiddleware(asyncDataLoader(routes));
  return router;
}

export function startRouter(router, initialRoute) {
  return asyncComponentLoader(routes)()(initialRoute).then(() => router.start(initialRoute));
}
