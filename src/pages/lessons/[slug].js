import React from "react";
import Head from "next/head";
import { slugs, getLessonProps } from "../../content";
import { LessonMDX } from "../../mdx-components";

import "prism-svelte";
import "prismjs/components/prism-typescript";

export async function getStaticPaths() {
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: await getLessonProps(params.slug) };
}

export default function LessonPage({ title, ...props }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <LessonMDX {...props} />
    </>
  );
}
