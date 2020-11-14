import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Common/Button';
import Parallax from '../../components/Parrallax';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import { LinkEnum } from '../../routes';

import style from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={style.root}>
      <Layout className={style.contentWrap}>
        <div className={style.contentText}>
          <Heading size="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button
            onClick={() => {
              navigate(LinkEnum.POKEDEX);
            }}
            size="big"
            color="green">
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

export default HomePage;
