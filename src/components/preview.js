import { MiniBrowser } from "@code-hike/mini-browser";
import {
  SandpackPreview,
  SandpackProvider,
  useCodeSandboxLink,
} from "@codesandbox/sandpack-react";
import s from "./preview.module.css";

const preset = { template: "react" };

export function Preview({ style, preview, codeFiles }) {
  const files = getFiles(codeFiles);
  const { customSetup: setup, ...props } = preset;
  const customSetup = { ...setup, files: { ...setup?.files, ...files } };

  return (
    <div className={s.preview} style={style}>
      <SandpackProvider {...props} customSetup={customSetup}>
        <InnerPreview style={{ height: "100%" }} />
      </SandpackProvider>
    </div>
  );
}

function InnerPreview({ style }) {
  const link = useCodeSandboxLink();
  return (
    <MiniBrowser style={style} loadUrl={link}>
      <SandpackPreview
        showNavigator={false}
        showRefreshButton={false}
        showOpenInCodeSandbox={false}
        customStyle={{
          minHeight: "unset",
          height: "100%",
          border: 0,
          margin: 0,
        }}
      />
    </MiniBrowser>
  );
}

function getFiles(codeFiles) {
  const files = {};
  codeFiles.forEach((file) => {
    files["/" + file.name] = {
      code: file.code,
    };
  });
  return files;
}
