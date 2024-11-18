import { format } from "date-fns";
import { Metadata } from "next";
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
    <div>
      <div className="mb-16 mt-6">
        <h1 className="mb-4 text-4xl">{post.title}</h1>
        <div className="flex flex-row gap-2">
          <p>{format(post.lastUpdated, "PPP")}</p>
          <p>·</p>
          <p>{post.readingTime}</p>
        </div>
      </div>
      <PostBody>{post?.body}</PostBody>
    </div>
  );
};

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post?.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const post = (await getPosts()).find((p) => p?.slug === params.slug);
  return {
    title: post?.title,
    description: post?.description,
    alternates: {
      canonical: `https://lukebayliss.com/blog/${params.slug}`,
    },
  };
};

export default BlogPostPage;
