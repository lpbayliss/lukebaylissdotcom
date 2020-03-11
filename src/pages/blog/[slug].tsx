import * as React from 'react';
import { NextPage } from 'next';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

const Title = styled.h1<{ textColor: string }>`
  color: ${props => props.textColor};
`;

const BlogPage: NextPage = (props: any) => {
  console.log(props.content);
  return (
    <>
      <Title textColor="red">{props.frontmatter.title}</Title>
      <ReactMarkdown source={props.markdownBody} />
    </>
  );
};

BlogPage.getInitialProps = async (ctx): Promise<any> => {
  const { slug } = ctx.query;

  const content = await import(`../../posts/${slug}.md`);
  const parsed = matter(content.default);

  const markdownBody = parsed.content;
  const frontmatter = parsed.data;

  return {
    markdownBody,
    frontmatter,
  };
};

export default BlogPage;
