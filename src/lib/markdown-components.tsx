import { MDXComponents } from "@mdx-js/react/lib";
import { Code } from "bright";

import CardCollection from "~/components/card-collection";
import MDXImage from "~/components/mdx-image.component";

const markdownComponents = {
  h1: (props) => <h1 className="mb-6 mt-8 text-3xl" {...props} />,
  h2: (props) => <h2 className="mb-6 mt-8 text-2xl" {...props} />,
  h3: (props) => <h3 className="mb-6 mt-8 text-xl" {...props} />,
  h4: (props) => <h4 className="mb-6 mt-8 text-lg" {...props} />,
  h5: (props) => <h5 className="text-md mb-6 mt-8" {...props} />,
  a: (props) => <a {...props} className="text-purple-800" />,
  img: (props) => (
    // Usage ![alt text](/image.png?width=500&height=400)
    <MDXImage {...props} src={props.src ?? ""} alt={props.alt ?? ""} />
  ),
  pre: Code,
  p: (props) => <p className="pb-6" {...props} />,
  CardCollection,
} satisfies MDXComponents;

export default markdownComponents;
