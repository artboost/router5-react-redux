import { router5Middleware } from 'redux-router5';
import logger from 'redux-logger';

export function createMiddleware(router) {
  const middleware = [
    router5Middleware(router),
  ];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
  }
  return middleware;
}
