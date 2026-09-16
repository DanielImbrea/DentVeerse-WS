/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/privacy", destination: "/confidentialitate", permanent: true },
      { source: "/terms", destination: "/termeni", permanent: true },
    ];
  },
};

module.exports = nextConfig;
