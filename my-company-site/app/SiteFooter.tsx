"use client";

import React from "react";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 text-sm border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        
        {/* 1. 왼쪽: 브랜드 로고 & 슬로건 */}
        <div className="w-full md:w-1/3">
          <h2 className="text-white text-xl font-bold mb-3">CREO.D Education Lab</h2>
          <p className="leading-relaxed text-slate-500 break-keep">
            질문하고 탐구하며 나만의 꿈을 디자인하는<br className="hidden md:block" /> 교육을 지향합니다.
          </p>
        </div>

        {/* 2. 오른쪽: Contact (메뉴 자리를 차지하며 넓게 사용) */}
        <div className="w-full md:w-2/3">
          <h3 className="text-white font-bold mb-4 md:mb-2">Contact</h3>
          
          {/* 연락처 정보를 2열로 배치하여 높이를 줄임 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
            
            {/* 첫 번째 줄 왼쪽 */}
            <div>
              <span className="font-bold text-slate-500 inline-block w-10">대표</span>
              <span>심명보</span>
            </div>

            {/* 첫 번째 줄 오른쪽 (여기로 이동!) */}
            <div>
              <span className="font-bold text-slate-500 inline-block w-12">Tel</span>
              <span>010-9659-5120</span>
            </div>

            {/* 두 번째 줄 왼쪽 */}
            <div>
              <span className="font-bold text-slate-500 inline-block w-10">주소</span>
              <span>전북 전주시 덕진구 와룡 2길 15</span>
            </div>

            {/* 두 번째 줄 오른쪽 (여기로 이동!) */}
            <div>
              <span className="font-bold text-slate-500 inline-block w-12">Email</span>
              <span>ttingssam@naver.com</span>
            </div>

          </div>
        </div>

      </div>

      {/* 하단 카피라이트 */}
      <div className="max-w-6xl mx-auto px-6 pt-8 mt-4 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
        <p>&copy; {new Date().getFullYear()} CREO.D Education Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}