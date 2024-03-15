import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeSlug from "rehype-slug";

interface ContentFrontmatter {
  title: string;
  abstract: string;
  updatedAt: string;
  publishedAt: string;
  readingTime: string;
  headings: { level: number; text: string; id: string }[];
  hash: string;
  id: string;
}

const fetchContentData = async <T extends object = ContentFrontmatter>(
  dir: string,
  slug: string,
) => {
  const file = fs.readFileSync(
    path.join(process.cwd(), "content", dir, `${slug}.mdx`),
    "utf-8",
  );

  const source = await serialize<unknown, T>(file, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  });

  return source;
};

export default fetchContentData;
