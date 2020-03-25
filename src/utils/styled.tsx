import styled, { CreateStyled } from '@emotion/styled';

// TODO: Move to a scale approach - https://styled-system.com/theme-specification
export type Theme = {
  colors: { [key: string]: string };
  breakpoints: string[];
  fontSizes: number[];
  space: { [key: string]: string | number };
  fonts: { [key: string]: string | string[] };
  fontWeights: { [key: string]: number };
  lineHeights: { [key: string]: number };
  shadows: { [key: string]: string };
  variants: {};
  sizes: { [key: string]: string | number };
};

export const theme: Theme = {
  colors: {
    primary: 'blue',
  },
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: {
    small: 16,
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {},
  sizes: {
    nav: 65,
  },
};

export default styled as CreateStyled<Theme>;
