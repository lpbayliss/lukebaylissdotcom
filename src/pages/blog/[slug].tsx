import {
  GetServerSideProps,
  GetStaticPaths,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";

import { PageLayout } from "~/components/page-layout";
import fetchContentData from "~/lib/fetch-content-data";
import fetchContentSlugs from "~/lib/fetch-content-slugs";

const BlogPage = (({ source }) => {
  return (
    <PageLayout>
      <Head>
        <title>{source.frontmatter.title}</title>
      </Head>
      <MDXRemote {...source} />
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
