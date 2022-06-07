import { lazy } from 'react';

import withSuspense from 'helpers/withSuspense';

const routes = [
  {
    path: '/',
    component: withSuspense(lazy(() => import('pages/home'))),
  },
  {
    path: '/secondPage',
    component: withSuspense(lazy(() => import('pages/secondPage'))),
  },
  {
    path: '/thirdPage',
    component: withSuspense(lazy(() => import('pages/thirdPage'))),
  },
  {
    path: '*',
    component: withSuspense(lazy(() => import('pages/notFound'))),
  },
];

export default routes;
