import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AppLayout from '../../../components/AppLayout';
import getAllPosts from '../../../lib/data';
import PostCard from '../../../components/PostCard';

const isCategory = ({ posts }) => {
  const router = useRouter();
  const { navMenu } = router.query;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{posts.title}</title>
      </Head>
      <AppLayout>
        {posts.map((post) => navMenu === post.category && <PostCard key={post.title} post={post} {...post} />)}
      </AppLayout>
    </>
  );
};

export default isCategory;

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

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        navMenu: post.data.category,
      },
    })),
    fallback: false,
  };
}

isCategory.propTypes = {
  posts: PropTypes.array.isRequired,
};
