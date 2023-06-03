// const withPWA = require("next-pwa");

// /** @type {import('next').NextConfig} */
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
//   },
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

// module.exports = {
//   images: {
//     domains: ["cdn.sanity.io"],
//     loader: "custom",
//   },
//   presets: ["@babel/preset-env", "@babel/preset-react"],
// };
module.exports = withPWA(nextConfig);
