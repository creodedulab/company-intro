"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const prefix = "/company-intro";
  const bgImage = `${prefix}/intro-bg.jpg`; 

  const lecturePhotos = [
    { src: `${prefix}/front01.jpg` },
    { src: `${prefix}/front02.jpg` },
    { src: `${prefix}/front03.jpg` },
    { src: `${prefix}/front04.jpg` },
    { src: `${prefix}/front05.jpg` },
    { src: `${prefix}/front06.jpg` },
    { src: `${prefix}/front07.jpg` },
    { src: `${prefix}/front08.jpg` },
    { src: `${prefix}/front09.jpg` },
    { src: `${prefix}/front10.jpg` },
    { src: `${prefix}/front11.jpg` },
    { src: `${prefix}/front12.jpg` },
    { src: `${prefix}/front13.jpg` },
    { src: `${prefix}/front14.jpg` },
  ];

  const infinitePhotos = [...lecturePhotos, ...lecturePhotos];
  const [scrollY, setScrollY] = useState(0);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('contact');
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 10);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="min-h-screen select-none" 
      onContextMenu={(e) => e.preventDefault()} 
      onDragStart={(e) => e.preventDefault()} 
    >
      
      {/* 0. 인트로 섹션 */}
      <div className="relative h-[300vh]"> 
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-40 overflow-hidden bg-white">
          
          {/* 배경 이미지 레이어 (페이드 효과 추가) */}
          <img 
            src={bgImage} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover -z-10" 
            style={{ 
              opacity: Math.max(0, 0.2 - scrollY / 3333),
              transition: 'opacity 0.1s ease-out'
            }}
          />

          <div 
            className="flex flex-col items-center will-change-transform relative z-10"
            style={{ 
              opacity: Math.max(0, 1 - (scrollY - 1500) / 500),
              pointerEvents: scrollY > 2000 ? 'none' : 'auto' 
            }}
          >
            {/* 로고 이미지 */}
            <div 
              className="w-40 h-40 md:w-64 md:h-64 bg-transparent flex items-center justify-center mb-8"
              style={{ transform: `scale(${1 + scrollY / 1000})` }}
            >
              <img 
                src={`${prefix}/logo.png`} 
                alt="CREOD Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            
            <h1 
              className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-center"
              style={{ opacity: Math.max(0, 1 - scrollY / 700) }}
            >
              CREO.D Education Lab
            </h1>
          </div>

          {/* 스크롤 유도 화살표 넛지 */}
          <div 
            className="absolute bottom-10 right-8 md:bottom-12 md:right-12 flex flex-col items-center gap-1 z-50 animate-bounce pointer-events-none"
            style={{ 
              opacity: Math.max(0, 1 - scrollY / 1000),
              transition: 'opacity 0.3s ease-out'
            }}
          >
            <span className="text-[10px] md:text-xs font-bold text-slate-400 tracking-widest">SCROLL</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-6 h-6 md:w-8 md:h-8 text-slate-400"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>

        </div>
      </div>

      {/* 1. 히어로 섹션 */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white -z-10" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-8 border border-indigo-100">
            크레오디교육연구소
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight break-keep">
            꿈을 설계하고, <br className="md:hidden" />성장을 디자인합니다. <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              Create & Design <br className="md:hidden" />Your Dream
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed break-keep">
            질문하고, 탐구하고, 설계하는 배움으로<br className="hidden md:block" />
            성장을 도모하고 개인과 조직의 가능성을 연결합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contents" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-500/25 inline-block text-lg">
              콘텐츠 보러가기
            </Link>
            <a href="#contact" onClick={handleScrollToContact} className="px-8 py-4 bg-white text-slate-700 font-bold border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition inline-block text-lg cursor-pointer">
              문의하기
            </a>
          </div>
        </div>
      </section>

      {/* 2. 핵심 가치 */}
      <section className="py-10 md:py-12 bg-white border-b border-slate-100 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-row justify-between md:justify-around items-start md:items-center gap-2 md:gap-4 text-center">
            <div className="flex flex-col items-center gap-2 group w-1/3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-sm md:text-lg font-bold text-slate-800 break-keep">즐거운 소통</h3>
            </div>
            <div className="hidden md:block w-px h-12 bg-slate-100"></div>
            <div className="flex flex-col items-center gap-2 group w-1/3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">💡</div>
              <h3 className="text-sm md:text-lg font-bold text-slate-800 break-keep">혁신적 아이디어</h3>
            </div>
            <div className="hidden md:block w-px h-12 bg-slate-100"></div>
            <div className="flex flex-col items-center gap-2 group w-1/3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-sm md:text-lg font-bold text-slate-800 break-keep">함께하는 동료</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 강의 현장 스케치 */}
      <section className="py-20 bg-slate-50 overflow-hidden animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">열정 가득 뜨거운 강의 현장</h2>
          <p className="text-slate-500 mt-2">크레오디의 열정 가득한 순간들을 만나보세요.</p>
        </div>
        <div className="relative w-full">
          <div className="flex gap-6 animate-scroll w-max hover:[animation-play-state:paused]">
            {infinitePhotos.map((photo, index) => (
              <div key={index} className="w-[280px] md:w-[400px] h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-md shrink-0 bg-gray-200 border border-slate-200">
                <img 
                  src={photo.src} 
                  alt={`강의 현장 ${index}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 문의하기 섹션 */}
      <section id="contact" className="py-16 md:py-24 bg-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-slate-900 break-keep">함께 성장할 준비가 되셨나요?</h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto break-keep">강의,교육,캠프,자격증과정,강연,강사양성 등<br/>궁금한 점이 있다면 아래 연락처로 문의해주세요.</p>
          <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] shadow-sm border border-slate-100 max-w-2xl mx-auto mb-10">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div className="text-left"><p className="text-xs text-slate-400 font-bold uppercase tracking-wider">대표 전화</p><p className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">010-9659-5120</p></div>
                </div>
                <a href="tel:010-9659-5120" className="w-full md:w-auto px-6 py-3 bg-white border-2 border-slate-200 hover:border-indigo-600 text-slate-700 font-bold rounded-xl transition duration-300 text-center text-sm">통화 연결하기</a>
              </div>
              <div className="w-full h-px bg-slate-200"></div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">이메일 문의</p>
                    <p className="text-base md:text-xl font-bold text-slate-800 tracking-tight whitespace-nowrap">ttingssam@naver.com</p>
                  </div>
                </div>
                <a href="mailto:ttingssam@naver.com" className="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition duration-300 text-center text-sm shadow-md">메일 보내기</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SNS 섹션 */}
      <section className="py-12 bg-white border-t border-slate-100 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-[0.2em] mb-8">Connect with CREOD</h3>
          <div className="flex justify-center items-center gap-6 md:gap-12">
            <a href="https://blog.naver.com/ttingssam" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3"><div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-[#03C75A] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1"><svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/></svg></div><span className="text-[10px] md:text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">블로그</span></a>
            <a href="https://www.instagram.com/creod_edu_lab/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3"><div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-gradient-to-tr group-hover:from-[#f9ce34] group-hover:via-[#ee2a7b] group-hover:to-[#6228d7] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1"><svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div><span className="text-[10px] md:text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">회사 인스타</span></a>
            <a href="https://www.instagram.com/tting_ssam/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3"><div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1"><svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><span className="text-[10px] md:text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">띵쌤 인스타</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}