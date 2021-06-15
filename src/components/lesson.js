import React from "react";
import { MiniEditor } from "@code-hike/mini-editor";
import { Preview } from "./preview";

export function Lesson({ steps, preset }) {
  const [index, setIndex] = React.useState(0);

  const step = steps[index];
  return (
    <div>
      <main
        style={{
          "--width": "min(1280px, 100vw)",
          margin: "0 auto",
          width: "var(--width)",
          height: "calc(var(--width) * 1080 / 1920)",
          outline: "4px dashed #f22b",
          background: "#9eb2d8",
          padding: 8,
          display: "flex",
        }}
      >
        <MiniEditor
          codeProps={step.codeProps}
          frameProps={{
            style: { flex: 2, height: "auto", margin: 8 },
          }}
          {...step.editorProps.contentProps}
        />
        <Preview
          style={{ flex: 1, margin: 8, height: "auto" }}
          preset={preset}
          preview={step.previewProps}
          codeFiles={step.editorProps.contentProps.files}
        />
      </main>
      <button onClick={() => setIndex(index + 1)}>Next</button>
    </div>
  );
}
