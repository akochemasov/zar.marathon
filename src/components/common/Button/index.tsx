import React from 'react';

import style from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" className={style.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
