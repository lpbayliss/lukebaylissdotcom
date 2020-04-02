import * as React from 'react';
import { Box, Flex } from 'rebass';

const Main = (props): JSX.Element => (
  <Box paddingTop="65px" paddingX="3" marginTop="0" marginX="auto" width="100%" maxWidth="550px">
    <Flex as="main" flexDirection="column" {...props}></Flex>
  </Box>
);

export default Main;
