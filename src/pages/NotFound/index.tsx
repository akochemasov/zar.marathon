import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Common/Button';

const NotFoundPage = () => {
  return (
    <div>
      404
      <Button onClick={() => navigate('/')} size="big" color="green">
        Return
      </Button>
    </div>
  );
};

export default NotFoundPage;
