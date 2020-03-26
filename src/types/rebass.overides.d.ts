import { InterpolationWithTheme } from '@emotion/core';

declare module 'rebass' {
  interface FlexProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<any>;
  }
  interface BoxProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<any>;
  }
  interface TextProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<any>;
  }
  interface HeadingProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<any>;
  }
  interface LinkProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<any>;
  }
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<any>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: InterpolationWithTheme<any>;
    }
  }
}
