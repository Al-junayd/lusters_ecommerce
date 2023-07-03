/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  sw: "service-worker.js",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["cdn.sanity.io"],
    loader: "custom",
  },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
});
module.exports = nextConfig;

//--------------------------------------------////

// /** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// const nextConfig = {
//   images: {
//     domains: ["cdn.sanity.io"],
//     loader: "custom",
//   },
//   presets: ["@babel/preset-env", "@babel/preset-react"],
// };

// module.exports = withPWA({
//   ...nextConfig,
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === "development",
//     runtimeCaching,
//     buildExcludes: [/middleware-manifest.json$/],
//   },
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === "development",

// });

// // module.exports = {
// //   images: {
// //     domains: ["cdn.sanity.io"],
// //     loader: "custom",
// //   },
// //   presets: ["@babel/preset-env", "@babel/preset-react"],
// // };
// module.exports = withPWA(nextConfig);
