import * as React from 'react';
import { Flex, Text } from 'rebass';

type Props = {};

const Logo: React.FunctionComponent<Props> = (_props): JSX.Element => (
  <Flex flexDirection="column" justifyContent="center" px="4">
    <Text fontWeight="bold" fontSize="1.5rem">
      Luke Bayliss
    </Text>
  </Flex>
);

export default Logo;
