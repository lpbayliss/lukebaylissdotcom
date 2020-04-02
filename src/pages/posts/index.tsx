import * as React from 'react';
import { NextPage } from 'next';
import { Flex, Heading, Box, Text, TextProps } from 'rebass';
import DefaultLayout from '../../layouts/default';

// Posts
import { meta as bali } from './my-trip-to-bali.mdx';
import { meta as iceland } from './my-trip-to-iceland.mdx';
import { H2, H3 } from '../../components/markdown';
import Link from 'next/link';
import styled from '../../utils/styled';

const posts = [bali, iceland];
const slugify = (title: string): string => title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');

const ContentText: React.FunctionComponent<TextProps> = props => (
  <Text marginBottom="4" lineHeight="1.8" fontFamily="heading" {...props} />
);

type PostcardProps = {
  title: string;
  summary: string;
  slug: string;
};
const CardShadow = styled(Flex)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  border-radius: 5px;
`;
const Postcard: React.FunctionComponent<PostcardProps> = props => (
  <Link href={props.slug}>
    <CardShadow
      flexDirection="column"
      bg="background"
      width={['calc(100% - 8px)', 'calc(50% - 16px)', 'calc(33.3% - 16px)']}
      margin={[1, 2]}
      padding={3}
    >
      <Heading>{props.title}</Heading>
      <ContentText>{props.summary}</ContentText>
      <Text fontFamily="heading" textAlign="right" marginTop="auto">
        Click to read more...
      </Text>
    </CardShadow>
  </Link>
);

type ShelfProps = { heading?: string; prologue?: string; children: React.ReactNode };
const Shelf: React.FunctionComponent<ShelfProps> = ({ heading, prologue, children }) => (
  <>
    {heading && <H3>{heading}</H3>}
    {prologue && <ContentText>{prologue}</ContentText>}
    <Box width={['100%', '120%', '180%']} marginLeft={['0', '-10%', '-40%']} marginBottom="4">
      <Flex flexDirection="row" flexWrap="wrap">
        {children}
      </Flex>
    </Box>
  </>
);

type Props = { test: string };
const PostsPage: NextPage<Props> = () => {
  return (
    <DefaultLayout>
      <H2>My Thoughts and Opinions...</H2>
      <ContentText>
        A somewhat organised collection of my ramblings, thoughts, and ideas that I suddenly had the urge to put down
        onto paper. Mostly about technology and my adventures as a software engineer, but may spread into other avenues
        of my life and hobbies.
      </ContentText>

      <Shelf
        heading="Travel"
        prologue="Stories from my travels far and wide. From towering buildings of New York City, to the red blistering deserts of the Australian outback."
      >
        {posts.map(post => (
          <Postcard key={post.title} title={post.title} summary={post.summary} slug={`posts/${slugify(post.title)}`} />
        ))}
      </Shelf>
      <Shelf
        heading="Voice Assistant"
        prologue="My experiences and insights into working on applications and systems in the world of smart home devices and voice assistants."
      >
        {posts.map(post => (
          <Postcard key={post.title} title={post.title} summary={post.summary} slug={`posts/${slugify(post.title)}`} />
        ))}
      </Shelf>
      <Shelf
        heading="Being The Best Engineer Possible"
        prologue="Insights, thoughts, and ramblings about my day to day life as an engineer and the lessons I've learned along the way."
      >
        {posts.map(post => (
          <Postcard key={post.title} title={post.title} summary={post.summary} slug={`posts/${slugify(post.title)}`} />
        ))}
      </Shelf>
    </DefaultLayout>
  );
};

export default PostsPage;
