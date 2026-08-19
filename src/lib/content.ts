import type { CollectionEntry } from "astro:content";

export const isPublishedWriting = (entry: CollectionEntry<"writing">) =>
  entry.data.status === "published";

export const sortWritingNewestFirst = (
  a: CollectionEntry<"writing">,
  b: CollectionEntry<"writing">,
) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime();

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

export const formatLabel = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
