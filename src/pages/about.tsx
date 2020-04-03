import DefaultLayout from '../layouts/default';
import * as React from 'react';
import { NextPage } from 'next';
import { ContentText } from '../components';
import { H2 } from '../components/markdown';

type Props = {};
const AboutPage: NextPage<Props> = () => (
  <DefaultLayout title="Luke Bayliss | About Me">
    <H2>About Me</H2>
    <ContentText>
      My name is Luke Bayliss. I am a developer from Melbourne, Australia. I enjoy coffee, music, and video games.
    </ContentText>
  </DefaultLayout>
);

export default AboutPage;
