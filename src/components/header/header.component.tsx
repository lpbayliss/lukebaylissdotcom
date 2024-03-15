import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import { MaxWidthContainer } from "../max-width-container";

const Header = () => (
  <MaxWidthContainer>
    <Flex
      as="header"
      w="full"
      pr="1px"
      pb="1px"
      pl="1px"
      bgImage="linear-gradient(transparent 78%, rgba(39, 11, 70, .3))"
      borderBottomLeftRadius="30px"
      borderBottomRightRadius="30px"
    >
      <Box
        w="full"
        bg="background.main"
        borderBottomLeftRadius="29px"
        borderBottomRightRadius="29px"
        shadow="0 12px 9px -9px rgba(0,0,0,.1)"
      >
        <VStack w="full" p="5rem">
          <Text>Engineering</Text>
          <Heading as="h1">Luke Bayliss Blog</Heading>
        </VStack>
      </Box>
    </Flex>
  </MaxWidthContainer>
);

export default Header;
