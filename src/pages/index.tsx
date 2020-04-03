import * as React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../layouts/default';
import { H2 } from '../components/markdown';
import { Text, TextProps } from 'rebass';

const ContentText: React.FunctionComponent<TextProps> = props => (
  <Text marginBottom="4" lineHeight="1.8" fontFamily="heading" {...props} />
);

const IndexPage: NextPage = () => {
  return (
    <DefaultLayout title="Luke Bayliss | @lpbayliss">
      <H2>Luke Bayliss</H2>
      <ContentText>Welcome!</ContentText>
    </DefaultLayout>
  );
};

export default IndexPage;
