import * as React from 'react';
import Link from 'next/link';
import { Box, BoxProps } from 'rebass';
import styled from '../../utils/styled';
import { H3 } from '../markdown';
import { Paragraph } from '../markdown';

const LinkCard = (props: BoxProps): JSX.Element => <Box as="a" {...props} />;

const StyledCard = styled(LinkCard)`
  cursor: pointer;
  min-height: 148px;
  border-radius: 5px;
  background-color: white;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  padding: 32px;
  margin: 8px;
  width: calc(50% - 16px);

  &:hover h3 {
    text-decoration: underline;
  }
`;

type Props = {
  title: string;
  summary: string;
  slug: string;
};

const PostCard = (props: Props): JSX.Element => (
  <Link href={props.slug}>
    <StyledCard>
      <H3>{props.title}</H3>
      <Paragraph>{props.summary}</Paragraph>
    </StyledCard>
  </Link>
);

export default PostCard;
