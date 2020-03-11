import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Global, css } from '@emotion/core';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <Global
            styles={css`
              html,
              body {
                padding: 3rem 1rem;
                margin: 0;
                background: papayawhip;
                min-height: 100%;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 24px;
              }
            `}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
