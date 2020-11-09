import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import Pokedex from '../../pages/Pokedex';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/pokedex" component={Pokedex} />
      <Route render={() => <h1>404</h1>} />
    </BrowserRouter>
  );
};

export default App;
