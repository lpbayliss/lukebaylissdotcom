import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Flex, Card, Text, Link as Anchor } from 'rebass';

import BlogPostLayout from '../../layouts/blog-post';

// Posts
import { meta as bali } from './my-trip-to-bali.mdx';
import { meta as iceland } from './my-trip-to-iceland.mdx';

const slugify = (title: string): string => title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');

const posts = [bali, iceland];

type Props = {
  test: string;
};

const PostsPage: NextPage<Props> = props => {
  return (
    <BlogPostLayout>
      <Flex>
        {posts.map(post => (
          <Card key={post.title}>
            <Text>{post.title}</Text>
            {post.published && <Text>Published!</Text>}
            {post.published && <Text>{post.publishedAt}</Text>}
            <Text>{post.summary}</Text>
            <Link href={`posts/${slugify(post.title)}`}>
              <Anchor>View</Anchor>
            </Link>
          </Card>
        ))}
      </Flex>
      <Flex>{props.test}</Flex>
    </BlogPostLayout>
  );
};

export default PostsPage;
