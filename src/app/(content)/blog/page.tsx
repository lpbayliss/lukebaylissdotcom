import PostLink from "~/components/link.component";
import { getPosts } from "~/lib/posts";

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <>
      {posts.map((post) => (
        <div key={post?.slug}>
          <h2>
            <PostLink href={`/blog/${post?.slug}`}>{post?.title}</PostLink>
          </h2>
        </div>
      ))}
    </>
  );
};

export default BlogPage;
