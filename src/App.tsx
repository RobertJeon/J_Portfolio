/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { PortfolioData } from "./types";
import { defaultPortfolioData } from "./data";
import Navbar from "./components/Navbar";
import AdminPanel from "./components/AdminPanel";
import {
  HeroSection,
  CoreStrengths,
  AboutMe,
  CareerTimeline,
  CaseStudies,
  WorkingStyle,
  ContactSection
} from "./components/Sections";

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem("toss_qa_portfolio_data");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load portfolio data from localStorage", e);
    }
    return defaultPortfolioData;
  });

  const [isAdmin, setIsAdmin] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("toss_qa_portfolio_data", JSON.stringify(data));
    } catch (e) {
      console.error("Failed to save portfolio data to localStorage", e);
    }
  }, [data]);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white pb-16">
      {/* Dynamic top bar notifier for Admin editing state */}
      {isAdmin && (
        <div className="bg-zinc-900 text-white text-xs text-center py-2 px-4 flex items-center justify-center gap-1.5 font-semibold sticky top-0 z-50 shadow-md">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          관리자 편집 모드가 활성화되었습니다. 오른쪽 아래 어드민 설정 창에서 기획 내용을 자유롭게 수정하십시오.
        </div>
      )}

      {/* Navigation */}
      <Navbar isAdmin={isAdmin} />

      {/* Main Content Sections (Single Page Scroll Layout) */}
      <main className="relative">
        {/* SECTION 1. HERO */}
        <HeroSection data={data} />

        {/* SECTION 2. CORE STRENGTH */}
        <CoreStrengths data={data} />

        {/* SECTION 3. ABOUT ME */}
        <AboutMe data={data} />

        {/* SECTION 4. CAREER TIMELINE */}
        <CareerTimeline data={data} />

        {/* SECTION 6. FEATURED PROJECT CASE STUDIES */}
        <CaseStudies data={data} />

        {/* SECTION 7. WORKING STYLE */}
        <WorkingStyle data={data} />

        {/* SECTION 8. CONTACT */}
        <ContactSection data={data} />
      </main>

      {/* Admin Panel manager */}
      <AdminPanel 
        data={data} 
        onChange={setData} 
        isAdmin={isAdmin} 
        setIsAdmin={setIsAdmin} 
      />
    </div>
  );
}
