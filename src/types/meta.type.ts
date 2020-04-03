export type Changelog = { [changeDate: string]: string };
export type Meta = {
  published: boolean;
  publishedAt?: string;
  title: string;
  summary: string;
  changelog?: Changelog;
  tags?: string[];
};
