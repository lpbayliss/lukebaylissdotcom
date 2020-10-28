import { Box, useTheme } from '@chakra-ui/core';
import { FunctionComponent } from 'react';

const DefaultLayout: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  theme.colors.blue[900];
  return (
    <Box as="main" px="6" bg={theme.colors.background} color="white">
      <Box margin="auto" maxW="3xl">
        {children}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
