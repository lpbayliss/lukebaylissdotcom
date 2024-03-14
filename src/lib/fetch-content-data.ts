import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

interface ContentFrontmatter {
  title: string;
  abstract: string;
  updatedAt: string;
  publishedAt: string;
}

const fetchContentData = async <T extends object = ContentFrontmatter>(
  dir: string,
  slug: string,
) => {
  const file = fs.readFileSync(
    path.join(process.cwd(), "content", dir, `${slug}.mdx`),
    "utf-8",
  );

  return await serialize<unknown, T>(file, { parseFrontmatter: true });
};

export default fetchContentData;
