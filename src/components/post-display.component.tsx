import { format } from "date-fns";

import { getPosts } from "~/lib/posts";

const PostDisplay = async () => {
  const posts = await getPosts();
  return (
    <>
      <h2 className="pb-1 text-2xl font-bold">Posts</h2>
      <div className="-mx-4 flex flex-col items-start gap-2">
        {posts.map((p) => (
          <a
            href={`/posts/${p.slug}`}
            className="w-full rounded-md p-4 transition-all hover:bg-purple-900"
            key={p.id}
          >
            <p className="text-md opacity-70">
              {`${format(p.lastUpdated, "PPP")} / ${p.type.charAt(0).toUpperCase() + p.type.slice(1)}`}
            </p>
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-md opacity-70">{p.description}</p>
          </a>
        ))}
      </div>
    </>
  );
};

export default PostDisplay;
