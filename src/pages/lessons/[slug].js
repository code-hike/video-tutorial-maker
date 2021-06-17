import React from "react";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { slugs, getLessonProps } from "../../content";
import { components, LessonContext } from "../../shortcodes";

export async function getStaticPaths() {
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: await getLessonProps(params.slug) };
}

export default function LessonPage({ source, presetName, title }) {
  return (
    <LessonContext.Provider value={{ presetName }}>
      <Head>
        <title>{title}</title>
      </Head>
      <MDXRemote {...source} components={components} />
    </LessonContext.Provider>
  );
}
