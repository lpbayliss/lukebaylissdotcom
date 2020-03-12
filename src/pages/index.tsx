import * as React from 'react';
import { NextPage } from 'next';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { Button } from '../components';

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

const Title = styled.h1<{ textColor: string }>`
  color: ${props => props.textColor};
  animation: ${bounce} 1s ease infinite;
`;

const IndexPage: NextPage = () => {
  return (
    <>
      <Title textColor="red">Hello World!</Title>
      <Button id="hello-button" label="hello-button" name="hello-button">
        Click me?
      </Button>
    </>
  );
};

export default IndexPage;
