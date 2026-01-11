import Image from "next/image";

export default function InstructorsPage() {
  // 데이터에서 field 항목도 아예 삭제했습니다.
  const instructors = [
    { img: "/ceo.jpg" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
    { img: "https://via.placeholder.com/400x500" },
  ];

  // 무한 루프용 복사
  const allInstructors = [...instructors, ...instructors];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 mb-16 text-center">
        <h1 className="text-4xl font-bold text-indigo-900 mb-6 font-display">전문 강사진</h1>
        <p className="text-xl text-slate-500">
          크레오디와 함께하는 검증된 교육 파트너들입니다.
        </p>
      </div>

      {/* 텍스트가 절대 나올 수 없는 사진 전용 슬라이드 */}
      <div className="w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing group">
        <div className="py-5">
          <div className="instructor-grid animate-scroll group-hover:[animation-play-state:paused]">
            {allInstructors.map((ins, idx) => (
              <div key={idx} className="w-[220px] md:w-[280px]">
                {/* 텍스트 박스(div)를 아예 없애고 사진 박스만 남겼습니다. */}
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 border border-slate-100 bg-slate-50">
                  <img 
                    src={ins.img} 
                    alt="Instructor" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <p className="text-sm text-slate-400">← 좌우 드래그로 더 많은 파트너를 확인하세요 →</p>
      </div>
    </div>
  );
}