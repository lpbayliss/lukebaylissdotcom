import { Metadata } from "next";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

type Props = { params: { slug: string } };

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: Props): Metadata => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post?.title || "Unknown Title" };
};

const PostLayout = ({ params }: Props) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return null;

  const Content = getMDXComponent(post.body.code);

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Content />
    </article>
  );
};

export default PostLayout;
