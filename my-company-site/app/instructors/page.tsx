"use client";

import Image from "next/image";

export default function InstructorsPage() {
  const prefix = "/company-intro";

  const instructors = [
    { img: "gangsa01.png" }, 
    { img: "https://via.placeholder.com/400x500" },
    { img: "gangsa02.png" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "gangsa03.png" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "gangsa04.png" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "gangsa05.png" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "gangsa06.png" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "gangsa07.png" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "gangsa08.png" },
    { img: "https://via.placeholder.com/400x500" },
  ];

  const allInstructors = [...instructors, ...instructors];

  const getImagePath = (src: string) => {
    return src.startsWith("http") ? src : `${prefix}/${src}`;
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 md:pt-32 md:pb-20 overflow-x-hidden select-none">
      {/* 제목 섹션 */}
      <div className="max-w-6xl mx-auto px-6 mb-10 md:mb-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4 md:mb-6 font-display">
          전문 강사진
        </h1>
        <p className="text-base md:text-xl text-slate-500 break-keep">
          크레오디와 함께하는 검증된 교육 파트너들입니다.
        </p>
      </div>

      {/* 슬라이드 영역 */}
      <div className="w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing group touch-pan-x">
        <div className="py-4 md:py-8 px-4 md:px-[5vw]">
          
          {/* ▼▼▼ [핵심 수정] !grid를 넣어 한 줄 강제 정렬을 깸 + grid-rows-2로 두 줄 만들기 ▼▼▼ */}
          <div className="!grid grid-rows-2 grid-flow-col gap-4 animate-scroll w-max group-hover:[animation-play-state:paused]">
            
            {allInstructors.map((ins, idx) => (
              <div key={idx} className="w-[150px] sm:w-[180px] md:w-[240px] shrink-0">
                
                {/* 1:1 비율(aspect-square) 적용 */}
                <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-md md:shadow-lg transition-all duration-500 hover:shadow-2xl md:hover:scale-105 border border-slate-100 bg-slate-50 relative">
                  <img 
                    src={getImagePath(ins.img)} 
                    alt="Instructor Profile" 
                    className="w-full h-full object-cover pointer-events-none" 
                    loading="eager"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 안내 문구 */}
      <div className="text-center mt-8 md:mt-12 px-6">
        <p className="text-xs md:text-sm text-slate-400 animate-pulse">
          ← 밀어서 더 많은 파트너를 확인하세요 →
        </p>
      </div>
    </div>
  );
}