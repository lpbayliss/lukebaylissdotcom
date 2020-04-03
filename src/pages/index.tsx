import * as React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../layouts/default';
import { H2 } from '../components/markdown';
import { Text, TextProps } from 'rebass';

import { meta as tipsForStartingANewJob } from './posts/developer-life/my-tips-for-starting-at-a-new-job.mdx';
import { meta as howAndWhyIUseTailwindWithEmotion } from './posts/developer-life/how-and-why-i-use-emotion-with-tailwind.mdx';
import { Postcard, Shelf } from '../components';
const recent = [tipsForStartingANewJob, howAndWhyIUseTailwindWithEmotion];

const ContentText: React.FunctionComponent<TextProps> = props => (
  <Text marginBottom="4" lineHeight="1.8" fontFamily="heading" {...props} />
);

const IndexPage: NextPage = () => {
  return (
    <DefaultLayout title="Luke Bayliss | @lpbayliss">
      <H2>Luke Bayliss</H2>
      <ContentText>Welcome!</ContentText>
      <Shelf category="Recent Posts">
        {recent.map(post => (
          <Postcard key={post.slug} title={post.title} summary={post.summary} slug={`posts/${post.slug}`} />
        ))}
      </Shelf>
    </DefaultLayout>
  );
};

export default IndexPage;
