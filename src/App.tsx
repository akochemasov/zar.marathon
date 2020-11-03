import React from 'react';
import cn from 'classnames';

import style from './App.modules.scss';

const App = () => {
  return (
    // @ts-ignore
    <div className={cn(style.header, ' color')}>This is App Component</div>
  );
};

export default App;
