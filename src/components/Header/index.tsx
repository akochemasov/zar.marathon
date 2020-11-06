import React from 'react';

import style from './Header.module.scss';

function Header() {
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.logo} />
        <div className={style.menuWrap}>
          <a href="#" className={style.menuLink}>
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
