import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import { GENERAL_MENU } from '../../routes';
import { ReactComponent as Logo } from './assets/Logo.svg';

import style from './Header.module.scss';

function Header() {
  const path = usePath();

  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.menuWrap}>
          {GENERAL_MENU.map(({ link, title }) => (
            <A
              href={link}
              key={title}
              className={cn(style.menuLink, {
                [style.activeLink]: link === path,
              })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
