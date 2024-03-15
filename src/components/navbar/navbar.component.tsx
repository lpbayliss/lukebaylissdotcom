import {
  Flex,
  HStack,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  LinkProps,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";

const NavLink = (props: LinkProps) => (
  <Link
    as={NextLink}
    px={4}
    py={2}
    borderRadius="full"
    _hover={{ textDecoration: "none", bg: "primary.100" }}
    transition={"all 0.3s ease"}
    {...props}
  />
);

const Navbar = () => (
  <Flex as="nav" align="center" w="full" h="28" px="2%">
    <HStack align="center" justify="center" gap={6} w="full">
      {/* Logo */}
      <Flex align="center" mr="auto">
        <LinkBox
          _hover={{ color: "primary.main" }}
          transition={"all 0.3s ease"}
        >
          <LinkOverlay as={NextLink} href="/">
            <Text fontSize="xl" fontWeight="bold">{`<LukeBayliss/>`}</Text>
          </LinkOverlay>
        </LinkBox>
      </Flex>
      {/* Links */}
      <HStack alignItems="center" justifyContent="center" gap={6}>
        <NavLink href="/experience">Experience</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </HStack>
      {/* Socials */}
      <HStack ml="auto">
        <LinkBox
          _hover={{ color: "primary.main" }}
          transition={"all 0.3s ease"}
        >
          <LinkOverlay
            as={NextLink}
            display="flex"
            href="https://www.linkedin.com/in/lpbayliss/"
            isExternal
            target="_blank"
          >
            <Icon as={FaLinkedinIn} boxSize={6} />
          </LinkOverlay>
        </LinkBox>
      </HStack>
    </HStack>
  </Flex>
);

export default Navbar;
