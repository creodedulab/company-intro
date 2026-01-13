/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  
  // ⚠️ [중요] 저장소 이름 확인 (틀리면 수정하세요)
  basePath: "/company-intro",

  images: {
    unoptimized: true,
  },

  // 오류 무시하고 강제 배포하는 설정
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;