import { Box, Button, Flex, Heading, Link, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import NextLink from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [name] = useTypewriter({
    words: ["<LukeBayliss/>"],
    loop: true,
  });
  const [text] = useTypewriter({
    words: [
      "a software engineer.",
      "a wizard, turning caffeine into code.",
      "an exterminator, relentlessly ridding on pesky bugs.",
      "an alchemist, transmuting ideas into applications.",
      "a polyglot, a new language is no barrier.",
    ],
    loop: true,
  });
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <VStack
        margin="auto"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        spacing={8}
      >
        <Heading size="3xl">{"<Luke Bayliss/>"}</Heading>
        <Heading size="xl">
          {`I'm ${text}`}
          <Cursor cursorStyle={"|"} />
        </Heading>
        <Link as={NextLink} href="/#" fontSize="xl">
          Learn more
        </Link>
      </VStack>
    </>
  );
}
