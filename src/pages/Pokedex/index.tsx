import React from 'react';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';

import style from './PokedexPage.module.scss';

import POKEMONS from './pokemons';

const PokedexPage = () => {
  return (
    <div className={style.root}>
      <Header />

      <div>
        {POKEMONS.map((item) => (
          <PokemonCard
            key={item.id}
            titleName={item.name}
            attackValue={item.stats.attack}
            defenseValue={item.stats.attack}
            img={item.img}
            types={item.types}
          />
        ))}
      </div>
    </div>
  );
};

export default PokedexPage;
