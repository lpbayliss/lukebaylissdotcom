import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { format } from "date-fns";

import Link from "~/components/link.component";
import { getPosts } from "~/lib/posts";

const HomePage = async () => {
  const posts = await getPosts();

  return (
    <VStack>
      <Container maxW="2xl">
        <VStack>
          <Text>
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
            <Link href="/experience" color="link">
              here
            </Link>
            .
          </Text>
        </VStack>
        <VStack alignItems="flex-start">
          {posts.map((p) => (
            <Box key={p.id}>
              <Heading size="md">{p.title}</Heading>
              <Text>{format(p.lastUpdated, "PPP")}</Text>
            </Box>
          ))}
        </VStack>
      </Container>
    </VStack>
  );
};

export default HomePage;
