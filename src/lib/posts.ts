import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";

import { Post } from "~/types/post";

export const getPosts = cache(async () => {
  const files = await fs.readdir("./content/posts/");

  return (
    await Promise.all(
      files
        .filter((file) => path.extname(file) === ".mdx")
        .map(async (mdxFile) => {
          const filePath = `./content/posts/${mdxFile}`;
          const postContent = await fs.readFile(filePath, "utf8");
          const { data, content } = matter(postContent);

          if (data.published === false) return null;
          return { ...data, body: content } as Post;
        }),
    )
  ).filter((p) => p !== null) as Post[];
});

export const getPost = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post?.slug === slug);
};
