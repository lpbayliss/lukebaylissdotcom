import { Heading, LinkBox, LinkOverlay, Text, VStack } from "@chakra-ui/react";
import { format } from "date-fns";
import NextLink from "next/link";

import { getPosts } from "~/lib/posts";

import Link from "./link.component";

interface Props {
  onlyRecent?: boolean;
}

const PostDisplay = async ({ onlyRecent }: Props) => {
  const posts = await getPosts(!!onlyRecent);
  return (
    <>
      <Heading pb="4">My Posts</Heading>
      <VStack alignItems="flex-start" gap={2} mx="-4">
        {posts.map((p) => (
          <LinkBox
            key={p.id}
            w="full"
            px="4"
            py="4"
            _hover={{ bg: "background-hover" }}
            rounded="md"
            transitionDuration="0.2s"
          >
            <Text pb="1" fontSize="sm" opacity={0.8}>
              {format(p.lastUpdated, "PPP")} /{" "}
              {p.type.charAt(0).toUpperCase() + p.type.slice(1)}
            </Text>
            <LinkOverlay as={NextLink} href={`/blog/${p.slug}`}>
              <Heading fontWeight="bold" size="lg">
                {p.title}
              </Heading>
            </LinkOverlay>
            <Text fontSize="lg" opacity={0.8}>
              {p.description}
            </Text>
          </LinkBox>
        ))}
        {!!onlyRecent && (
          <Link pl="4" href="/blog" color="link">
            more...
          </Link>
        )}
      </VStack>
    </>
  );
};

export default PostDisplay;
