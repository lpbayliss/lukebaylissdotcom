import * as React from 'react';
import { Paragraph } from './paragraph';
import { CodeBlock } from './code-block';
import { H1, H2, H3, H4 } from './headings';
import { Link } from './link';

// Export individual components for explicit uses
export { Paragraph };

// Redefine any components that need markdown specific props
const MDParagraph = (props): JSX.Element => <Paragraph fontFamily="body" fontSize={3} {...props} />;

// Export a default object for use with mdx provider
export default {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: MDParagraph,
  a: Link,
  code: CodeBlock,
};
