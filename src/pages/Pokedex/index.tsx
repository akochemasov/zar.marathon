import React, { useState } from 'react';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import PokemonCard from '../../components/PokemonCard';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';

import style from './PokedexPage.module.scss';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';

interface IQuery {
  limit: number;
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });
  const debouncedValue = useDebounce(searchValue, 1000);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  /* todo: закомментировал, чтобы не терять фокус в input */
  // if (isLoading) {
  //   return <div className={style.loading}>Loading...</div>;
  // }

  if (isError) {
    return <div className={style.error}>Something wrong!</div>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((data: IQuery) => ({
      ...data,
      name: e.target.value,
    }));
  };

  return (
    <Layout className={style.root}>
      <Heading size="h2" className={style.title}>
        {!isLoading && data && data.total} <b>Pokemons</b> for you choose your favorite
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
        {!isLoading &&
          data &&
          data.pokemons.map((item: PokemonsRequest) => (
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
