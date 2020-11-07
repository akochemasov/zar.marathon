import React from 'react';

import style from './Button.module.scss';

const Button: React.FC = ({ children }) => {
  return (
    <button type="button" className={style.root}>
      {children}
    </button>
  );
};

export default Button;
