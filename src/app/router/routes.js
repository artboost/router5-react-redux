import Main from '../containers/Main';
import Parent from '../containers/Parent';
import Child from '../components/Child';
import ChildParent from '../components/ChildParent';
import Grandchild from '../components/Grandchild';

export default [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/parent',
    name: 'parent',
    component: Parent,
    children: [
      {
        path: '/child',
        name: 'child',
        component: Child,
      },
      {
        path: '/childParent',
        name: 'childParent',
        component: ChildParent,
        children: [
          {
            path: '/child',
            name: 'grandChild',
            component: Grandchild,
          },
        ],
      },
    ],
  },
];
