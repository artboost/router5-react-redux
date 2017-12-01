import logger from 'redux-logger';

export function createMiddleware() {
  const middleware = [];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
  }
  return middleware;
}
