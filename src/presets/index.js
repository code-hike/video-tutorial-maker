import "prism-svelte";
import "prismjs/components/prism-typescript";

export const presets = {
  html: {
    template: "html",
  },
  react: {
    template: "react",
  },
  svelte: {
    customSetup: {
      entry: "/public/index.html",
      environment: "svelte",
      files: f(require.context("./svelte")),
    },
  },
  lit: {
    customSetup: {
      entry: "/index.html",
      environment: "parcel",
      files: f(require.context("./lit")),
    },
  },
};

function f(ctx) {
  const files = {};
  ctx.keys().forEach((key) => {
    files[key.slice(1)] = ctx(key);
  });
  console.log(files);
  return files;
}
