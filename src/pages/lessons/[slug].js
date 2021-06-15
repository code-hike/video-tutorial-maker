import React from "react";
import Head from "next/head";
import hydrate from "next-mdx-remote/hydrate";
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
  const children = hydrate(source, { components });
  return (
    <LessonContext.Provider value={{ presetName }}>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </LessonContext.Provider>
  );
}
