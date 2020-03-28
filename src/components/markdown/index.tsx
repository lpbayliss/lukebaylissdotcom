import * as React from 'react';
import { Paragraph } from './paragraph';
import { CodeBlock } from './code-block';
import { H1, H2, H3, H4 } from './headings';
import { Link } from './link';
import { InlineCode } from './inline-code';
import { Em } from './emphasis';
import { Img } from './image';
import { UnorderedList, OrderedList, ListItem } from './list';

// Export individual components for explicit uses
export { H1, H2, H3, H4, Paragraph, Link, UnorderedList, OrderedList, ListItem, CodeBlock, InlineCode, Em, Img };

// Export a default object for use with mdx provider
export default {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: Paragraph,
  a: Link,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  code: CodeBlock,
  inlineCode: InlineCode,
  em: Em,
  img: Img,
};
