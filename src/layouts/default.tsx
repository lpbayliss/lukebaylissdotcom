import * as React from 'react';
import { Flex } from 'rebass';
import { Header, Footer, Main } from '../components';
import styled from '../utils/styled';

const Page = styled(Flex)`
  background: ${({ theme }): string => theme.colors.background};
`;

type Props = {
  children: React.ReactNode;
};

const DefaultLayout: React.FunctionComponent<Props> = ({ children }) => (
  <Page flexDirection="column" justifyContent="space-between" height="100vh">
    <Header />
    <Main>{children}</Main>
    <Footer></Footer>
  </Page>
);

export default DefaultLayout;
