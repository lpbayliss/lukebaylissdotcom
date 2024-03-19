"use client";

import {
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  HTMLChakraProps,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaRss,
  FaSun,
} from "react-icons/fa6";

import Link from "~/components/link.component";

import IconLink from "./icon-link.component";

const iconProps = {
  transition: "all 0.3s ease",
  boxSize: 6,
  color: "primary.main",
  p: "2",
  bg: "background.main",
  rounded: "md",
  _hover: { color: "primary.600", bg: "background.100" },
} satisfies Partial<HTMLChakraProps<typeof IconLink>>;

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="4xl">
      <Grid as="nav" templateColumns={["1fr", null, "repeat(3, 1fr)"]} h={20}>
        <GridItem as={HStack} justifyContent="flex-start">
          <Link
            href="/"
            fontSize="xl"
            fontWeight="bold"
          >{`<LukeBayliss/>`}</Link>
        </GridItem>
        <GridItem as={HStack} justifyContent="center">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </GridItem>
        <GridItem as={HStack} justifyContent="flex-end" gap={1}>
          <IconLink
            href="https://github.com/lpbayliss"
            isExternal
            target="_blank"
            icon={FaGithub}
            {...iconProps}
          />
          <IconLink
            href="https://www.linkedin.com/in/lpbayliss/"
            isExternal
            target="_blank"
            icon={FaLinkedinIn}
            {...iconProps}
          />
          <IconLink
            href="mailto:hello@lukebayliss.com"
            icon={FaEnvelope}
            {...iconProps}
          />
          <IconLink href="/feed.xml" icon={FaRss} {...iconProps} />
          <IconLink href="/" icon={FaSun} {...iconProps} />
          <Button onClick={toggleColorMode}>Color Switch</Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Navbar;
