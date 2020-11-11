import React from 'react';
import cn from 'classnames';

import style from './Heading.module.scss';

type Sizes = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  size: Sizes;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, size, className = '' }) => (
  <div className={cn(style.root, style[size], className)}>{children}</div>
);

export default Heading;
