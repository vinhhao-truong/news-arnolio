/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    weatherApiKey: "9f8b9baca04462aef7f930222ddf48ac",
    geoApiKey: "e98206d4779f4fcf9a29936092aeed2d",
    newsApiKey: "b997ce83b331408991fafe2ba3e36958",
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

module.exports = nextConfig;
