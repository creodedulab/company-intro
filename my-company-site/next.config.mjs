/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // ▼▼▼ 여기가 핵심입니다! ▼▼▼
  // 만약 basePath: '/company-intro' <-- 이런 줄이 있다면 무조건 지우세요!
  // assetPrefix <-- 이런 것도 있으면 지우세요!
  
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;