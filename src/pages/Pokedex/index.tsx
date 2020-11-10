import React from 'react';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';

import style from './PokedexPage.module.scss';

const PokedexPage = () => {
  return (
    <div className={style.root}>
      <Header />
      <PokemonCard />
    </div>
  );
};

export default PokedexPage;
