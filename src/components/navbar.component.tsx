"use client";

import {
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  HTMLChakraProps,
  Icon,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMoon,
  FaRss,
  FaSun,
} from "react-icons/fa6";

import Link from "~/components/link.component";

import IconLink from "./icon-link.component";

const iconProps = {
  transition: "all 0.3s ease",
  boxSize: 6,
  color: "primary",
  p: "2",
  bg: "background",
  rounded: "md",
  _hover: { bg: "background-hover" },
} satisfies Partial<HTMLChakraProps<typeof IconLink>>;

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container minW="sm" maxW={["2xl"]}>
      <Grid
        as="nav"
        gap={0}
        templateColumns={["1fr", null, "repeat(2, 1fr)"]}
        minH={20}
        mt={12}
        mb={6}
      >
        <GridItem as={HStack} justifyContent={["center", null, "flex-start"]}>
          <Link
            href="/"
            fontSize="3xl"
            fontWeight="bold"
          >{`Luke Bayliss`}</Link>
        </GridItem>
        <GridItem
          as={HStack}
          justifyContent={["center", null, "flex-end"]}
          gap={1}
        >
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
          <Divider h={8} mx={2} borderColor="primary" orientation="vertical" />
          <IconButton
            color={iconProps.color}
            bg={iconProps.bg}
            _hover={iconProps._hover}
            aria-label="color mode toggle"
            icon={
              <Icon as={colorMode === "light" ? FaSun : FaMoon} boxSize={6} />
            }
            onClick={toggleColorMode}
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Navbar;
