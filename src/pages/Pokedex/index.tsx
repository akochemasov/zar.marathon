import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import req from '../../utils/request';

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

interface IData {
  total: number;
  pokemons: [];
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemos = async () => {
      setIsLoading(true);

      try {
        const result = await req('getPokemons');

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemos();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div className={style.loading}>Loading...</div>;
  }

  if (isError) {
    return <div className={style.error}>Something wrong!</div>;
  }

  return (
    <Layout className={style.root}>
      <Heading size="h2" className={style.title}>
        {data.total} <b>Pokemons</b> for you choose your favorite
      </Heading>
      <>
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
