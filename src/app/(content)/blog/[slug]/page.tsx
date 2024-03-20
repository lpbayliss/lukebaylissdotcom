import { Box, Container, Heading, HStack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { notFound } from "next/navigation";

import PostBody from "~/components/post-body.component";
import { getPost, getPosts } from "~/lib/posts";

const BlogPostPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return (
    <Container maxW="4xl">
      <Box mt={6} mb={16}>
        <Heading as="h1" mb={4} size="4xl">
          {post.title}
        </Heading>
        <HStack>
          <Text>{format(post.lastUpdated, "PPP")}</Text>
          <Text>·</Text>
          <Text>{post.readingTime}</Text>
        </HStack>
      </Box>
      <PostBody>{post?.body}</PostBody>
    </Container>
  );
};

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post?.slug }));
};

export default BlogPostPage;
