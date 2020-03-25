import * as React from 'react';
import { Flex } from 'rebass';
import { Header, Footer, Main } from '../components';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout: React.FunctionComponent<Props> = ({ children }) => (
  <Flex flexDirection="column" justifyContent="space-between" height="100vh">
    <Header />
    <Main>{children}</Main>
    <Footer></Footer>
  </Flex>
);

export default DefaultLayout;
