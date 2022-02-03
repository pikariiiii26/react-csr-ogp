import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Service = React.lazy(() => import('../pages/Service'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/about', exact: true, name: 'About', component: About },
    { path: '/service', exact: true, name: 'Service', component: Service },
]

export default routes;
