import React, { useEffect, useState } from 'react';
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

const usePokemons = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemos = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const data = await response.json();

        setTotalPokemons(data.total);
        setPokemons(data.pokemons);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemos();
  }, []);

  return {
    totalPokemons,
    pokemons,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { totalPokemons, pokemons, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div className={style.loading}>Loading...</div>;
  }

  if (isError) {
    return <div className={style.error}>Something wrong!</div>;
  }

  return (
    <Layout className={style.root}>
      <Heading size="h2" className={style.title}>
        {totalPokemons} <b>Pokemons</b> for you choose your favorite
      </Heading>
      <>
        {pokemons.map((item: IPokemon) => (
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
