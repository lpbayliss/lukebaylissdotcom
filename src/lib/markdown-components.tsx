import { Heading } from "@chakra-ui/react";
import { MDXComponents } from "@mdx-js/react/lib";
import { Code } from "bright";

import Link from "~/components/link.component";
import MDXImage from "~/components/mdx-image.component";

const markdownComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" size="lg" {...props} />,
  h3: (props) => <Heading as="h3" size="md" {...props} />,
  a: (props) => <Link {...props} href={props.href ?? ""} />,
  img: (props) => (
    // Usage ![alt text](/image.png?width=500&height=400)
    <MDXImage {...props} src={props.src ?? ""} alt={props.alt ?? ""} />
  ),
  pre: Code,
} satisfies MDXComponents;

export default markdownComponents;
