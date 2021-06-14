import hydrate from "next-mdx-remote/hydrate";
import { components } from "../shortcodes";

export function Lesson({ preset, source }) {
  const children = hydrate(source, {
    components,
  });
  return (
    <div>
      {preset}
      <div>{children}</div>
    </div>
  );
}
