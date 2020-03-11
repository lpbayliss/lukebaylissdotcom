const glob = require('glob');

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
  exportPathMap: async () => {
    const routes = {
      '/': { page: '/' },
    };

    const posts = glob.sync('src/posts/**/*.md');
    const slugs = posts.map(file =>
      file
        .split('/')[2]
        .replace(/ /g, '-')
        .slice(0, -3)
        .trim(),
    );

    slugs.forEach(slug => {
      routes[`/blog/${slug}`] = { page: '/blog/[slug]', query: { slug } };
    });

    return routes;
  },
};
