import { defineCollection, z } from "astro:content";

const dateField = z.coerce.date();

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishedAt: dateField,
    updatedAt: dateField.optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    canonicalUrl: z.string().url().optional(),
    readingTimeMinutes: z.number().positive().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().max(160),
    publishedAt: dateField,
    updatedAt: dateField.optional(),
    role: z.string().optional(),
    tech: z.array(z.string()).default([]),
    externalUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),
    status: z.enum(["planning", "active", "maintenance", "archived"]).default("active"),
    draft: z.boolean().default(false),
    order: z.number().int().optional(),
  }),
});

const snippets = defineCollection({
  type: "content",
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
