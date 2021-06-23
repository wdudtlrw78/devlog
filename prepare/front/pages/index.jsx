import React from 'react';
import Head from 'next/head';
import matter from 'gray-matter';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';

const Home = ({ data, title }) => {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((ListItem) => ListItem.data);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Head>
      <AppLayout>
        <h1 style={{ borderBottom: '1px solid #000' }}>전체 ({data.length})</h1>
        {ListItems.map((blog) => (
          <PostCard key={blog.id} blog={blog} />
        ))}
      </AppLayout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const siteData = await import('../config.json');
  const fs = require('fs');

  const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8');

  const blogs = files.filter((fn) => fn.endsWith('.md'));

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8',
    });

    return rawContent;
  });

  return {
    props: {
      data,
      title: siteData.default.title,
    },
  };
}
