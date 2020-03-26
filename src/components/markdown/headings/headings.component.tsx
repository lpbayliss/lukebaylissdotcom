import * as React from 'react';
import { Heading, HeadingProps } from 'rebass';

const Base = (props: HeadingProps): JSX.Element => (
  <Heading lineHeight="heading" fontFamily="heading" alignSelf="flex-start" {...props} />
);

const H1 = (props: HeadingProps): JSX.Element => <Base as="h1" {...props} />;
const H2 = (props: HeadingProps): JSX.Element => <Base as="h2" fontSize="5" mb="4" mt="5" {...props} />;
const H3 = (props: HeadingProps): JSX.Element => <Base as="h3" fontSize="4" mb="3" mt="4" {...props} />;
const H4 = (props: HeadingProps): JSX.Element => <Base as="h4" fontSize="2" mb="3" mt="3" {...props} />;

export { H1, H2, H3, H4 };
