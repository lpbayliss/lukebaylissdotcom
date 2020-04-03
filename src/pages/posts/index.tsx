import * as React from 'react';
import { NextPage } from 'next';
import { Flex, Heading, Box, Text, TextProps } from 'rebass';
import DefaultLayout from '../../layouts/default';
import { H2, H3 } from '../../components/markdown';
import Link from 'next/link';
import styled from '../../utils/styled';

// Posts
import { Meta } from '../../types/meta.type';
import { meta as tipsForStartingANewJob } from './developer-life/my-tips-for-starting-at-a-new-job.mdx';
import { meta as howAndWhyIUseTailwindWithEmotion } from './developer-life/how-and-why-i-use-emotion-with-tailwind.mdx';

/**
 * Content
 */
type Topic = { heading: string; slug: string; prologue: string; posts: Meta[] };
const topics: Topic[] = [
  {
    heading: 'Developer Life',
    slug: 'developer-life',
    prologue:
      "Insights, thoughts, and ramblings about my day to day life as an engineer and the lessons I've learned along the way.",
    posts: [tipsForStartingANewJob, howAndWhyIUseTailwindWithEmotion],
  },
];

/**
 * Utils
 */
const slugify = (title: string): string => title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
const ContentText: React.FunctionComponent<TextProps> = props => (
  <Text marginBottom="4" lineHeight="1.8" fontFamily="heading" {...props} />
);

/**
 * Post Card
 */
type PostcardProps = { title: string; summary: string; slug: string };
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

/**
 * Shelf
 */
type ShelfProps = { category?: string; summary?: string; children: React.ReactNode };
const Shelf: React.FunctionComponent<ShelfProps> = ({ category, summary, children }) => (
  <>
    {category && <H3>{category}</H3>}
    {summary && <ContentText>{summary}</ContentText>}
    <Box width={['100%', '120%', '180%']} marginLeft={['0', '-10%', '-40%']} marginBottom="4">
      <Flex flexDirection="row" flexWrap="wrap">
        {children}
      </Flex>
    </Box>
  </>
);

/**
 * Page
 */
type Props = {};
const PostsPage: NextPage<Props> = () => {
  return (
    <DefaultLayout title="Luke Bayliss | My Ramblings">
      <H2>My Thoughts and Opinions...</H2>
      <ContentText>
        A somewhat organised collection of my ramblings, thoughts, and ideas that I suddenly had the urge to put down
        onto paper. Mostly about technology and my adventures as a software engineer, but may spread into other avenues
        of my life and hobbies.
      </ContentText>

      {topics.map(topic => (
        <Shelf key={topic.slug} category={topic.heading} summary={topic.prologue}>
          {topic.posts.map(post => (
            <Postcard
              key={slugify(post.title)}
              title={post.title}
              summary={post.summary}
              slug={`posts/${topic.slug}/${slugify(post.title)}`}
            />
          ))}
        </Shelf>
      ))}
    </DefaultLayout>
  );
};

export default PostsPage;
