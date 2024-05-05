import { Container, Text, VStack } from "@chakra-ui/react";

import Link from "~/components/link.component";
import PostDisplay from "~/components/post-display.component";

const HomePage = () => {
  return (
    <VStack>
      <Container maxW="3xl">
        <VStack pb={8}>
          <Text fontSize="lg">
            I am a software engineer from Melbourne Australia, currently working
            at{" "}
            <Link
              href="https://meandu.com"
              color="link"
              target="_blank"
              isExternal
            >
              me&u
            </Link>{" "}
            as a technical lead and engineering manager. You can find more about
            my experience{" "}
            <Link href="https://www.linkedin.com/in/lpbayliss/" color="link">
              here
            </Link>
            .
          </Text>
        </VStack>
        <PostDisplay onlyRecent />
      </Container>
    </VStack>
  );
};

export default HomePage;
