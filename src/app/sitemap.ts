import { getPosts } from "~/lib/posts";

export default async function sitemap() {
  const posts = await getPosts();

  const blogs = posts.map((post) => ({
    url: `https://maxleiter.com/blog/${post.slug}`,
    lastModified: post.lastUpdated
      ? new Date(post.lastUpdated).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `https://maxleiter.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
