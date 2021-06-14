import { mdxToStep, MiniEditor } from "@code-hike/mini-editor";
import React from "react";

export const components = {
  wrapper: Wrapper,
  StepHead: () => <div />,
};

function Wrapper({ children }) {
  const steps = useStepsFromChildren({ children });

  const [index, setIndex] = React.useState(0);

  const step = steps[index];
  return (
    <div>
      <button onClick={() => setIndex(index + 1)}>Next</button>
      <MiniEditor
        codeProps={step.codeProps}
        frameProps={step.frameProps}
        {...step.editorProps.contentProps}
      />
    </div>
  );
}

function useStepsFromChildren({
  children,
  editorProps = {},
  previewProps = {},
  preset = {},
  defaultFileName = "App.js",
}) {
  // Assumes a step head like:
  // <StepHead codeProps={{minColumns: 20}} previewProps={{zoom: 1}} editorFrameProps={{width: 200}} >

  const kids = React.Children.toArray(children);
  let prevEditorStep = undefined;
  const steps = [];

  for (let i = 0; i < kids.length; ) {
    const headKid = kids[i];
    const contentKids = [];
    i++;
    while (i < kids.length && kids[i]?.props?.mdxType !== "StepHead") {
      contentKids.push(kids[i]);
      i++;
    }

    const editorStep = mdxToStep(headKid, prevEditorStep, {
      defaultFileName,
    });
    prevEditorStep = editorStep;

    const headProps = headKid?.props;
    const stepPreviewProps = headProps?.previewProps;
    const stepCodeProps = headProps?.codeProps;
    const stepFrameProps = headProps?.editorFrameProps;

    steps.push({
      content: React.createElement(React.Fragment, {
        children: contentKids,
      }),
      editorProps: {
        contentProps: editorStep,
        codeProps: {
          ...editorProps?.codeProps,
          ...stepCodeProps,
        },
        frameProps: {
          ...editorProps?.frameProps,
          ...stepFrameProps,
        },
      },
      previewPreset: preset,
      previewProps: {
        ...previewProps,
        ...stepPreviewProps,
      },
    });
  }

  return steps;
}
