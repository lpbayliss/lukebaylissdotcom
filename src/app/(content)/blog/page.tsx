import { Container } from "@chakra-ui/react";

import PostDisplay from "~/components/post-display.component";

const BlogPage = () => {
  return (
    <Container maxW="3xl">
      <PostDisplay />
    </Container>
  );
};

export default BlogPage;
