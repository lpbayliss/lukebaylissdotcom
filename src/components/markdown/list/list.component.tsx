import * as React from 'react';
import { Box, Text, BoxProps, TextProps } from 'rebass';
import styled from '../../../utils/styled';

const BaseList = styled(Box)`
  padding-left: 1em;
  list-style: initial;
  list-style-position: outside;
`;

const UnorderedList = (props: BoxProps): JSX.Element => <BaseList as="ul" pb="3" {...props} />;
const OrderedBaseList = (props: BoxProps): JSX.Element => <BaseList as="ol" pb="3" {...props} />;
const OrderedList = styled(OrderedBaseList)`
  list-style: decimal;
`;
const ListItem = (props: TextProps): JSX.Element => (
  <Text py="1" lineHeight="1.8" fontFamily="body" fontSize={3} as="li" {...props} />
);

export { UnorderedList, OrderedList, ListItem };
