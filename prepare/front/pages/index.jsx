import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';

const Home = () => {
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      <h1 style={{ borderBottom: '1px solid #000' }}>전체 ({mainPosts.length})</h1>
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
