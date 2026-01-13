/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/company-intro",
  images: {
    unoptimized: true,
  },
  
  // ▼▼▼ eslint 설정은 지우고, 이것만 남겨두세요! ▼▼▼
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;