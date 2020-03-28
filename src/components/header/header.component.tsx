import * as React from 'react';
import Link from 'next/link';
import { Box, Flex, Text } from 'rebass';
import { ScrolledConsumer } from '../is-scrolled';
import styled from '../../utils/styled';
import { css, SerializedStyles } from '@emotion/core';
import { Logo } from '../logo';

const HeaderBox = (props): JSX.Element => <Box as="header" {...props} />;
const FlexNav = (props): JSX.Element => <Flex as="nav" {...props} />;
const Wrapper = styled(FlexNav)<{ isScrolled: boolean }>`
  height: ${(props): string => `${props.theme.sizes.nav}px`};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background 250ms ease-in-out, box-shadow 250ms ease-in-out;
  will-change: background, box-shadow;
  background: ${({ theme }): string => theme.colors.background};

  ${(props): SerializedStyles =>
    props.isScrolled &&
    css`
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
    `};
`;

const NavText = styled(Text)`
  cursor: pointer;
`;

const NavItem: React.FunctionComponent<{ path: string; title: string }> = props => (
  <Box paddingX="2">
    <Link href={props.path} passHref>
      <NavText fontFamily="heading">{props.title}</NavText>
    </Link>
  </Box>
);

type Props = {};

const Header: React.FunctionComponent<Props> = () => {
  return (
    <ScrolledConsumer>
      {(isScrolled): JSX.Element => (
        <HeaderBox>
          <Wrapper isScrolled={isScrolled} py="3">
            <Flex width={1} alignItems="center" justifyContent="center">
              <Logo />
              <Box width="50px" />
              <NavItem path="/about" title="About" />
              <NavItem path="/posts" title="Posts" />
            </Flex>
          </Wrapper>
        </HeaderBox>
      )}
    </ScrolledConsumer>
  );
};

export default Header;
