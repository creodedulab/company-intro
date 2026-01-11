import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // <-- 이게 있어야 디자인이 안 깨집니다! (필수)
  basePath: "/company-intro", // 주소 뒤에 붙는 이름
  images: {
    unoptimized: true, // 이게 있어야 이미지가 엑박 없이 나옵니다!
  },
};

export default nextConfig;