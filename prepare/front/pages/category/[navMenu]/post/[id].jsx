import React from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../../../components/AppLayout';

const listTitle = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <AppLayout>
      <div>Post: {id} </div>
    </AppLayout>
  );
};

export default listTitle;
