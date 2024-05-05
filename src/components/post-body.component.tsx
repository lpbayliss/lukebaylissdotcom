// @ts-expect-error no types
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

import markdownComponents from "~/lib/markdown-components";

const PostBody = ({ children }: { children: string }) => {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            remarkA11yEmoji,
            [
              remarkToc,
              {
                tight: true,
                maxDepth: 2,
                heading: "Jump to",
              },
            ],
          ],
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      }}
      components={markdownComponents}
    />
  );
};

export default PostBody;
