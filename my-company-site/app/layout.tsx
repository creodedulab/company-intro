import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 1. 검색 결과에 나올 제목과 설명
  title: "크레오디교육연구소 | 꿈을 설계하고 성장을 디자인합니다",
  description: "진로교육, 취업캠프, 창업교육, 강사양성, 띵쌤과 함께하는 크레오디교육연구소 공식 홈페이지입니다. 전국 출강 가능.",
  
  // 2. 검색 키워드 (사람들이 이걸로 검색하면 나오길 바라는 단어들)
  keywords: ["크레오디", "크레오디교육연구소", "띵쌤", "진로교육", "진로강사", "취업캠프", "강사섭외", "기업교육"],
  
  // 3. 브라우저 탭 아이콘
  icons: {
    icon: "/company-intro/logo.png",
  },

  // 4. 카톡/페이스북 공유 시 뜨는 카드 설정
  openGraph: {
    title: "크레오디교육연구소",
    description: "꿈을 설계하고 성장을 디자인합니다. (대표: 띵쌤)",
    url: "https://ttingssam.github.io/company-intro", 
    siteName: "크레오디교육연구소",
    images: [
      {
        url: "/company-intro/intro-bg.jpg", 
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },

  // 5. 검색엔진 소유권 인증 (여기에 암호를 넣습니다!)
  verification: {
    google: "b2lI00I5M2nPKvGuHbX635JuslNuy_mwU0EQVwXlyTk", // 대표님이 찾으신 구글 암호 적용 완료!
    other: {
      "naver-site-verification": "", // 네이버 코드는 나중에 찾으면 여기에 넣으면 됩니다.
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}