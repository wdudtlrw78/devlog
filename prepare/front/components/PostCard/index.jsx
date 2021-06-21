import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { Card, MetaContainer, Date, CategoryBox, AarticleContainer, Title, Description } from './styles';

dayjs.locale('ko');
dayjs.extend(relativeTime);

const PostCard = ({ post }) => {
  const router = useRouter();
  const isRootHome = router.pathname === '/';
  const { navMenu } = router.query;

  return (
    <Card>
      {isRootHome || navMenu === post.category ? (
        <MetaContainer>
          <Date>{dayjs(post.createdAt).fromNow()}</Date>
          <CategoryBox>
            <span>{post.category}</span>
          </CategoryBox>

          <Link href={`/category/${post.category}/post/[id]`} as={`/category/${post.category}/post/2`}>
            <a>
              <AarticleContainer>
                <Title>{post.header}</Title>
                <Description>{post.description}</Description>
              </AarticleContainer>
            </a>
          </Link>
        </MetaContainer>
      ) : null}
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    header: PropTypes.string,
    body: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.objectOf),
  }).isRequired,
};

export default PostCard;
