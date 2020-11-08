import React from 'react';
import HomePage from '../../pages/Home';
import Pokedex from '../../pages/Pokedex';

const App = () => {
  return (
    <>
      <HomePage />
      {false && <Pokedex />}
    </>
  );
};

export default App;
