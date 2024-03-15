import { Container } from "@chakra-ui/react";
import {
  GetServerSideProps,
  GetStaticPaths,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";

import { ArticleGridSection } from "~/components/article-grid-section";
import { AsideGridSection } from "~/components/aside-grid-section";
import { ContentGrid } from "~/components/content-grid";
import { Header } from "~/components/header";
import { PageLayout } from "~/components/page-layout";
import { TableOfContents } from "~/components/table-of-contents";
import fetchContentData from "~/lib/fetch-content-data";
import fetchContentSlugs from "~/lib/fetch-content-slugs";
import mdxComponents from "~/lib/mdx-components";

const BlogPage = (({ source }) => {
  return (
    <PageLayout>
      <Head>
        <title>{source.frontmatter.title}</title>
      </Head>
      <Header />
      <Container maxW="80rem" px="5%" pt="5rem" transition="all .5s">
        <ContentGrid>
          <ArticleGridSection>
            <MDXRemote {...source} components={mdxComponents} />
          </ArticleGridSection>
          <AsideGridSection>
            <TableOfContents headings={source.frontmatter.headings} />
          </AsideGridSection>
        </ContentGrid>
      </Container>
    </PageLayout>
  );
}) satisfies NextPage<InferGetStaticPropsType<typeof getStaticProps>>;

export const getStaticPaths = (() => {
  return {
    paths: fetchContentSlugs("posts").map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  return {
    props: { source: await fetchContentData("posts", String(params?.slug)) },
  };
}) satisfies GetServerSideProps;

export default BlogPage;
