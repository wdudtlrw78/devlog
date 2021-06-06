import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppLayout from '../../../components/AppLayout';

const Page = () => {
  const router = useRouter();
  const { navMenu } = router.query;
  return (
    <AppLayout>
      <div>Post: {navMenu} </div>
      <Link href={`/category/${navMenu}/post/[id]`} as={`/category/${navMenu}/post/1`}>
        <a>HTML 이란</a>
      </Link>
    </AppLayout>
  );
};

export default Page;
