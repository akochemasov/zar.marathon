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

const PokedexPage = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('http://zar.hosthot.ru/api/v1/pokemons')
      .then((res) => res.json())
      .then((data) => {
        setTotalPokemons(data.total);
        setPokemons(data.pokemons);
      });
  }, []);

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
