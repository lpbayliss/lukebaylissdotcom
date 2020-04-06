import * as React from 'react';
import { Flex, Box, Heading, Text } from 'rebass';
import styled from '../../utils/styled';
import { ContentText } from '../content-text';

const Wrapper = styled(Flex)`
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
`;

const Footer: React.FunctionComponent = () => (
  <Wrapper as="footer" flexDirection={['column', 'row']} bg="white" color="grey">
    <Box width={['100%', '50%']} px="5" py="4" paddingBottom="0">
      <Heading fontSize="3">This is my space</Heading>
      <ContentText mb="1">
        It is where I place all of my thoughts, ideas, and general ramblings for the world to see.
      </ContentText>
      <ContentText mb="1">
        I also hope to introduce different kinds of media; like short YouTube videos and maybe even live stream some
        experiments.
      </ContentText>
    </Box>
    <Box width={['100%', '50%']} px="5" py="4">
      <Heading fontSize="3">You can also find me at these places</Heading>
      <Text>Github</Text>
      <Text>LinkedIn</Text>
      <Text>Dev.to</Text>
      <Text>YouTube</Text>
      <Text>Instagram</Text>
    </Box>
  </Wrapper>
);

export default Footer;
