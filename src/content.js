import { join } from "path";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import { components } from "./mdx-components";
import { getPreset } from "../presets";

const lessonsPath = path.join(process.cwd(), "lessons");
const lessonsPaths = fs
  .readdirSync(lessonsPath)
  .filter((path) => /\.md$/.test(path));

export const slugs = lessonsPaths.map((path) => path.replace(/\.mdx?$/, ""));

export function getAllLessons() {
  return lessonsPaths.map((lessonPath) => {
    const slug = lessonPath.replace(/\.md$/, "");
    const fullPath = join(lessonsPath, lessonPath);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data["title"],
    };
  });
}

export async function getLessonProps(slug) {
  const lessonFilePath = path.join(lessonsPath, `${slug}.md`);
  const source = fs.readFileSync(lessonFilePath);

  const { content, data } = matter(source);

  const preset = getPreset(data.preset);

  const mdxSource = await serialize(content, {
    components,
  });

  return {
    source: mdxSource,
    title: data.title,
    preset,
  };
}
