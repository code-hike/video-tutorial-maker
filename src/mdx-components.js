import { MDXRemote } from "next-mdx-remote";
import React from "react";
import { Lesson } from "./components/lesson";
import { useStepsFromChildren } from "./mdx-to-steps";

export const components = {
  wrapper: Wrapper,
  StepHead: () => null,
};

export const LessonContext = React.createContext({ presetName: null });

function Wrapper({ children }) {
  const steps = useStepsFromChildren({ children });
  const { preset } = React.useContext(LessonContext);

  if (!preset) {
    return <div>Error: Missing preset</div>;
  }
  return <Lesson steps={steps} preset={preset} />;
}

export function LessonMDX({ source, preset }) {
  return (
    <LessonContext.Provider value={{ preset }}>
      <MDXRemote {...source} components={components} />
    </LessonContext.Provider>
  );
}
