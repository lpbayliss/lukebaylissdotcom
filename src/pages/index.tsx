import * as React from 'react';
import { NextPage } from 'next';
import { keyframes } from '@emotion/core';

import { Button } from '../components';
import styled from '../utils/styled';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const Title = styled.h1`
  animation: ${bounce} 1s ease infinite;
`;

const SomeText = styled.div`
  color: ${props => props.theme.colors.primary};
`;

const IndexPage: NextPage = () => {
  return (
    <>
      <Title>Hello World!</Title>
      <SomeText>This is some text</SomeText>
      <Button id="hello-button" label="hello-button" name="hello-button">
        Click me?
      </Button>
    </>
  );
};

export default IndexPage;
