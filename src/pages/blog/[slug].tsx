import { Box, Grid, GridItem } from "@chakra-ui/react";
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
import mdxComponents from "~/lib/mdx-components";

const BlogPage = (({ source }) => {
  return (
    <PageLayout>
      <Head>
        <title>{source.frontmatter.title}</title>
      </Head>
      <Grid templateColumns={["1.5fr", null, "1.5fr 1fr", "2.5fr 1fr"]}>
        <GridItem>
          <MDXRemote {...source} components={mdxComponents} />
        </GridItem>
        <GridItem
          as="aside"
          px={8}
          pb={8}
          border="1px solid"
          borderColor="gray.300"
          borderRadius="30px"
          gridColumnEnd={[1, null, 3]}
          gridColumnStart={[1, null, 2]}
          gridRowEnd={[1, null, 1]}
          gridRowStart={[1, null, 2]}
        >
          <Box pt="10">Table of Contents</Box>
        </GridItem>
      </Grid>
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
