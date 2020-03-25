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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background 250ms ease-in-out, box-shadow 250ms ease-in-out;
  will-change: background, box-shadow;

  ${(props): SerializedStyles =>
    props.isScrolled &&
    css`
      background: #fff;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
    `};
`;

const NavItem: React.FunctionComponent<{ path: string; title: string }> = props => (
  <Box>
    <Link href={props.path} passHref>
      <Text>{props.title}</Text>
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
            <Box width={1}>
              <Flex alignItems="center" justifyContent="center">
                <Logo />
                <NavItem path="/about" title="About" />
                <NavItem path="/posts" title="Posts" />
              </Flex>
            </Box>
          </Wrapper>
        </HeaderBox>
      )}
    </ScrolledConsumer>
  );
};

export default Header;
