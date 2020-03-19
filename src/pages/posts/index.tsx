import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Flex, Card, Text } from 'rebass';

import DefaultLayout from '../../layouts/default';
import { posts } from '../../utils/post-mapping';

const PostsPage: NextPage = () => {
  return (
    <DefaultLayout>
      <Flex>
        {posts.map(post => (
          <Card key={post.title}>
            <Text>{post.title}</Text>
            <Link href={`posts/${post.slug}`} prefetch>
              View
            </Link>
          </Card>
        ))}
      </Flex>
    </DefaultLayout>
  );
};

export default PostsPage;
