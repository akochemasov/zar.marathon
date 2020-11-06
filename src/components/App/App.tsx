import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import style from './App.module.scss';

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
