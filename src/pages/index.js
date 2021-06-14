import { getAllLessons } from "../content";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: { lessons: getAllLessons() },
  };
}

export default function Index({ lessons }) {
  return (
    <ul>
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
