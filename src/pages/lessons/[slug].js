import hydrate from "next-mdx-remote/hydrate";
import { slugs, getLessonProps } from "../../content";
import { components } from "../../shortcodes";

export async function getStaticPaths() {
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: await getLessonProps(params.slug) };
}

export default function LessonPage({ source, preset }) {
  const children = hydrate(source, { components });
  return (
    <div>
      {/* <Head>
        <title>{frontMatter.title}</title>
      </Head> */}
      {children}
    </div>
  );
}
