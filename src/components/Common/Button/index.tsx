import React from 'react';
import cn from 'classnames';

import style from './Button.module.scss';

type Sizes = 'big' | 'small' | 'width';
type Colors = 'green' | 'yellow';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size: Sizes;
  color: Colors;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, size = 'big', color = 'green' }) => {
  return (
    <button type="button" className={cn(style.root, style[size], style[color])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
