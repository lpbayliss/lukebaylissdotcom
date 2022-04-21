/* eslint-disable react/no-unescaped-entities */
import { GetServerSideProps, NextPage } from "next";
import { Container, Flex, Heading, Stack, Text, Wrap } from "@chakra-ui/react";
import Section from "../components/section";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const SuccessPage: NextPage = () => {
  return (
    <Flex flexDir="column">
      <Section>
        <Container maxW="2xl">
          <Stack spacing={4}>
            <Heading size="4xl" pb="none">
              Thanks for getting in touch!
            </Heading>
            <Text fontSize="xl">
              I'll try and get back to you as soon as possible!
            </Text>
            <Link fontSize="xl" href="https://www.linkedin.com/in/lpbayliss/" isExternal>
              You can always contact me directly via my LinkedIn page <ExternalLinkIcon mx="2px" />
            </Link>
            <NextLink href={"/"} passHref>
              <Link fontSize="xl">
                Otherwise, Click here to go back.
              </Link>
            </NextLink>
          </Stack>
        </Container>
      </Section>
    </Flex>
  );
};

export default SuccessPage;
