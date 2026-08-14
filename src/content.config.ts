import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const dateField = z.coerce.date();

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishedAt: dateField,
    updatedAt: dateField.optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    canonicalUrl: z.url().optional(),
    readingTimeMinutes: z.number().positive().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(160),
    publishedAt: dateField,
    updatedAt: dateField.optional(),
    role: z.string().optional(),
    tech: z.array(z.string()).default([]),
    externalUrl: z.url().optional(),
    sourceUrl: z.url().optional(),
    status: z.enum(["planning", "active", "maintenance", "archived"]).default("active"),
    draft: z.boolean().default(false),
    order: z.number().int().optional(),
  }),
});

const snippets = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/snippets" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishedAt: dateField,
    updatedAt: dateField.optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  projects,
  snippets,
};
