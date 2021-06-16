import React from "react";
import { mdxToStep } from "@code-hike/mini-editor";

export function useStepsFromChildren({
  children,
  editorProps = {},
  previewProps = { zoom: 1.4 },
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
