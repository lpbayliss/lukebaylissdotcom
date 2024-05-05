import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";

import { Post } from "~/types/post";

export const getPosts = cache(async (getRecent = false) => {
  const files = await fs.readdir("./content/posts/");

  const posts = await Promise.all(
    files
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (mdxFile) => {
        const filePath = `./content/posts/${mdxFile}`;
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);

        if (data.published === false) return null;
        return { ...data, body: content } as Post;
      }),
  );
  const filtered = posts.filter(filterNull).sort(orderByDate);

  return getRecent ? filtered.slice(0, 5) : filtered;
});

const filterNull = (post: Post | null): post is Post => post !== null;

const orderByDate = (a: Post, b: Post) => {
  return Number(new Date(b.lastUpdated)) - Number(new Date(a.lastUpdated));
};

export const getPost = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post?.slug === slug);
};
