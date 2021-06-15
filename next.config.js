module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /src\/presets\/.+\/.*/,
      type: "asset/source",
    });
    return config;
  },
};
