import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import AppLayout from '../../components/AppLayout';
import gfm from 'remark-gfm';
import getAllPosts from '../../lib/data';

const Blog = ({ title, content }) => {
  const source = content.replace(/\r\n/gi, '\n &nbsp;');
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{title} | MolyMath</title>
      </Head>
      <AppLayout>
        <ReactMarkdown
          components={{
            source,
            p: ({ node, children }) => {
              if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                console.log(node, children);
                return (
                  <div className="image">
                    <Image
                      src={`/images/${image.properties.src}`}
                      alt={image.properties.alt}
                      width="600"
                      height="300"
                    />
                  </div>
                );
              }
              // Return default child if it's not an image
              return <p>{typeof children === 'string' ? children.replace(/\n/g, '  \n') : children}</p>;
            },
            code({ className, children }) {
              const language = className.replace('language-', '');
              return <SyntaxHighlighter style={materialDark} language={language} children={children[0]} />;
            },
          }}
          remarkPlugins={[gfm]}
        >
          {content}
        </ReactMarkdown>
      </AppLayout>
    </>
  );
};

export default Blog;

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  return {
    props: {
      ...data,
      date: data.date,
      content,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

Blog.propTypes = {
  content: PropTypes.string.isRequired,
};
