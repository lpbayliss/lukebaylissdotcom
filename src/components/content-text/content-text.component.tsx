import * as React from 'react';
import { Text, TextProps } from 'rebass';

const ContentText: React.FunctionComponent<TextProps> = props => (
  <Text marginBottom="4" lineHeight="1.8" fontFamily="heading" {...props} />
);

export default ContentText;
