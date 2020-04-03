import * as React from 'react';
import { ContentText } from '../../components';
import { Text, Flex, Heading } from 'rebass';
import styled from '../../utils/styled';
import Link from 'next/link';

const CardShadow = styled(Flex)`
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  border-radius: 5px;
`;

type PostcardProps = { title: string; summary: string; slug: string };

const Postcard: React.FunctionComponent<PostcardProps> = props => (
  <Link href={props.slug}>
    <CardShadow
      flexDirection="column"
      bg="background"
      width={['calc(100% - 8px)', 'calc(50% - 16px)', 'calc(33.3% - 16px)']}
      margin={[1, 2]}
      padding={3}
    >
      <Heading>{props.title}</Heading>
      <ContentText>{props.summary}</ContentText>
      <Text fontFamily="heading" textAlign="right" marginTop="auto">
        Click to read more...
      </Text>
    </CardShadow>
  </Link>
);

export default Postcard;
