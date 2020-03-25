import * as React from 'react';
import { Box } from 'rebass';
import styled from '../../utils/styled';

const MainBox = (props): JSX.Element => <Box as="main" {...props} />;
const Main = styled(MainBox)`
  margin: 0px auto;
  padding-top: ${({ theme }): string => `${theme.sizes.nav}px`};
  padding-left: ${({ theme }): string => `${theme.space.small}px`};
  padding-right: ${({ theme }): string => `${theme.space.small}px`};
`;

export default Main;
