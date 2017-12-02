import { router5Middleware } from 'redux-router5';
import logger from 'redux-logger';

export function createMiddleware(router) {
  const middleware = [
    router5Middleware(router),
  ];

  // Use logger in dev, client-side
  if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    middleware.push(logger);
  }
  return middleware;
}
