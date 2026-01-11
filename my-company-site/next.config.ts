import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  // ⚠️ 중요: 아래 '/company-intro'는 방금 GitHub에서 만든 저장소 이름과 똑같아야 합니다!
  // 만약 다른 이름으로 만드셨다면 그 이름으로 바꿔주세요. (앞에 슬래시 '/' 필수)
  basePath: "/company-intro",
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;