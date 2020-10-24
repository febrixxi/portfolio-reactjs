import {
  Sidebar,
  Intro,
  About,
  Skills,
  Education,
  Contact,
  Footer,
} from '../pages';

const routes = [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/skills',
    component: Skills,
  },
  {
    path: '/education',
    component: Education,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/footer',
    component: Footer,
  },
  {
    path: '/sidebar',
    component: Sidebar,
  },
  {
    path: '/',
    component: Intro,
  },
];

export default routes;
