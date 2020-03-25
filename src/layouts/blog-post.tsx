import * as React from 'react';
import { Flex } from 'rebass';
import { Header, Footer } from '../components';

type Props = {
  children: React.ReactNode;
};

const BlogPostLayout: React.FunctionComponent<Props> = ({ children }) => (
  <Flex flexDirection="column" justifyContent="space-between" height="100vh">
    <Header />
    <main>{children}</main>
    <Footer></Footer>
  </Flex>
);

export default BlogPostLayout;
