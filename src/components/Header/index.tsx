import React from 'react';
import { A } from 'hookrouter';
import { GENERAL_MENU } from '../../routes';
import { ReactComponent as Logo } from './assets/Logo.svg';

import style from './Header.module.scss';

function Header() {
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.menuWrap}>
          {GENERAL_MENU.map(({ link, title }) => (
            <A href={link} key={title} className={style.menuLink}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
