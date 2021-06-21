import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import AppLayout from '../../../components/AppLayout';
import PostCard from '../../../components/PostCard';

const Page = () => {
  const router = useRouter();
  const { navMenu } = router.query;
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      <div>Post: {navMenu} </div>
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Page;
