/* eslint-disable no-undef,global-require */
export default [
  {
    path: '/',
    name: 'main',
    loadComponent: () => System.import('../containers/Main'),
  },
  {
    path: '/parent',
    name: 'parent',
    loadComponent: () => System.import('../containers/Parent'),
    children: [
      {
        path: '/child',
        name: 'child',
        loadComponent: () => System.import('../components/Child'),
      },
      {
        path: '/childParent',
        name: 'childParent',
        loadComponent: () => System.import('../components/ChildParent'),
        children: [
          {
            path: '/child',
            name: 'grandChild',
            loadComponent: () => System.import('../components/Grandchild'),
          },
        ],
      },
    ],
  },
  {
    path: '/async?base',
    name: 'async',
    prefetch: require('../containers/Async/prefetch'),
    loadComponent: () => System.import('../containers/Async'),
  },
  {
    path: '/404',
    name: '404',
    status: 404,
    loadComponent: () => System.import('../containers/NotFound'),
  },
];
