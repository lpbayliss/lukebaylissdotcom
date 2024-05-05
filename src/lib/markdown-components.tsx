import {
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { MDXComponents } from "@mdx-js/react/lib";
import { Code } from "bright";

import Link from "~/components/link.component";
import MDXImage from "~/components/mdx-image.component";

const markdownComponents = {
  h1: (props) => <Heading as="h1" mt="8" mb="6" size="xl" {...props} />,
  h2: (props) => <Heading as="h2" mt="8" mb="6" size="lg" {...props} />,
  h3: (props) => <Heading as="h3" mt="8" mb="6" size="md" {...props} />,
  h4: (props) => <Heading as="h4" mt="8" mb="6" size="sm" {...props} />,
  h5: (props) => <Heading as="h5" mt="8" mb="6" size="xs" {...props} />,
  a: (props) => <Link {...props} href={props.href ?? ""} color="link" />,
  img: (props) => (
    // Usage ![alt text](/image.png?width=500&height=400)
    <MDXImage {...props} src={props.src ?? ""} alt={props.alt ?? ""} />
  ),
  pre: Code,
  ol: (props) => <OrderedList {...props} />,
  ul: (props) => <UnorderedList {...props} />,
  li: (props) => <ListItem {...props} />,
  p: (props) => <Text {...props} pb={6} />,
} satisfies MDXComponents;

export default markdownComponents;
