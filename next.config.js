/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/workflows/run",
        destination: "https://wf.zhycit.com/v1/workflows/run",
      },
    ];
  },
};

module.exports = nextConfig;
