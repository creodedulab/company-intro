import Link from "next/link";

export default function SatisfactionPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 1. 페이지 헤더 (대표님 멘트 적용) */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 tracking-tight">만족도 조사</h1>
          
          <div className="bg-indigo-50 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 italic">
              "오늘의 배움은 어떠셨나요?"
            </h2>
            <div className="text-lg md:text-xl text-slate-700 leading-relaxed space-y-2">
              <p>여러분의 <strong>‘꿈을 만들고, 디자인하는 과정’</strong>을</p>
              <p>크레오디와 함께해 주셔서 진심으로 감사합니다.</p>
              <div className="pt-4 text-slate-600 font-medium">
                <p>아래에 해당하는 버튼을 선택하신 후,</p>
                <p>여러분의 소중한 경험과 의견을 남겨주세요.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 만족도 조사 버튼 영역 (2컬럼) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* 왼쪽: 성인반 */}
          <div className="bg-white border-2 border-slate-100 rounded-3xl p-10 text-center hover:border-indigo-200 hover:shadow-2xl transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🏢</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">성인반</h3>
            <p className="text-slate-500 mb-8 font-medium">청년 · 기업 · 교직원 과정</p>
            
            <Link 
              href="https://여기에_성인반_링크_입력" 
              target="_blank"
              className="inline-block w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg transition-colors"
            >
              성인반 설문 참여하기 &rarr;
            </Link>
          </div>

          {/* 오른쪽: 청소년반 */}
          <div className="bg-white border-2 border-slate-100 rounded-3xl p-10 text-center hover:border-indigo-200 hover:shadow-2xl transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎒</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">청소년반</h3>
            <p className="text-slate-500 mb-8 font-medium">초 · 중 · 고 · 진로 캠프 과정</p>
            
            <Link 
              href="https://여기에_청소년반_링크_입력" 
              target="_blank"
              className="inline-block w-full py-4 bg-white text-indigo-600 border-2 border-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors"
            >
              청소년반 설문 참여하기 &rarr;
            </Link>
          </div>

        </div>

        {/* 3. 안내 문구 */}
        <div className="mt-20 text-center text-slate-400 text-sm">
          <p>여러분의 소중한 의견은 크레오디의 더 나은 배움을 설계하는 데 큰 힘이 됩니다.</p>
        </div>

      </div>
    </div>
  );
}