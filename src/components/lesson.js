import React from "react";
import { MiniEditor } from "@code-hike/mini-editor";
import { Preview } from "./preview";
import s from "./lesson.module.css";

export function Lesson({ steps, preset }) {
  const [index, setIndex] = React.useState(0);

  const prev = () => setIndex(Math.max(index - 1, 0));
  const next = () => setIndex(Math.min(index + 1, steps.length - 1));

  useKey(37, prev);
  useKey(39, next);

  const step = steps[index];
  return (
    <div className={s.column}>
      <main>
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
      <div className={s.controls}>
        <button onClick={prev} disabled={index == 0}>
          Prev
        </button>
        <div className={s.text}>{step.content}</div>
        <button onClick={next} disabled={index == steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

function useKey(keyCode, callback) {
  React.useEffect(() => {
    const handler = (e) => {
      if (e.keyCode == keyCode) {
        callback();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  });
}
