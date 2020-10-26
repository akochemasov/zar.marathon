import React from 'react';

import './custom.css';
import style from './App.modules.scss';

const App = () => {
  return (
    <div className={style.header + ' color'} >
      This is App Component
    </div>
  )
}

export default App;