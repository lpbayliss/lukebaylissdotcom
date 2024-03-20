import {
  Heading,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { MDXComponents } from "@mdx-js/react/lib";
import { Code } from "bright";

import Link from "~/components/link.component";
import MDXImage from "~/components/mdx-image.component";

const markdownComponents = {
  h1: (props) => <Heading as="h1" mt="4" mb="2" size="xl" {...props} />,
  h2: (props) => <Heading as="h2" mt="4" mb="2" size="lg" {...props} />,
  h3: (props) => <Heading as="h3" mt="4" mb="2" size="md" {...props} />,
  h4: (props) => <Heading as="h4" mt="4" mb="2" size="sm" {...props} />,
  h5: (props) => <Heading as="h5" mt="4" mb="2" size="xs" {...props} />,
  a: (props) => <Link {...props} href={props.href ?? ""} color="link" />,
  img: (props) => (
    // Usage ![alt text](/image.png?width=500&height=400)
    <MDXImage {...props} src={props.src ?? ""} alt={props.alt ?? ""} />
  ),
  pre: Code,
  ol: (props) => <OrderedList {...props} />,
  ul: (props) => <UnorderedList {...props} />,
  li: (props) => <ListItem {...props} />,
} satisfies MDXComponents;

export default markdownComponents;
