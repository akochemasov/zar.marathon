import React from 'react';
import cn from 'classnames';

import style from './Heading.module.scss';

type Types = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  type: Types;
}

const Heading: React.FC<HeadingProps> = ({ children, type }) => (
  <div className={cn(style.root, style[type])}>{children}</div>
);

export default Heading;
