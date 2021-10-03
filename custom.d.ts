/// <reference types="next" />
/// <reference types="next/types/global" />
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      // eslint-disable-next-line prettier/prettier
      use: ["@svgr/webpack"]
    });

    return config;
  },
};
