import Image from "next/image";

export default function InstructorsPage() {
  const instructors = [
    { img: "ceo.jpg" }, 
    { img: "https://via.placeholder.com/400x500" },
    { img: "ceo2.png" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "ceo3.png" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "ceo4.png" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "ceo5.png" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "ceo6.png" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
  ];

  const allInstructors = [...instructors, ...instructors];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 md:pt-32 md:pb-20 overflow-x-hidden">
      {/* 제목 섹션: 모바일 폰트 크기 조절 */}
      <div className="max-w-6xl mx-auto px-6 mb-10 md:mb-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4 md:mb-6 font-display">
          전문 강사진
        </h1>
        <p className="text-base md:text-xl text-slate-500 break-keep">
          크레오디와 함께하는 검증된 교육 파트너들입니다.
        </p>
      </div>

      {/* 슬라이드 영역: 모바일 터치 최적화 */}
      <div className="w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing group touch-pan-x">
        <div className="py-4 md:py-8 px-4 md:px-[5vw]">
          {/* instructor-grid 애니메이션 유지 */}
          <div className="instructor-grid animate-scroll group-hover:[animation-play-state:paused]">
            {allInstructors.map((ins, idx) => (
              /* 모바일에서 카드 너비를 160px~180px로 조정하여 가독성 향상 */
              <div key={idx} className="w-[170px] sm:w-[200px] md:w-[280px] shrink-0">
                <div className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-md md:shadow-lg transition-all duration-500 hover:shadow-2xl md:hover:scale-105 border border-slate-100 bg-slate-50 relative">
                  <img 
                    src={ins.img} 
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
      
      {/* 안내 문구 모바일 최적화 */}
      <div className="text-center mt-8 md:mt-12 px-6">
        <p className="text-xs md:text-sm text-slate-400 animate-pulse">
          ← 밀어서 더 많은 파트너를 확인하세요 →
        </p>
      </div>
    </div>
  );
}