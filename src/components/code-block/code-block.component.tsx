import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula as style } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = { value: string; language?: string };

const CodeBlock: React.FunctionComponent<Props> = ({ value, language = null }) => (
  <SyntaxHighlighter language={language} style={style}>
    {value}
  </SyntaxHighlighter>
);

export default CodeBlock;
