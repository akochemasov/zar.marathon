import React from 'react';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Empty from './pages/Empty';

const MENU = [
  {
    title: 'Home',
    link: '/',
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <Empty title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <Empty title="Documentation" />,
  },
];

const routes = MENU.reduce((acc, item) => {
  // @ts-ignore
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
