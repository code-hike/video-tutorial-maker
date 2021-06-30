import fs from "fs";
import { glob } from "glob";

export function getPreset(name) {
  switch (name) {
    case "html":
      return {
        template: "html",
      };
    case "svelte":
      return {
        customSetup: {
          entry: "/public/index.html",
          environment: "svelte",
          files: getFiles(name),
        },
      };
    case "vue-pose": {
      return {
        customSetup: {
          environment: "vue-cli",
          files: getFiles(name),
        },
      };
    }
    default:
      return {
        template: "react",
      };
  }
}

function getFiles(dir) {
  const dirPath = `./presets/${dir}`;
  const allPaths = glob
    .sync(`${dirPath}/**`, { dot: true, mark: true })
    .filter((path) => !path.endsWith("/"));

  const files = {};
  allPaths.forEach((filePath) => {
    const fileName = filePath.slice(dirPath.length);
    files[fileName] = fs.readFileSync(filePath, "utf8");
  });
  return files;
}
