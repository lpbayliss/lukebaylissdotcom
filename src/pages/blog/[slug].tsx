import fs from "fs";
import {
  GetServerSideProps,
  GetStaticPaths,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

import { PageLayout } from "~/components/page-layout";

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
  const files = fs.readdirSync(path.join(process.cwd(), "content", "posts"));
  return {
    paths: files.map((file) => ({
      params: {
        slug: file.replace(/\.mdx$/, ""),
      },
    })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const file = fs.readFileSync(
    path.join(process.cwd(), "content", "posts", `${String(params?.slug)}.mdx`),
    "utf-8",
  );
  const mdxSource = await serialize<
    unknown,
    {
      title: string;
      abstract: string;
      updatedAt: string;
      publishedAt: string;
    }
  >(file, { parseFrontmatter: true });
  return { props: { source: mdxSource } };
}) satisfies GetServerSideProps;

export default BlogPage;
