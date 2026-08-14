import type { CollectionEntry } from "astro:content";

export const isPublishedWriting = (entry: CollectionEntry<"writing">) =>
  entry.data.status === "published";

export const isPublishedWork = (entry: CollectionEntry<"work">) => !entry.data.draft;

export const sortWritingNewestFirst = (
  a: CollectionEntry<"writing">,
  b: CollectionEntry<"writing">,
) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime();

export const sortWork = (a: CollectionEntry<"work">, b: CollectionEntry<"work">) => {
  const orderDifference = a.data.order - b.data.order;
  if (orderDifference !== 0) return orderDifference;
  return b.data.publishedAt.getTime() - a.data.publishedAt.getTime();
};

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
