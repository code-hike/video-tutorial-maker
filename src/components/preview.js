import { MiniBrowser } from "@code-hike/mini-browser";
import {
  SandpackPreview,
  SandpackProvider,
  useCodeSandboxLink,
} from "@codesandbox/sandpack-react";
import s from "./preview.module.css";

export function Preview({ style, preview, preset, codeFiles }) {
  const files = getFiles(codeFiles);

  const { customSetup: setup, ...props } = preset;
  const customSetup = { ...setup, files: { ...setup?.files, ...files } };

  return props.template === "html" ? (
    <HtmlPreview style={style} files={files} {...preview} />
  ) : (
    <div className={s.preview} style={style}>
      <SandpackProvider {...props} customSetup={customSetup}>
        <InnerPreview style={{ height: "100%" }} {...preview} />
      </SandpackProvider>
    </div>
  );
}

function HtmlPreview({ style, files, ...props }) {
  return (
    <MiniBrowser style={style} {...props}>
      <iframe srcDoc={files["/index.html"].code} />
    </MiniBrowser>
  );
}

function InnerPreview({ style, ...props }) {
  const link = useCodeSandboxLink();
  return (
    <MiniBrowser style={style} loadUrl={link} {...props}>
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
