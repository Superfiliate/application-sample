/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const redirects = [
  {
    source: "/",
    destination: "/home",
    permanent: false,
  },
];

if (process.env.NODE_ENV === "development") {
  redirects.push({
    has: [
      {
        type: "host",
        value: "localhost",
      },
    ],
    source: "/:whatever*",
    destination: "http://development.admin.superfiliate.lvh.me:4100/:whatever*",
    permanent: false,
    basePath: false,
  });
}

module.exports = {
  sentry: {
    hideSourceMaps: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return redirects;
  },
};
