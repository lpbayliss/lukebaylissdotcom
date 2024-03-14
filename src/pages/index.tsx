import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";

const Index: NextPage = () => {
  return (
    <Box as="main" minW="sm">
      {/* Navbar */}
      <Flex as="nav" align="center" w="full" h="28" px="2%">
        <Grid gap={6} templateColumns="repeat(3, 1fr)" w="full">
          <GridItem as={Flex} alignItems="center" justifyContent="flex-start">
            <Text>Luke Bayliss</Text>
          </GridItem>
          <GridItem as={HStack} alignItems="center" justifyContent="center">
            <Link as={NextLink} href="/home">
              Me
            </Link>
            <Link as={NextLink} href="/home">
              Blog
            </Link>
            <Link as={NextLink} href="/home">
              Projects
            </Link>
            <Link as={NextLink} href="/home">
              Contact
            </Link>
          </GridItem>
          <GridItem as={Flex} alignItems="center" justifyContent="flex-end">
            {/* <NextLink href="https://app.filendy.com" passHref>
              <IconButton
                as="a"
                aria-label="LinkedIn"
                icon={<Icon as={FaLinkedinIn} boxSize={5} />}
              />
            </NextLink>
            <NextLink href="https://app.filendy.com" passHref>
              <IconButton
                as="a"
                aria-label="Twitter X"
                icon={<Icon as={FaXTwitter} boxSize={5} />}
              />
            </NextLink>
            <NextLink href="https://app.filendy.com" passHref>
              <IconButton
                as="a"
                aria-label="Instagram"
                icon={<Icon as={FaInstagram} boxSize={5} />}
              />
            </NextLink> */}
          </GridItem>
        </Grid>
      </Flex>
      {/* Header */}
      <Box w="full" px="5%">
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
      </Box>
      <Box px="5%" pt="5rem" transition="all .5s">
        <Heading as="h2">Hello World!</Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ex
          eum consequuntur repudiandae natus perspiciatis veritatis. Dolore
          itaque temporibus nam doloribus? Similique, deleniti nam. Maiores
          rerum corrupti vel quas dolorum? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Assumenda ex eum consequuntur
          repudiandae natus perspiciatis veritatis. Dolore itaque temporibus nam
          doloribus? Similique, deleniti nam. Maiores rerum corrupti vel quas
          dolorum? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Assumenda ex eum consequuntur repudiandae natus perspiciatis
          veritatis. Dolore itaque temporibus nam doloribus? Similique, deleniti
          nam. Maiores rerum corrupti vel quas dolorum?
        </Text>
        <Heading as="h3" size="md">
          Hello World!
        </Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ex
          eum consequuntur repudiandae natus perspiciatis veritatis. Dolore
          itaque temporibus nam doloribus? Similique, deleniti nam. Maiores
          rerum corrupti vel quas dolorum? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Assumenda ex eum consequuntur
          repudiandae natus perspiciatis veritatis. Dolore itaque temporibus nam
          doloribus? Similique, deleniti nam. Maiores rerum corrupti vel quas
          dolorum? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Assumenda ex eum consequuntur repudiandae natus perspiciatis
          veritatis. Dolore itaque temporibus nam doloribus? Similique, deleniti
          nam. Maiores rerum corrupti vel quas dolorum?
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
