import * as React from 'react';
import { Box, Text, TextProps } from 'rebass';
import styled from '../../../utils/styled';

const Wrapper = styled(Box)`
  width: 100%;
  max-width: 35em;
`;

const Paragraph: React.FunctionComponent = (props: TextProps) => (
  <Wrapper>
    <Text marginBottom="3" {...props}></Text>
  </Wrapper>
);

export default Paragraph;
