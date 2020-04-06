import * as React from 'react';
import Link from 'next/link';
import { Flex, Text } from 'rebass';
import styled from '../../utils/styled';

const LogoText = styled(Text)`
  cursor: pointer;
`;

type Props = {};
const Logo: React.FunctionComponent<Props> = (): JSX.Element => (
  <Flex flexDirection="column" justifyContent="center">
    <Link href="/" passHref>
      <LogoText fontWeight="bold" fontFamily="heading" fontSize="1.5rem" color="black">
        Luke Bayliss
      </LogoText>
    </Link>
  </Flex>
);

export default Logo;
