import React from 'react';
import { A } from 'hookrouter';
import { ReactComponent as Logo } from './assets/Logo.svg';

import style from './Header.module.scss';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: 'pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: 'legendaries',
  },
  {
    id: 4,
    value: 'Documentation',
    link: 'documentation',
  },
];

function Header() {
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.menuWrap}>
          {MENU.map(({ link, value, id }) => (
            <A href={link} key={id} className={style.menuLink}>
              {value}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
