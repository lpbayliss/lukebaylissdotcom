import * as React from 'react';
import { default as NextLink } from 'next/link';
import { Link as RebassLink, LinkProps } from 'rebass';
import styled from '../../../utils/styled';
import { SerializedStyles } from '@emotion/core';

const ConditionalWrapper = ({ condition, wrapper, children }): JSX.Element =>
  condition ? wrapper(children) : children;

const StyledLink = styled(RebassLink)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const UniversalLink = (props: LinkProps) => {
  const { href } = props;
  const isInternalLink = !(href.indexOf('//') !== -1);

  return (
    <ConditionalWrapper
      condition={isInternalLink}
      wrapper={(children): JSX.Element => <NextLink href={href}>{children}</NextLink>}
    >
      <StyledLink
        target={!isInternalLink ? '_blank' : undefined}
        rel={!isInternalLink ? 'noopener' : undefined}
        {...props}
      />
    </ConditionalWrapper>
  );
};

const Link = (props: LinkProps): JSX.Element => <UniversalLink color="link" {...props} />;

export default Link;
