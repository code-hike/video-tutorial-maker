import { slugs, getLessonProps } from "../../content";
import { Lesson } from "../../components/lesson";

export async function getStaticPaths() {
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: await getLessonProps(params.slug) };
}

export default function LessonPage(props) {
  return <Lesson {...props} />;
}
