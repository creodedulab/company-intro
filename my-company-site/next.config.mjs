/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 깃허브 페이지 배포 필수 설정
  basePath: '/company-intro', // 대표님 홈페이지 주소 뒤에 붙는 경로
  assetPrefix: '/company-intro', // CSS나 이미지를 불러오는 경로
  images: {
    unoptimized: true, // 깃허브 페이지에서 이미지가 보이게 하는 설정
  },
  trailingSlash: true, // 페이지 이동 시 404 오류 방지 
};

export default nextConfig;