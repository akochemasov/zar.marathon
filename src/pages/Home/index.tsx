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
      <Layout>
        <div>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button
            onClick={() => {
              alert('click');
            }}>
            See pokemons
          </Button>
        </div>
      </Layout>
      <div>
        <Parallax />
      </div>
    </div>
  );
};

export default Home;
