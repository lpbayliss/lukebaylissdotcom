import * as React from 'react';
import { Flex } from 'rebass';
import { Header, Footer, Main } from '../components';
import Head from 'next/head';

type Props = {
  title: string;
  children: React.ReactNode;
};

const BlogPostLayout: React.FunctionComponent<Props> = ({ title, children }) => (
  <Flex flexDirection="column" justifyContent="space-between" height="100vh">
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <Main>{children}</Main>
    <Footer></Footer>
  </Flex>
);

export default BlogPostLayout;
