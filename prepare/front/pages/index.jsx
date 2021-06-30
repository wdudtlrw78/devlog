import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import getAllPosts from '../lib/data';

export const ListSectionTitle = styled.h1`
  margin-bottom: 56px;
  padding-bottom: 36px;
  text-align: center;
  font-size: 48px;
  color: #777;
  border-bottom: 1px solid #c0c0c0;
`;

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>MolyMath</title>
      </Head>
      <AppLayout posts={posts}>
        <ListSectionTitle>전체 ({posts.length})</ListSectionTitle>
        {posts.map((post) => (
          <PostCard key={post.title} post={post} {...post} />
        ))}
      </AppLayout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date,
        content,
        slug,
      })),
    },
  };
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};
