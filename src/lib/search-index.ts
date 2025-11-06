import { getCollection } from "astro:content";

export interface SearchItem {
	type: "blog" | "project" | "snippet";
	title: string;
	description: string;
	url: string;
	tags?: string[];
	publishedAt: string;
	content: string;
}

/**
 * Generates a search index from all content collections.
 * This runs at build time and creates a searchable dataset.
 */
export async function generateSearchIndex(): Promise<SearchItem[]> {
	const index: SearchItem[] = [];

	// Get blog posts (excluding drafts)
	const blogPosts = await getCollection("blog", ({ data }) => !data.draft);
	for (const post of blogPosts) {
		index.push({
			type: "blog",
			title: post.data.title,
			description: post.data.description,
			url: `/blog/${post.slug}/`,
			tags: post.data.tags,
			publishedAt: post.data.publishedAt.toISOString(),
			content: post.body,
		});
	}

	// Get projects (excluding drafts)
	const projects = await getCollection("projects", ({ data }) => !data.draft);
	for (const project of projects) {
		index.push({
			type: "project",
			title: project.data.title,
			description: project.data.summary,
			url: `/projects/${project.slug}/`,
			tags: project.data.tech,
			publishedAt: project.data.publishedAt.toISOString(),
			content: project.body,
		});
	}

	// Get snippets (excluding drafts)
	const snippets = await getCollection("snippets", ({ data }) => !data.draft);
	for (const snippet of snippets) {
		index.push({
			type: "snippet",
			title: snippet.data.title,
			description: snippet.data.description,
			url: `/snippets/${snippet.slug}/`,
			tags: snippet.data.tags,
			publishedAt: snippet.data.publishedAt.toISOString(),
			content: snippet.body,
		});
	}

	return index;
}
