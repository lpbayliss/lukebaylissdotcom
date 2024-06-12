export interface Post {
  id: string;
  title: string;
  slug: string;
  lastUpdated: string;
  isPublished: boolean;
  readingTime: string;
  headings: { level: number; text: string; id: string }[];
  hash: string;
  body: string;
  description: string;
  type: "snippet" | "post" | "project" | "note" | "showcase";
}
