import React from 'react';
import Header from '../../components/Header';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <>
      <Header />
      <div>This is empty page for {title}</div>
    </>
  );
};

export default EmptyPage;
