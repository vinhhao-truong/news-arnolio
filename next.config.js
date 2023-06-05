/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    weatherApiKey: "9f8b9baca04462aef7f930222ddf48ac",
    geoApiKey: "e98206d4779f4fcf9a29936092aeed2d",
    newsApiKey: "5c2a79c7-7a7d-41e6-9c39-18093e85fc43",
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "https", hostname: "yimg.com" },
      { protocol: "http", hostname: "**" },
    ],
  },
};

module.exports = nextConfig;
