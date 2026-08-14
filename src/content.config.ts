import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const dateField = z.coerce.date();
const shortText = z.string().min(1).max(160);

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string().min(1),
    summary: shortText,
    publishedAt: dateField,
    updatedAt: dateField.optional(),
    format: z.enum(["note", "essay", "lab", "build-log", "case-study"]),
    topics: z.array(z.string().min(1)).default([]),
    status: z.enum(["draft", "published", "archived"]).default("draft"),
    featured: z.boolean().default(false),
    canonicalUrl: z.url().optional(),
    heroImage: z.string().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string().min(1),
    summary: shortText,
    publishedAt: dateField,
    updatedAt: dateField.optional(),
    category: z.enum(["professional", "open-source", "independent", "experiment"]),
    status: z.enum(["planning", "active", "maintenance", "archived"]),
    featured: z.boolean().default(false),
    order: z.number().int().nonnegative(),
    draft: z.boolean().default(false),
    role: z.string().optional(),
    technologies: z.array(z.string().min(1)).default([]),
    sourceUrl: z.url().optional(),
    liveUrl: z.url().optional(),
  }),
});

export const collections = { writing, work };
