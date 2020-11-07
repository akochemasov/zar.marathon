import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/common/Button';

import style from './Home.module.scss';

const Home = () => {
  return (
    <div className={style.root}>
      <Header />
      <Button
        onClick={() => {
          alert('click');
        }}>
        See pokemons
      </Button>
    </div>
  );
};

export default Home;
