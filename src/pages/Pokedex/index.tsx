import React from 'react';
import PokemonCard from '../../components/PokemonCard';

import style from './PokedexPage.module.scss';

import POKEMONS from './pokemons';

const PokedexPage = () => {
  return (
    <div className={style.root}>
      <>
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
      </>
    </div>
  );
};

export default PokedexPage;
