import * as React from 'react';
import { default as NextLink } from 'next/link';
import { Box, Flex, Text, Link } from 'rebass';

type Props = {};

const Header: React.FunctionComponent<Props> = () => {
  return (
    <Flex as="header" alignItems="center" px="2">
      <Text p="2" fontWeight="bold">
        Luke Bayliss
      </Text>
      <Box mx="auto" />
      <Box>
        <NextLink href="/" passHref>
          <Link p="p">Home</Link>
        </NextLink>
        <NextLink href="/about" passHref>
          <Link p="2">about</Link>
        </NextLink>
        <NextLink href="/posts" passHref>
          <Link p="2">posts</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Header;
