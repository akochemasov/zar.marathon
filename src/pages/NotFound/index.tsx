import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Common/Button';
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
  return (
    <div>
      404
      <Button onClick={() => navigate(LinkEnum.HOME)} size="big" color="green">
        Return
      </Button>
    </div>
  );
};

export default NotFoundPage;
