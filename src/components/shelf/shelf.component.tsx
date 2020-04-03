import * as React from 'react';
import { ContentText } from '../content-text';
import { H3 } from '../markdown';
import { Box, Flex } from 'rebass';

type ShelfProps = { category?: string; summary?: string; children: React.ReactNode };
const Shelf: React.FunctionComponent<ShelfProps> = ({ category, summary, children }) => (
  <>
    {category && <H3>{category}</H3>}
    {summary && <ContentText>{summary}</ContentText>}
    <Box width={['100%', '120%', '180%']} marginLeft={['0', '-10%', '-40%']} marginBottom="4">
      <Flex flexDirection="row" flexWrap="wrap">
        {children}
      </Flex>
    </Box>
  </>
);

export default Shelf;
