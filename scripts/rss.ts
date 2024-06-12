// scripts/rss.ts
import fs from "fs";
import RSS from "rss";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

const posts = fs
  .readdirSync(path.resolve(__dirname, "../content/posts/"))
  .filter(
    (file) => path.extname(file) === ".md" || path.extname(file) === ".mdx",
  )
  .map((file) => {
    const postContent = fs.readFileSync(`./content/posts/${file}`, "utf8");
    const { data, content }: { data: any; content: string } =
      matter(postContent);
    return { ...data, body: content };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const renderer = new marked.Renderer();

renderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer,
});

const renderPost = (md: string) => marked.parse(md);

const main = () => {
  const feed = new RSS({
    title: "Luke Bayliss",
    site_url: "https://lukebayliss.com",
    feed_url: "https://lukebayliss.com/feed.xml",
    // image_url: 'https://maxleiter.com/og.png',
    language: "en",
    description: "Luke Bayliss's blog",
  });

  posts.forEach((post) => {
    const url = `https://lukebayliss.com/posts/${post.slug}`;

    feed.item({
      title: post.title,
      description: renderPost(post.description),
      date: new Date(post?.date),
      author: "Luke Bayliss",
      url,
      guid: url,
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync(path.join(__dirname, "../public/feed.xml"), rss);
};

main();
