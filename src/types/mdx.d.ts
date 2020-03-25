declare module '*.mdx' {
  type Changelog = { [changeDate: string]: string };
  type Meta = {
    published: boolean;
    publishedAt?: string;
    title: string;
    summary: string;
    changelog?: Changelog;
    tags?: string[];
  };
  let MDXComponent: (props: any) => JSX.Element;
  let meta: Meta;

  export { meta };
  export default MDXComponent;
}
