import React, { useState } from 'react';
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

interface IQuery {
  limit: number;
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  /* todo: закомментировал, чтобы не терять фокус в input */
  // if (isLoading) {
  //   return <div className={style.loading}>Loading...</div>;
  // }

  if (isError) {
    return <div className={style.error}>Something wrong!</div>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((data) => ({
      ...data,
      name: e.target.value,
    }));
  };

  return (
    <Layout className={style.root}>
      <Heading size="h2" className={style.title}>
        {/* @ts-ignore */}
        {!isLoading && data.total} <b>Pokemons</b> for you choose your favorite
      </Heading>
      <div>
        <input
          className={style.input}
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Encuentra tu pokémon..."
        />
      </div>
      <>
        {/* @ts-ignore */}
        {!isLoading &&
          data.pokemons.map((item: IPokemon) => (
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
