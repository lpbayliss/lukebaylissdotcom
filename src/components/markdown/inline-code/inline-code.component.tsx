import * as React from 'react';
import { Box, BoxProps } from 'rebass';
import styled from '../../../utils/styled';

// Use 'Text' instead?
const CodeBox = (props: BoxProps): JSX.Element => <Box as="code" fontSize="2" px="4px" py="2px" {...props} />;
const InlineCode = styled(CodeBox)`
  line-height: 1.4;
  font-family: ${({ theme }): string => theme.fonts.monospace};
  border-radius: 3px;
  background-color: #eee;
`;

export default InlineCode;
