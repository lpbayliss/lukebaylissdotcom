import fs from "fs";
import matter from "gray-matter";

const updateFrontMatter = () => {
  const [, , ...paths] = process.argv;

  paths.forEach((path) => {
    const file = matter.read(path);
    const { data: currentFrontMatter, content } = file;

    if (
      currentFrontMatter.publishedAt !== undefined &&
      currentFrontMatter.publishedAt !== ""
    ) {
      const updatedFrontMatter = {
        ...currentFrontMatter,
        updatedAt: new Date().toISOString(),
      };
      const updatedFileContent = matter.stringify(content, updatedFrontMatter);
      fs.writeFileSync(path, updatedFileContent);
    }
  });
};

updateFrontMatter();
