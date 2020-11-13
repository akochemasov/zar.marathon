import React from 'react';
import PokemonCard from '../../components/PokemonCard';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';

import style from './PokedexPage.module.scss';

import POKEMONS from './pokemons';

const PokedexPage = () => {
  return (
    <Layout className={style.root}>
      <Heading size="h2" className={style.title}>
        {0} <b>Pokemons</b> for you choose your favorite
      </Heading>
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
    </Layout>
  );
};

export default PokedexPage;
