/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  basePath: process.env.BASEPATH ?? '',
});
