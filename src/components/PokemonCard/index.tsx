import React from 'react';
import Heading from '../Heading';

import style from './PokemonCard.module.scss';

const PokemonCard = () => {
  return (
    <div className={style.root}>
      <div className={style.infoWrap}>
        <Heading size="h2" className={style.titleName}>
          Charmander
        </Heading>
        <div className={style.statWrap}>
          <div className={style.statItem}>
            <div className={style.statValue}>52 sdfsfs</div>
            Attack
          </div>
          <div className={style.statItem}>
            <div className={style.statValue}>43</div>
            Defense
          </div>
        </div>
        <div className={style.labelWrap}>
          <span className={style.label}>Fire</span>
        </div>
      </div>
      <div className={style.pictureWrap}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="Charmander"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
