import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';

import style from './PokemonCard.module.scss';

interface PokemonCardProps {
  titleName: string;
  attackValue: number;
  defenseValue: number;
  img: string;
  types?: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ titleName, attackValue, defenseValue, img, types }) => {
  const firstLetterUpper = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

  return (
    <div className={style.root}>
      <div className={style.infoWrap}>
        <Heading size="h3" className={style.titleName}>
          {titleName}
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
          {
            // @ts-ignore
            types &&
              types.map((type: string, i: number) => (
                <span key={type} className={cn(style.label, style[type])}>
                  {firstLetterUpper(type)}
                </span>
              ))
          }
        </div>
      </div>
      <div className={style.pictureWrap}>
        <img src={img} alt={titleName} />
      </div>
    </div>
  );
};

export default PokemonCard;
