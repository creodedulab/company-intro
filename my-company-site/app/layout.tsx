// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // 👈 방금 만든 Navbar 가져오기

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "크레오디교육연구소",
  description: "꿈을 현실로 디자인하는 진로 교육 전문 기업",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* 네비게이션 바 (모든 페이지 공통 적용) */}
        <Navbar />
        
        {/* 각 페이지 내용 */}
        <main>
          {children}
        </main>

        {/* 푸터 (Footer) - 하단 정보 */}
        <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
          <div className="max-w-6xl mx-auto px-4">
            <p className="mb-2">&copy; 2024 크레오디교육연구소. All rights reserved.</p>
            <p>전북 전주시 덕진구 와룡 2길 15 | 대표: 심명보</p>
          </div>
        </footer>
      </body>
    </html>
  );
}