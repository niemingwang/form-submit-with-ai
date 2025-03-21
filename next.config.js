/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "form-submit-with-ai",
  basePath: "/form-submit-with-ai",
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
