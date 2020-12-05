import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';

import style from './PokemonCard.module.scss';

interface PokemonCardProps {
  titleName: string;
  attackValue: number;
  defenseValue: number;
  img: string;
  types?: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ titleName, attackValue, defenseValue, img, types }) => {
  return (
    <div className={style.root}>
      <div className={style.infoWrap}>
        <Heading size="h3" className={style.titleName}>
          {toCapitalizeFirstLetter(titleName)}
        </Heading>
        <div className={style.statWrap}>
          <div className={style.statItem}>
            <div className={style.statValue}>{attackValue}</div>
            Attack
          </div>
          <div className={style.statItem}>
            <div className={style.statValue}>{defenseValue}</div>
            Defense
          </div>
        </div>
        <div className={style.labelWrap}>
          {types &&
            types.map((type: string) => (
              <span key={type} className={cn(style.label, style[type as keyof typeof style])}>
                {toCapitalizeFirstLetter(type)}
              </span>
            ))}
        </div>
      </div>
      <div className={style.pictureWrap}>
        <img src={img} alt={titleName} />
      </div>
    </div>
  );
};

export default PokemonCard;
