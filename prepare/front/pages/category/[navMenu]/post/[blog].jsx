import React from 'react';
import matter from 'gray-matter';
import AppLayout from '../../../../components/AppLayout';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ language, markdown }) => {
  return (
    <SyntaxHighlighter style={tomorrow} wrapLines={true} showLineNumbers={true} language={language}>
      {markdown}
    </SyntaxHighlighter>
  );
};

const Blog = ({ content, data }) => {
  const frontmatter = data;
  return (
    <AppLayout frontmatter={frontmatter}>
      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.description}</h3>
      <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]} children={content} components={{ code: CodeBlock }} />
    </AppLayout>
  );
};

export default Blog;

Blog.getInitialProps = async (context) => {
  const { blog } = context.query;

  const content = await import(`../../../../content/${blog}.md`);

  const data = matter(content.default);

  return { ...data };
};
