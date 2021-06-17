import { join } from "path";
import path from "path";
import React from "react";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import { components } from "./shortcodes";

export const LESSONS_PATH = path.join(process.cwd(), "lessons");
export const lessonsPaths = fs
  .readdirSync(LESSONS_PATH)
  .filter((path) => /\.md$/.test(path));

export const slugs = lessonsPaths.map((path) => path.replace(/\.mdx?$/, ""));

export function getAllLessons() {
  return lessonsPaths.map((lessonPath) => {
    const slug = lessonPath.replace(/\.md$/, "");
    const fullPath = join(LESSONS_PATH, lessonPath);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data["title"],
    };
  });
}

export async function getLessonProps(slug) {
  const lessonFilePath = path.join(LESSONS_PATH, `${slug}.md`);
  const source = fs.readFileSync(lessonFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    components,
  });

  return {
    source: mdxSource,
    presetName: data.preset,
    title: data.title,
  };
}
