import { randomUUID } from "crypto";
import fs from "fs";
import matter from "gray-matter";
import { GrayMatterFile } from "gray-matter";
import readingTime from "reading-time";
import { createHash } from "crypto";

const pipe =
  <T>(...fns: Array<(arg: T) => T>) =>
  (x: T) => {
    return fns.reduce((v, f) => f(v), x);
  };

type UpdateFn = (
  file: Pick<GrayMatterFile<string>, "data" | "content">,
) => Pick<GrayMatterFile<string>, "data" | "content">;

const updateUpdatedAt = ((file) => {
  console.log(`  - Updating updatedAt...`);

  const { data, content } = file;

  if (data.publishedAt !== undefined && data.publishedAt !== "") {
    const updatedAt = new Date().toISOString();
    console.log(`    - Updated at ${updatedAt}`);
    return {
      data: {
        ...data,
        updatedAt,
      },
      content,
    };
  }

  console.log(`  - Not published - Skipping updatedAt`);
  return { data, content };
}) satisfies UpdateFn;

const updateReadingTime = ((file) => {
  const { data, content } = file;
  const stats = readingTime(content);

  console.log(`  - Reading time: ${stats.text}`);
  return {
    data: {
      ...data,
      readingTime: stats.text,
    },
    content,
  };
}) satisfies UpdateFn;

const addContentId = ((file) => {
  if (file.data.id) return file;
  const { data, content } = file;
  const id = randomUUID();
  console.log(`  - Adding id: ${id}`);
  return {
    data: {
      ...data,
      id,
    },
    content,
  };
}) satisfies UpdateFn;

const extractTOC = ((file) => {
  console.log(`  - Generating ToC...`);

  const { data, content } = file;
  const headingsRegex = /^(#+)\s+(.*)/gm;

  const headings = Array.from(content.matchAll(headingsRegex), (match) => ({
    level: match[1].length,
    text: match[2],
    id: match[2]
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-"),
  }));

  headings.forEach((heading) => {
    console.log(`    - ${heading.text} (${heading.level})`);
  });

  return {
    data: {
      ...data,
      headings,
    },
    content,
  };
}) satisfies UpdateFn;

(() => {
  const [, , ...paths] = process.argv;
  paths.forEach((path, index) => {
    console.log(`(${index + 1}/${paths.length}) Processing ${path}...`);
    const file = matter.read(path);
    const { content, data } = pipe(addContentId, (file) => {
      console.log(`  - Checking content hash...`);
      const currentHash = createHash("sha256")
        .update(file.content)
        .digest("hex");

      if (file.data.hash === currentHash) {
        console.log(`    - Matching hash, skipping`);
        return file;
      }

      console.log(`    - Hash mismatch, updating content`);
      const { data, content } = pipe(
        updateUpdatedAt,
        updateReadingTime,
        extractTOC,
      )(file);

      return { data: { ...data, hash: currentHash }, content };
    })(file);
    console.log("\n");
    fs.writeFileSync(path, matter.stringify(content, data));
  });
  console.log(`Processing Complete!`);
})();
