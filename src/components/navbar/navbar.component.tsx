import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Navbar = () => (
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
        <LinkBox>
          <LinkOverlay as={NextLink} href="#">
            <Icon as={FaXTwitter} boxSize={5} />
          </LinkOverlay>
        </LinkBox>
        <LinkBox>
          <LinkOverlay as={NextLink} href="#">
            <Icon as={FaLinkedinIn} boxSize={5} />
          </LinkOverlay>
        </LinkBox>
        <LinkBox>
          <LinkOverlay as={NextLink} href="#">
            <Icon as={FaInstagram} boxSize={5} />
          </LinkOverlay>
        </LinkBox>
      </GridItem>
    </Grid>
  </Flex>
);

export default Navbar;
