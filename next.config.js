const withMDX = require('@next/mdx')({
  extension: /\.md|mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['tsx', 'md', 'mdx'],
  webpack: config => {
    config.node = {
      fs: 'empty',
      module: 'empty',
    };
    return config;
  },
});
