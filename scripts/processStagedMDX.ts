import { randomUUID } from "crypto";
import fs from "fs";
import matter from "gray-matter";
import { GrayMatterFile } from "gray-matter";
import readingTime from "reading-time";

const pipe =
  <T>(...fns: Array<(arg: T) => T>) =>
  (x: T) => {
    return fns.reduce((v, f) => f(v), x);
  };

type UpdateFn = (
  file: Pick<GrayMatterFile<string>, "data" | "content">,
) => Pick<GrayMatterFile<string>, "data" | "content">;

const updateUpdatedAt = ((file) => {
  const { data, content } = file;
  if (data.publishedAt !== undefined && data.publishedAt !== "") {
    return {
      data: {
        ...data,
        updatedAt: new Date().toISOString(),
      },
      content,
    };
  }

  return { data, content };
}) satisfies UpdateFn;

const updateReadingTime = ((file) => {
  const { data, content } = file;
  const stats = readingTime(content);

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
  return {
    data: {
      ...data,
      id: randomUUID(),
    },
    content,
  };
}) satisfies UpdateFn;

(() => {
  const [, , ...paths] = process.argv;
  paths.forEach((path) => {
    const file = matter.read(path);
    const { content, data } = pipe(
      addContentId,
      updateReadingTime,
      updateUpdatedAt,
    )(file);
    fs.writeFileSync(path, matter.stringify(content, data));
  });
})();
