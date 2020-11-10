import React from 'react';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';

import style from './PokedexPage.module.scss';

const PokedexPage = () => {
  return (
    <div className={style.root}>
      <Header />
      <PokemonCard
        key={1}
        titleName="Charmander"
        attackValue={52}
        defenseValue={43}
        img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        types={['grass', 'poison']}
      />
    </div>
  );
};

export default PokedexPage;
