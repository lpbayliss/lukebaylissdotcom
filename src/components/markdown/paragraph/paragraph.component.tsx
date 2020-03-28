import * as React from 'react';
import { Box, Text, TextProps } from 'rebass';
import styled from '../../../utils/styled';

const Wrapper = styled(Box)`
  width: 100%;
  max-width: 35em;
`;

const Paragraph: React.FunctionComponent = (props: TextProps) => (
  <Wrapper>
    <Text marginBottom="4" lineHeight="1.8" fontFamily="body" fontSize={3} {...props} />
  </Wrapper>
);

export default Paragraph;
