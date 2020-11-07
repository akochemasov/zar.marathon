import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Common/Button';
import Parallax from '../../components/Parrallax';

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
      <Parallax />
    </div>
  );
};

export default Home;
