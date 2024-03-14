import { Heading } from "@chakra-ui/react";
import { MDXComponents } from "@mdx-js/react/lib";

const mdxComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" size="lg" {...props} />,
  h3: (props) => <Heading as="h3" size="md" {...props} />,
} satisfies MDXComponents;

export default mdxComponents;
