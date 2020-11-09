import React from 'react';
import Header from '../../components/Header';

interface EmptyProps {
  title?: string;
}

const Empty: React.FC<EmptyProps> = ({ title }) => {
  return (
    <>
      <Header />
      <div>This is empty page for {title}</div>
    </>
  );
};

export default Empty;
