import React from 'react';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

const routes = {
  '/': () => <Home />,
  '/home': () => <Home />,
  '/pokedex': () => <Pokedex />,
};

export default routes;
