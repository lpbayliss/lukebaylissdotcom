import * as React from 'react';
import { NextPage } from 'next';
import { Flex } from 'rebass';
import DefaultLayout from '../../layouts/default';

// Posts
import { meta as bali } from './my-trip-to-bali.mdx';
import { meta as iceland } from './my-trip-to-iceland.mdx';
import { PostCard } from '../../components/post-card';
const posts = [bali, iceland];

const slugify = (title: string): string => title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');

type Props = { test: string };
const PostsPage: NextPage<Props> = props => {
  return (
    <DefaultLayout>
      <Flex flexDirection="row" flexWrap="wrap" width="150%" marginLeft="-25%">
        {posts.map(post => (
          <PostCard key={post.title} title={post.title} summary={post.summary} slug={`posts/${slugify(post.title)}`} />
        ))}
      </Flex>
      <Flex>{props.test}</Flex>
    </DefaultLayout>
  );
};

export default PostsPage;
