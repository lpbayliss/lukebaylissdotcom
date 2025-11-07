import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog", ({ data }) => !data.draft);
  const sortedPosts = blog.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );

  return rss({
    title: "Luke Bayliss — Blog",
    description:
      "Software engineer, architect, and consultant. Thoughts on software development, architecture, and technology.",
    site: context.site || "https://lukebayliss.com",
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags,
      ...(post.data.canonicalUrl && { customData: `<link>${post.data.canonicalUrl}</link>` }),
    })),
    customData: `<language>en-us</language>`,
    stylesheet: "/rss-styles.xsl",
  });
}
