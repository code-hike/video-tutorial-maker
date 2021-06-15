import { getAllLessons } from "../content";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: { lessons: getAllLessons() },
  };
}

export default function Index({ lessons }) {
  return (
    <ul>
      <Head>
        <title>Code Hike Video Tutorial Maker</title>
      </Head>
      {lessons.map(({ title, slug }) => (
        <li key={slug}>
          <Link href={`/lessons/${slug}`}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
