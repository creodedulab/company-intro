import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* 1. 네비게이션 바 */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-indigo-900">크레오디교육연구소</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="hover:text-indigo-600 transition">회사 소개</Link>
              <Link href="#services" className="hover:text-indigo-600 transition">서비스</Link>
              <Link href="#contact" className="hover:text-indigo-600 transition">문의하기</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. 히어로 섹션 (메인 배너) */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            꿈을 설계하고, 성장을 디자인합니다. <br/>
            <span className="text-indigo-600">Create&Design Your Dream</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            질문하고, 탐구하고, 설계하는 배움으로
            전 생애의 성장을 연구하고 개인과 조직의 가능성을 연결합니다.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition shadow-lg">
              서비스 알아보기
            </button>
            <button className="px-8 py-3 bg-white text-indigo-600 font-bold border border-indigo-200 rounded-lg hover:bg-slate-50 transition">
              문의하기
            </button>
          </div>
        </div>
      </section>

      {/* 3. 서비스 소개 (3단 컬럼) */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">우리의 핵심 가치</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 카드 1 */}
            <div className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-3">빠른 성장 지원</h3>
              <p className="text-slate-600">
                체계적인 프로세스로 고객사의 비즈니스 속도를 높여드립니다.
              </p>
            </div>
            {/* 카드 2 */}
            <div className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
                💡
              </div>
              <h3 className="text-xl font-bold mb-3">혁신적인 솔루션</h3>
              <p className="text-slate-600">
                기존의 틀을 깨는 창의적인 방법으로 문제를 해결합니다.
              </p>
            </div>
            {/* 카드 3 */}
            <div className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-3">신뢰받는 파트너</h3>
              <p className="text-slate-600">
                언제나 고객의 입장에서 생각하며 끝까지 함께합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 푸터 */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-white font-bold text-lg">COMPANY NAME</span>
          </div>
          <div className="text-sm">
            © 2025 Company Name. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}