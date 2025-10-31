/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://growthwayz.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './public',
  additionalPaths: async (config) => [
    await config.transform(config, '/'), // ensures homepage is added
  ],
};
