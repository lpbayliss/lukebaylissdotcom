import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";

const updateUpdatedAt = (file) => {
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
};

const updateReadingTime = (file) => {
  const { data, content } = file;
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

    const { data: updatedData, content: updatedContent } = updateReadingTime(
      updateUpdatedAt(file),
    );

    fs.writeFileSync(path, matter.stringify(updatedContent, updatedData));
  });
};

updateFrontMatter();
