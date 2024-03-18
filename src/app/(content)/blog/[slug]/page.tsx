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
  return <PostBody>{post?.body}</PostBody>;
};

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post?.slug }));
};

export default BlogPostPage;
