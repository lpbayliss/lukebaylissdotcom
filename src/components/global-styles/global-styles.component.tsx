import * as React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import { useTheme } from 'emotion-theming';
import { Theme } from '../../utils/styled';

const StyleReset = (): JSX.Element => (
  <Global
    styles={css`
      ${emotionNormalize}
    `}
  />
);

const GlobalStyles = (): JSX.Element => {
  const theme = useTheme<Theme>();

  const styles = css`
    html,
    body {
      background: ${theme.colors.background};
    }
  `;

  return <Global styles={styles} />;
};

export default GlobalStyles;
export { StyleReset };
