import { Container } from "@chakra-ui/react";
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
      <PostBody>{post?.body}</PostBody>
    </Container>
  );
};

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post?.slug }));
};

export default BlogPostPage;
