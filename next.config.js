/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
    loader: "custom",
  },
  presets: ["@babel/preset-env", "@babel/preset-react"],
};

const withOffline = require("next-offline");

module.exports = withOffline({
  generateInDevMode: true,
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
});
