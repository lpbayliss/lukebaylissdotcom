import * as React from 'react';
import { ContentText } from '../content-text';
import { H3 } from '../markdown';
import { Box, Flex } from 'rebass';
import styled from '../../utils/styled';

type ShelfProps = { icon?: React.ComponentType; category?: string; summary?: string; children: React.ReactNode };
const Shelf: React.FunctionComponent<ShelfProps> = ({ icon, category, summary, children }) => {
  const Icon = icon
    ? styled(icon)`
        @media (max-width: ${({ theme }): string => theme.breakpoints[0]}) {
          display: none;
        }

        margin-left: -40px;
        padding-left: 8px;
        padding-right: 8px;
        margin-bottom: ${({ theme }): string => theme.space[3]}px;
        margin-top: ${({ theme }): string => theme.space[4]}px;
      `
    : null;

  return (
    <>
      <Flex flexDirection="row">
        {Icon && <Icon />}
        {category && <H3>{category}</H3>}
      </Flex>
      {summary && <ContentText>{summary}</ContentText>}
      <Box width={['100%', '120%', '180%']} marginLeft={['0', '-10%', '-40%']} marginBottom="4">
        <Flex flexDirection="row" flexWrap="wrap">
          {children}
        </Flex>
      </Box>
    </>
  );
};

export default Shelf;
