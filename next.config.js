const fs = require("fs");

const version = fs.readFileSync("./.version", "utf8");
const lastUpdatedAt = fs.readFileSync("./.last-updated", "utf8");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'books.google.com',
      'images.igdb.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    NEXT_PUBLIC_PACKAGE_VERSION: version,
    NEXT_PUBLIC_LAST_UPDATED_AT: lastUpdatedAt,
  },
}

module.exports = nextConfig
