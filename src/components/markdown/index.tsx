import * as React from 'react';
import { Paragraph } from './paragraph';
import { CodeBlock } from './code-block';

// Export individual components for explicit uses
export { Paragraph };

// Redefine any components that need markdown specific props
const MDParagraph = (props): JSX.Element => <Paragraph fontFamily="body" fontSize="18px" {...props} />;

// Export a default object for use with mdx provider
export default {
  p: MDParagraph,
  code: CodeBlock,
};
