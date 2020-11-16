import React from 'react';
import useData from '../../hook/getData';
import PokemonCard from '../../components/PokemonCard';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';

import style from './PokedexPage.module.scss';

type Stats = {
  attack: number;
};

interface IPokemon {
  id: number;
  name: string;
  stats: Stats;
  img: string;
  types: string[];
}

const PokedexPage = () => {
  const { data, isLoading, isError } = useData('getPokemons');

  if (isLoading) {
    return <div className={style.loading}>Loading...</div>;
  }

  if (isError) {
    return <div className={style.error}>Something wrong!</div>;
  }

  return (
    <Layout className={style.root}>
      <Heading size="h2" className={style.title}>
        {/* @ts-ignore */}
        {data.total} <b>Pokemons</b> for you choose your favorite
      </Heading>
      <>
        {/* @ts-ignore */}
        {data.pokemons.map((item: IPokemon) => (
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
