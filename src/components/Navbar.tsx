/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, ShieldAlert, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  isAdmin: boolean;
}

export default function Navbar({ isAdmin }: NavbarProps) {
  const [activeAnchor, setActiveAnchor] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "hero", name: "소개" },
    { id: "strengths", name: "핵심역량" },
    { id: "about", name: "철학" },
    { id: "career", name: "커리어 타임라인" },
    { id: "projects", name: "해결사례" },
    { id: "working-style", name: "협업방식" },
    { id: "contact", name: "연락처" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveAnchor(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 z-30 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Title */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <span className="h-6 w-1 bg-zinc-900 rounded-full" />
            <div className="text-sm font-bold tracking-tight text-zinc-900">
              UpLog <span className="text-zinc-500 font-medium">Portfolio</span>
            </div>
            {isAdmin && (
              <span className="bg-blue-50 text-blue-600 rounded-full px-2 py-0.5 text-[10px] font-bold border border-blue-100 flex items-center gap-1 animate-pulse ml-2">
                <ShieldCheck className="w-2.5 h-2.5" />
                Admin Mode
              </span>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    activeAnchor === sec.id
                      ? "text-zinc-900 bg-zinc-100/80 font-semibold"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                  }`}
                >
                  {sec.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Status Badge / Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1 rounded-lg text-zinc-500 hover:bg-zinc-100 transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-4 py-3 space-y-1">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold ${
                activeAnchor === sec.id
                  ? "bg-zinc-100 text-zinc-900"
                  : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
              }`}
            >
              {sec.name}
            </button>
          ))}
          {isAdmin && (
            <div className="px-3 py-2 text-[10px] text-zinc-400 font-bold bg-blue-50/50 rounded-lg text-blue-600 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              어드민 편집 모드가 켜져 있습니다.
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
