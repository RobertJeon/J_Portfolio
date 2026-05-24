/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { 
  ArrowDown, 
  ArrowRight, 
  Briefcase, 
  Check, 
  Download, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Layers,
  Sparkles,
  Award,
  Terminal,
  Activity,
  Maximize2,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { PortfolioData, CoreStrengthItem, DomainItem, CareerItem, CaseStudyItem, WorkingStyleItem } from "../types";
import { motion } from "motion/react";

/* Anim config - minimal clean micro-animation */
const animReveal = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

interface SectionProps {
  data: PortfolioData;
}

// ----------------------------------------------------------------------------
// 1. HERO SECTION
// ----------------------------------------------------------------------------
export function HeroSection({ data }: SectionProps) {
  const scrollNext = () => {
    const el = document.getElementById("strengths");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center bg-white px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-zinc-100 select-none">
      {/* Micro Grid Background */}
      <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />

      <div className="relative max-w-4xl mx-auto space-y-8 py-16 text-center">
        {/* Large Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-zinc-950 tracking-tight leading-[1.1] text-balance">
          {data.hero.headline}
        </h1>

        {/* Strong Statement Line - Highly emphasized as requested */}
        {data.hero.strongStatement && (
          <div className="relative inline-block py-1 px-4 bg-zinc-950 text-white font-semibold text-sm sm:text-base rounded-lg tracking-tight shadow-md select-none transform hover:scale-[1.01] transition-transform font-sans">
            “{data.hero.strongStatement}”
          </div>
        )}

        {/* Supporting Narrative */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-550 leading-relaxed font-normal">
          {data.hero.subtext}
        </p>

        {/* Keyword Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          {data.hero.tags.filter(Boolean).map((tag, idx) => (
            <span 
              key={idx}
              className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 text-zinc-800 text-[11px] font-semibold rounded-md font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Down Scroll Anchor */}
      <div 
        onClick={scrollNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-zinc-400 hover:text-zinc-650 transition select-none"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// 2. CORE STRENGTH SECTION (Absorbed skills keyword)
// ----------------------------------------------------------------------------
export function CoreStrengths({ data }: SectionProps) {
  // Filter active items
  const activeItems = data.coreStrength.filter(item => item.visible !== false);

  if (activeItems.length === 0) return null;

  return (
    <section id="strengths" className="py-24 bg-zinc-50 border-b border-zinc-250/30 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">Core Strength</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeItems.map((strength, idx) => (
            <div 
              key={strength.id}
              className="bg-white p-6 rounded-xl border border-zinc-200/80 hover:border-zinc-300 hover:shadow-sm transition-all duration-300 space-y-4"
            >
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-blue-600 tracking-wider">0{idx + 1} STRENGTH</div>
                <h3 className="text-sm font-bold text-zinc-950 font-display">{strength.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">{strength.description}</p>
              </div>

              {/* Seamless Skill keyword inside Strength layout block */}
              {strength.skillsKeyword && (
                <div className="pt-2 px-3 py-2 bg-zinc-50 border border-zinc-150 rounded text-[10px] sm:text-xs font-semibold text-zinc-650 font-mono flex items-center gap-1.5">
                  <span className="w-1 h-3 bg-zinc-800 rounded-sm shrink-0" />
                  <span>{strength.skillsKeyword}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// 3. ABOUT ME SECTION (Featuring premium brand and quote)
// ----------------------------------------------------------------------------
export function AboutMe({ data }: SectionProps) {
  return (
    <section id="about" className="py-24 bg-white px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Subtle Left Side Indicator Card */}
          <div className="md:col-span-4 bg-zinc-50 border border-zinc-200 p-6 rounded-xl text-center space-y-4 shadow-sm select-none">
            <div className="w-12 h-12 rounded-full bg-zinc-950 text-white flex items-center justify-center mx-auto shadow-md font-mono text-xs font-bold leading-none">
              QA
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-zinc-900">금융 도메인 품질 수호</div>
              <p className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">User-Focused Testing</p>
            </div>
            <div className="pt-2 border-t border-zinc-150 flex justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="w-2 h-2 rounded-full bg-zinc-250 animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
          </div>

          {/* Right Message Content */}
          <div className="md:col-span-8 space-y-5">
            {data.aboutMe.quote && (
              <div className="text-sm font-semibold text-zinc-950 leading-relaxed font-serif tracking-tight border-l-2 border-zinc-900 pl-4 bg-zinc-50/50 py-2 pr-2">
                “{data.aboutMe.quote}”
              </div>
            )}
            <div className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans whitespace-pre-wrap space-y-4">
              {data.aboutMe.text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// 4. CAREER TIMELINE SECTION (Merged Domain Experience & Career Details)
// ----------------------------------------------------------------------------
export function CareerTimeline({ data }: SectionProps) {
  const activeItems = data.career.filter(item => item.visible !== false);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>(() => {
    // Default-expand the first or latest item for an instant premium scan
    if (activeItems.length > 0) {
      return { [activeItems[0].id]: true };
    }
    return {};
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (activeItems.length === 0) return null;

  // Sorting newest first by starting year parsed from period
  const parseYear = (periodStr: string): number => {
    const parts = periodStr.split("~");
    const startPart = parts[0]?.trim() || "";
    const match = startPart.match(/(\d{4})/);
    return match ? parseInt(match[1], 10) : 0;
  };

  const sortedItems = [...activeItems].sort((a, b) => {
    const yearA = parseYear(a.period);
    const yearB = parseYear(b.period);
    return yearB - yearA;
  });

  return (
    <section id="career" className="py-24 bg-zinc-50 border-y border-zinc-200/50 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">Career Timeline</h2>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl border border-zinc-200 space-y-8 shadow-sm">

          {/* Combined Timeline Tracker */}
          <div className="relative border-l border-zinc-200 ml-3.5 space-y-8 py-1">
            {sortedItems.map((item) => {
              const isOpen = !!expandedIds[item.id];
              return (
                <div key={item.id} className="relative pl-7 group">
                  {/* Visual timeline node */}
                  <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-white transition-all duration-300 ${
                    isOpen 
                      ? "bg-blue-600 scale-125 ring-4 ring-blue-100" 
                      : "bg-zinc-300 group-hover:bg-zinc-900 group-hover:scale-110"
                  }`} />

                  <div className="space-y-3">
                    {/* Interactive Item Header */}
                    <div 
                      onClick={() => toggleExpand(item.id)}
                      className="cursor-pointer flex flex-col sm:flex-row sm:items-start justify-between gap-3 p-3 hover:bg-zinc-50/70 rounded-xl transition-all duration-200 select-none border border-transparent hover:border-zinc-200/50"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs lg:text-sm font-bold text-zinc-950 font-display">{item.company}</span>
                          <span className="px-2 py-0.5 bg-zinc-100 text-zinc-650 text-[10px] font-semibold rounded border border-zinc-200">
                            {item.role}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400 font-bold sm:hidden">{item.period}</span>
                        </div>
                        <p className="text-xs text-zinc-550 font-normal leading-relaxed">{item.service}</p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 self-end sm:self-start">
                        <span className="hidden sm:block text-[11.5px] font-mono font-bold text-zinc-450 mt-1">{item.period}</span>
                        <div className={`p-1.5 rounded-full border transition-all duration-200 shadow-sm ${
                          isOpen 
                            ? "bg-zinc-950 border-zinc-950 text-white" 
                            : "bg-white border-zinc-200 text-zinc-450 hover:text-zinc-800 hover:border-zinc-300"
                        }`}>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                        </div>
                      </div>
                    </div>

                    {/* Expandable detailed outcomes panel */}
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="pl-3 pr-3 overflow-hidden"
                      >
                        <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-xl space-y-4">
                          {/* Service scope */}
                          <div className="space-y-1">
                            <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                              <span className="w-1 h-2.5 bg-zinc-400 rounded-sm" />
                              Service Responsibility
                            </span>
                            <p className="text-xs text-zinc-750 font-normal leading-relaxed font-sans">{item.service}</p>
                          </div>

                          {/* Achievements list styled as highly readable individual cards */}
                          <div className="space-y-2">
                            <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                              <span className="w-1 h-2.5 bg-blue-500 rounded-sm" />
                              Key Achievements & QA Milestones
                            </span>
                            <div className="grid grid-cols-1 gap-2.5">
                              {item.achievements && item.achievements.filter(Boolean).length > 0 ? (
                                item.achievements.filter(Boolean).map((achievement, aIdx) => (
                                  <div 
                                    key={aIdx} 
                                    className="p-3 bg-white border border-zinc-200/80 rounded-lg hover:border-zinc-350 transition-all flex items-start gap-2.5 shadow-xs"
                                  >
                                    <span className="text-blue-500 text-xs mt-0.5 shrink-0 font-bold">•</span>
                                    <p className="text-xs text-zinc-650 leading-relaxed font-sans">{achievement}</p>
                                  </div>
                                ))
                              ) : (
                                <p className="text-[11px] text-zinc-450 italic">설정된 상세 경력 및 정량 수치 기록이 없습니다. 우측 하단 어드민 편집창에서 추가해 보십시오.</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// 5. FEATURED PROJECT CASE STUDIES (KB증권 60%, 더한섬 25%, EQL 15% 기여 비중 표기)
// ----------------------------------------------------------------------------
export function CaseStudies({ data }: SectionProps) {
  const activeItems = data.projects.filter(item => item.visible !== false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (activeItems.length === 0) return null;

  // Protect safe active indexing
  const safeIndex = activeTab >= activeItems.length ? 0 : activeTab;
  const currentProject = activeItems[safeIndex];

  // Reset active image index on tab change
  React.useEffect(() => {
    setActiveImageIndex(0);
  }, [safeIndex]);

  const images = currentProject.imageUrl
    ? currentProject.imageUrl
        .split(/[,\n|]+/)
        .map((img) => img.trim())
        .filter(Boolean)
    : [];

  return (
    <section id="projects" className="py-24 bg-zinc-50 border-y border-zinc-200/50 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">Featured Case Studies</h2>
        </div>

        {/* Dynamic Project Tabs including Weighted % focus tags */}
        <div className="flex bg-white p-1 rounded-xl border border-zinc-200 overflow-x-auto scrollbar-none shadow-sm gap-1">
          {activeItems.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 min-w-[200px] text-left px-4 py-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                safeIndex === idx
                  ? "bg-zinc-950 text-white shadow"
                  : "text-zinc-500 hover:text-zinc-950 hover:bg-zinc-50"
              }`}
            >
              <div className="flex items-center justify-between gap-1.5 mb-1 select-none">
                <span className="text-[9px] font-mono uppercase tracking-widest opacity-60">CASE STUDY 0{idx + 1}</span>
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono leading-none ${safeIndex === idx ? "bg-zinc-800 text-amber-300 font-bold" : "bg-zinc-100 text-zinc-650"}`}>
                  비중 {proj.ratio}
                </span>
              </div>
              <div className="font-bold truncate font-display">{proj.title}</div>
            </button>
          ))}
        </div>

        {/* Narrative Box Content */}
        {currentProject && (
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
            {/* Minimal Header */}
            <div className="px-6 py-4 bg-zinc-950 text-white border-b border-zinc-900 flex justify-between items-center flex-wrap gap-2 text-xs">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block">INVESTIGATIVE PERFORMANCE</span>
                <h3 className="text-sm font-bold mt-0.5">{currentProject.title}</h3>
              </div>
              <div className="px-2 py-0.5 bg-zinc-850 rounded text-zinc-300 font-mono text-[10px] font-semibold uppercase tracking-wider">
                기여도 {currentProject.ratio}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <h4 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight leading-snug">
                {currentProject.subtitle}
              </h4>

              {/* Uploaded View Image & Document Links - Premium Showcase Block */}
              {(images.length > 0 || currentProject.externalLink) && (
                <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-zinc-800 uppercase tracking-widest">
                      <span className="w-1 h-3.5 bg-blue-600 rounded-sm shrink-0" />
                      작업 증명 및 검증 산출물 (Proof of Work)
                    </span>
                    {images.length > 1 && (
                      <span className="text-[10px] font-mono text-zinc-500 font-bold select-none">
                        총 {images.length}장의 스크린샷 ∙ 좌우 스와이프 가능
                      </span>
                    )}
                  </div>

                  <div className="space-y-3.5">
                    {/* View Image Box */}
                    {images.length > 0 ? (
                      <div className="bg-white border border-zinc-200/85 p-3.5 rounded-xl">
                        <span className="text-[10px] text-zinc-400 font-mono font-bold block mb-2 font-mono">실제 검증 화면 / 구성 덤프</span>
                        
                        <div className="relative aspect-[16/10] w-full rounded-lg bg-zinc-100 overflow-hidden border border-zinc-200/60 group shadow-sm flex items-center justify-center select-none">
                          <img 
                            src={images[activeImageIndex]} 
                            alt={`${currentProject.title} image ${activeImageIndex + 1}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-300"
                          />

                          {/* Top Left Slide Number Indicator */}
                          {images.length > 1 && (
                            <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 rounded text-[9px] font-mono font-bold text-white tracking-wider select-none">
                              IMG {activeImageIndex + 1} / {images.length}
                            </div>
                          )}

                          {/* Top Right Maximize Link */}
                          <a 
                            href={images[activeImageIndex]} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="absolute top-3 right-3 p-1.5 bg-black/65 hover:bg-black text-white hover:scale-105 rounded-md cursor-pointer transition-all z-10 flex items-center justify-center"
                            title="원본 이미지 보기"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </a>

                          {/* Floating Chevrons */}
                          {images.length > 1 && (
                            <>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                                }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-zinc-850 hover:scale-105 active:scale-95 shadow-md border border-zinc-200/50 cursor-pointer transition-all z-10"
                                aria-label="Previous image"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                                }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-zinc-850 hover:scale-105 active:scale-95 shadow-md border border-zinc-200/50 cursor-pointer transition-all z-10"
                                aria-label="Next image"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </>
                          )}

                          {/* Bottom Indicator Dots */}
                          {images.length > 1 && (
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xs z-10 select-none">
                              {images.map((_, dotIdx) => (
                                <button
                                  key={dotIdx}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setActiveImageIndex(dotIdx);
                                  }}
                                  className={`h-1.5 rounded-full transition-all duration-300 ${
                                    activeImageIndex === dotIdx ? "w-4 bg-white" : "w-1.5 bg-white/50"
                                  }`}
                                  aria-label={`Go to slide ${dotIdx + 1}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : null}

                    {/* Outer Link Connect Box - ONLY showing reference button */}
                    {currentProject.externalLink && (
                      <div className="flex justify-center pt-2">
                        <a
                          href={currentProject.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 px-6 bg-zinc-900 hover:bg-black text-white text-xs font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer"
                        >
                          <span>참고링크 열기</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Problem vs Challenge split card design */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-100">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest">
                    <span className="w-1 h-3 bg-red-500 rounded-sm shrink-0" />
                    Problem
                  </span>
                  <p className="text-xs text-zinc-650 leading-relaxed bg-red-50/20 p-4 rounded-lg border border-red-100/30">
                    {currentProject.problem}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-500 uppercase tracking-widest">
                    <span className="w-1 h-3 bg-amber-500 rounded-sm shrink-0" />
                    Challenge
                  </span>
                  <p className="text-xs text-zinc-650 leading-relaxed bg-amber-50/10 p-4 rounded-lg border border-amber-100/30">
                    {currentProject.challenge}
                  </p>
                </div>
              </div>

              {/* Investigative Approach step cards */}
              <div className="space-y-3 pt-4 border-t border-zinc-100">
                <span className="inline-block text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mb-1">
                  Approach & Investigative Actions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentProject.approach.filter(Boolean).map((step, sIdx) => (
                    <div key={sIdx} className="p-4 bg-zinc-50 border border-zinc-150/80 rounded-lg text-xs flex gap-3 items-start hover:border-zinc-300 transition-colors">
                      <span className="w-5 h-5 rounded-full bg-zinc-200/80 text-zinc-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                        {sIdx + 1}
                      </span>
                      <p className="text-zinc-700 font-medium leading-relaxed font-sans mt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Result & What I Learned outcomes */}
              <div className="pt-6 border-t border-zinc-155 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-7 space-y-2 bg-blue-50/20 p-5 rounded-xl border border-blue-150/20">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">
                    <span className="w-1 h-3 bg-blue-600 rounded-sm" />
                    Result
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-800 font-medium leading-relaxed font-sans">
                    {currentProject.result}
                  </p>
                </div>

                <div className="md:col-span-5 space-y-2 bg-zinc-50 p-5 rounded-xl border border-zinc-200">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                    <span className="w-1 h-3 bg-zinc-900 rounded-sm" />
                    What I Learned
                  </span>
                  <p className="text-xs text-zinc-600 leading-relaxed italic font-serif">
                    “{currentProject.learned}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// 6. WORKING STYLE SECTION
// ----------------------------------------------------------------------------
export function WorkingStyle({ data }: SectionProps) {
  const activeItems = data.workingStyle.filter(item => item.visible !== false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (activeItems.length === 0) return null;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstItem = container.firstElementChild as HTMLElement;
    if (!firstItem) return;
    const itemWidth = firstItem.offsetWidth + 24; // offsetWidth + gap (24px for gap-6)
    const index = Math.round(container.scrollLeft / itemWidth);
    if (index !== activeIndex && index >= 0 && index < activeItems.length) {
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstItem = container.firstElementChild as HTMLElement;
    if (!firstItem) return;
    const itemWidth = firstItem.offsetWidth + 24; // offsetWidth + gap
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  return (
    <section id="working-style" className="py-24 bg-white px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">Working Style</h2>
          </div>
          
          {/* Slider Controllers */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-50 disabled:opacity-40 disabled:hover:bg-transparent transition cursor-pointer"
              aria-label="Previous style"
            >
              <ChevronLeft className="w-4 h-4 text-zinc-800" />
            </button>
            <button
              onClick={() => scrollToIndex(Math.min(activeItems.length - 1, activeIndex + 1))}
              disabled={activeIndex === activeItems.length - 1}
              className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-50 disabled:opacity-40 disabled:hover:bg-transparent transition cursor-pointer"
              aria-label="Next style"
            >
              <ChevronRight className="w-4 h-4 text-zinc-800" />
            </button>
          </div>
        </div>

        {/* Scrollable track wrapper */}
        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 select-none no-scrollbar scroll-smooth -mx-6 px-6 sm:mx-0 sm:px-0"
          >
            {activeItems.map((style, idx) => (
              <div 
                key={style.id}
                className="flex-shrink-0 w-[80vw] sm:w-[350px] md:w-[280px] snap-start p-6 bg-zinc-50 border border-zinc-200 hover:border-zinc-350 rounded-xl space-y-3 shadow-inner hover:shadow-sm transition-all duration-300"
              >
                <div className="text-[9px] font-mono tracking-wider font-bold text-zinc-400">COLLAB VALUE 0{idx + 1}</div>
                <h3 className="text-xs font-bold text-zinc-950 leading-snug font-display">{style.title}</h3>
                <p className="text-xs text-zinc-550 leading-relaxed font-normal">{style.description}</p>
              </div>
            ))}
          </div>

          {/* Dots indicating scroll position */}
          <div className="flex justify-center gap-1.5 mt-4">
            {activeItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-6 bg-zinc-850" : "w-1.5 bg-zinc-200"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// 7. CONTACT SECTION (Including Embedded minimal file downloaders)
// ----------------------------------------------------------------------------
export function ContactSection({ data }: SectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white px-6 sm:px-8 lg:px-12 text-center rounded-t-[2.5rem] border-t border-zinc-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-2xl mx-auto space-y-10 relative">

        {/* Copy Email Display Card */}
        <div 
          onClick={handleCopyEmail}
          className="bg-zinc-900 border border-zinc-850 hover:border-zinc-700 p-6 rounded-2xl cursor-pointer transition duration-250 select-none group relative max-w-md mx-auto"
        >
          {copied && (
            <div className="absolute top-3 right-3 bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded shadow tracking-wider font-bold animate-bounce">
              COPIED!
            </div>
          )}
          <Mail className="w-5 h-5 text-zinc-400 mx-auto group-hover:text-white transition-colors" />
          <div className="text-xs sm:text-base font-mono font-bold text-zinc-150 select-all group-hover:text-amber-300 transition-colors mt-1">
            {data.contact.email}
          </div>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">이메일 주소 복사하기 (클릭)</p>
        </div>

        {/* Minimal icon connections */}
        <div className="flex justify-center gap-6 text-xs font-mono">
          <a
            href={data.contact.github && data.contact.github.includes("product-qa-toss") ? "https://github.com/RobertJeon/RobertJeon" : `https://${data.contact.github || "github.com/RobertJeon/RobertJeon"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4 text-zinc-500" />
            GitHub
          </a>
        </div>

        {/* Ultimate bottom footer */}
        <div className="pt-10 border-t border-zinc-900 text-[10px] text-zinc-650 font-mono flex flex-col items-center gap-1.5">
          <span>© {new Date().getFullYear()} PRODUCT QA PORTFOLIO. ALL RIGHTS RESERVED.</span>
          <span className="text-zinc-750">Designed with Spatial Contrast and Toss Style Minimal Accent</span>
        </div>
      </div>
    </section>
  );
}
