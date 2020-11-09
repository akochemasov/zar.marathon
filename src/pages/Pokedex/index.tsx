import React from 'react';
import Header from '../../components/Header';

import style from './Pokedex.module.scss';

const Pokedex = () => {
  return (
    <div className={style.root}>
      <Header />
    </div>
  );
};

export default Pokedex;
