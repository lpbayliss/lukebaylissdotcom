import fs from "fs";
import path from "path";

const fetchContentSlugs = (dir: string) =>
  fs
    .readdirSync(path.join(process.cwd(), "content", dir))
    .map((file) => file.replace(/\.mdx$/, ""));

export default fetchContentSlugs;
