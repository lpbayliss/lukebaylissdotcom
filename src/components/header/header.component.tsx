import * as React from 'react';
import Link from 'next/link';
import { Box, Flex, Text, FlexProps } from 'rebass';
import { ScrolledConsumer } from '../is-scrolled';
import styled from '../../utils/styled';
import { css } from '@emotion/core';

const Logo = props => <Text>Luke Bayliss</Text>;

const HeaderBox = props => <Box as="header" {...props} />;
const FlexNav = props => <Flex as="nav" {...props} />;

const Wrapper = styled(FlexNav)<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background 250ms ease-in-out, box-shadow 250ms ease-in-out;
  will-change: background, box-shadow;

  ${props =>
    props.isScrolled &&
    css`
      background: #fff;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
    `};
`;

const NavItem: React.FunctionComponent<{ path: string; title: string }> = props => (
  <Box>
    <Link prefetch href={props.path} passHref>
      <Text>{props.title}</Text>
    </Link>
  </Box>
);

type Props = {};

const Header: React.FunctionComponent<Props> = () => {
  return (
    <ScrolledConsumer>
      {isScrolled => (
        <HeaderBox>
          <Wrapper isScrolled={isScrolled}>
            <Logo />
            <NavItem path="/about" title="About" />
            <NavItem path="/posts" title="Posts" />
          </Wrapper>
        </HeaderBox>
      )}
    </ScrolledConsumer>
  );
};

export default Header;
