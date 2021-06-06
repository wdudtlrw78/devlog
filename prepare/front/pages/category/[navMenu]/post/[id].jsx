import React from 'react';
import { useRouter } from 'next/router';

const listTitle = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <div>Post: {id} </div>
    </div>
  );
};

export default listTitle;
