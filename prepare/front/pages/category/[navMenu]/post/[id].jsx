import React from 'react';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import content from '../../../../content/event.md';
import AppLayout from '../../../../components/AppLayout';

const listTitle = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <AppLayout>
      <div>Post: {id} </div>
      <ReactMarkdown children={content} />
    </AppLayout>
  );
};

export default listTitle;
