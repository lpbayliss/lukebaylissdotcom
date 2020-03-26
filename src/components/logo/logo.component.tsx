import * as React from 'react';
import Link from 'next/link';
import { Flex, Text } from 'rebass';

type Props = {};

const Logo: React.FunctionComponent<Props> = (_props): JSX.Element => (
  <Flex flexDirection="column" justifyContent="center" px="3">
    <Link href="/" passHref>
      <Text fontWeight="bold" fontSize="1.5rem">
        Luke Bayliss
      </Text>
    </Link>
  </Flex>
);

export default Logo;
