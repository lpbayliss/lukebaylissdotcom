import * as React from 'react';
import { ContentText } from '../../components';
import { Text, Flex, Heading } from 'rebass';
import styled from '../../utils/styled';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';

const Card = styled(Flex)`
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  border-radius: 5px;

  hover {
    a {
      text-decoration: underline;
    }
  }
`;

type PostcardProps = { title: string; summary: string; slug: string };

const Postcard: React.FunctionComponent<PostcardProps> = props => (
  <Link href={props.slug}>
    <Card
      flexDirection="column"
      bg="white"
      width={['calc(100% - 8px)', 'calc(50% - 16px)', 'calc(33.3% - 16px)']}
      margin={[1, 2]}
      padding={3}
    >
      <Heading color="black">{props.title}</Heading>
      <ContentText color="greylight" mb="1">
        Written on 22/3/2020
      </ContentText>
      <ContentText color="grey">{props.summary}</ContentText>
      <Text as="a" color="primarydark" fontFamily="heading" textAlign="right" marginTop="auto">
        Click to keep reading...
      </Text>
    </Card>
  </Link>
);

export default Postcard;
