import * as React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../../layouts/default';
import { H2, H3 } from '../../components/markdown';

// Posts
import { Meta } from '../../types/meta.type';
import { meta as tipsForStartingANewJob } from './developer-life/my-tips-for-starting-at-a-new-job.mdx';
import { meta as howAndWhyIUseTailwindWithEmotion } from './developer-life/how-and-why-i-use-emotion-with-tailwind.mdx';
import { ContentText, Shelf, Postcard } from '../../components';

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
            <Postcard key={post.slug} title={post.title} summary={post.summary} slug={`posts/${post.slug}`} />
          ))}
        </Shelf>
      ))}
    </DefaultLayout>
  );
};

export default PostsPage;
