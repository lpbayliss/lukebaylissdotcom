import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";

const updateUpdatedAt = (data, content) => {
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
};

const updateReadingTime = (data, content) => {
  const stats = readingTime(content);

  return {
    data: {
      ...data,
      readingTime: stats.text,
    },
    content,
  };
};

const updateFrontMatter = () => {
  const [, , ...paths] = process.argv;

  paths.forEach((path) => {
    const file = matter.read(path);
    const { data, content } = file;

    const { data: updatedData, content: updatedContent } = updateReadingTime(
      updateUpdatedAt(data, content),
    );

    fs.writeFileSync(path, matter.stringify(updatedContent, updatedData));
  });
};

updateFrontMatter();
