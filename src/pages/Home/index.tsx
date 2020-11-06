import React from 'react';
import Header from '../../components/Header';

import style from './Home.module.scss';

const Home = () => {
  return (
    <div className={style.root}>
      <Header />
    </div>
  );
};

export default Home;
