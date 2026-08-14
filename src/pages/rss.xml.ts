import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { isPublishedWriting, sortWritingNewestFirst } from "../lib/content";

export const GET = async (context: APIContext) => {
  const entries = (await getCollection("writing", isPublishedWriting)).sort(sortWritingNewestFirst);

  return rss({
    title: "Luke Bayliss — Writing",
    description:
      "Technical notes, essays, build logs, case studies, and interactive labs by Luke Bayliss.",
    site: context.site || "https://lukebayliss.com",
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.publishedAt,
      link: `/writing/${entry.id}/`,
      categories: [entry.data.format, ...entry.data.topics],
    })),
    customData: "<language>en-AU</language>",
    stylesheet: "/rss-styles.xsl",
  });
};
