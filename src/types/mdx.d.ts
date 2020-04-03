declare module '*.mdx' {
  import { Meta } from './meta.type';

  let MDXComponent: (props: any) => JSX.Element;
  let meta: Meta;

  export { meta };
  export default MDXComponent;
}
