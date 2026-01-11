import Link from "next/link";

export default function ContentsPage() {
  const adultContents = [
    "팀빌딩", "AI 기초 및 활용", "신입 사원 교육", "오리엔테이션", "문서 작성"
  ];

  const youthContents = [
    "진로 탐색", "고교학점제/탐구보고서/대입", "중소기업의 이해", "면접 및 자소서", 
    "AI 기초 및 활용", "학생회 퍼실리테이션", "창업 캠프", "오리엔테이션", 
    "인성 및 학교폭력", "민주시민교육"
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 페이지 헤더 */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-indigo-900 mb-6">교육 콘텐츠</h1>
          <p className="text-xl text-slate-600">
            크레오디만의 전문적이고 즐거운 맞춤형 프로그램을 소개합니다.
          </p>
        </div>

        {/* 1. 성인(청년, 기업) 섹션 */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">성인 <span className="text-indigo-600 text-lg md:text-xl font-medium">(청년, 기업)</span></h2>
            <div className="flex-grow h-px bg-slate-200"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adultContents.map((title, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 transition">
                  {/* 나중에 이미지를 넣으시면 됩니다 */}
                  <span className="text-sm font-medium">Image 영역</span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-indigo-500 mb-2 uppercase tracking-wider">Adult & Corporate</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    조직의 성장과 개인의 역량 강화를 위한 최적화된 맞춤 교육 솔루션을 제공합니다.
                  </p>
                  <span className="text-indigo-600 font-bold text-sm cursor-pointer hover:underline">프로그램 안내 &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 청소년(진로/진학/캠프) 섹션 */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">청소년 <span className="text-indigo-600 text-lg md:text-xl font-medium">(진로 / 진학 / 캠프)</span></h2>
            <div className="flex-grow h-px bg-slate-200"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youthContents.map((title, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 transition">
                  <span className="text-sm font-medium">Image 영역</span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-indigo-500 mb-2 uppercase tracking-wider">Youth & Education</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    학생들이 스스로 질문하고 자신의 미래를 디자인할 수 있는 즐거운 경험을 선물합니다.
                  </p>
                  <span className="text-indigo-600 font-bold text-sm cursor-pointer hover:underline">프로그램 안내 &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}