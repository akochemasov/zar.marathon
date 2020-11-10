import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';

import style from './PokemonCard.module.scss';

const PokemonCard = () => {
  return (
    <div className={style.root}>
      <div className={style.infoWrap}>
        <Heading size="h3" className={style.titleName}>
          Charmander
        </Heading>
        <div className={style.statWrap}>
          <div className={style.statItem}>
            <div className={style.statValue}>52</div>
            Attack
          </div>
          <div className={style.statItem}>
            <div className={style.statValue}>43</div>
            Defense
          </div>
        </div>
        <div className={style.labelWrap}>
          <span className={cn(style.label, style.grass)}>Grass</span>
          <span className={cn(style.label, style.fire)}>Fire</span>
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
