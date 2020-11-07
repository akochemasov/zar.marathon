import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Common/Button';
import Parallax from '../../components/Parrallax';
import Layout from '../../components/Layout';

import style from './Home.module.scss';

const Home = () => {
  return (
    <div className={style.root}>
      <Header />
      <Layout className={style.contentWrap}>
        <div className={style.contentText}>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button
            onClick={() => {
              alert('click');
            }}>
            See pokemons
          </Button>
        </div>
        <div className={style.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
