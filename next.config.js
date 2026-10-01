/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
      {
        source: "/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/privacy", destination: "/confidentialitate", permanent: true },
      { source: "/terms", destination: "/termeni", permanent: true },
    ];
  },
};

module.exports = nextConfig;
