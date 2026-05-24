/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Lock, 
  Unlock, 
  Settings, 
  Plus, 
  Trash2, 
  X, 
  Check, 
  Eye, 
  EyeOff, 
  Download, 
  Upload, 
  RotateCcw,
  Sliders,
  Sparkles,
  Layers,
  FileText
} from "lucide-react";
import { PortfolioData, CoreStrengthItem, DomainItem, CareerItem, CaseStudyItem, WorkingStyleItem } from "../types";
import { defaultPortfolioData } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface AdminPanelProps {
  data: PortfolioData;
  onChange: (newData: PortfolioData) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}

export default function AdminPanel({ data, onChange, isAdmin, setIsAdmin }: AdminPanelProps) {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [activeTab, setActiveTab] = useState<"hero" | "strengths" | "domain" | "career" | "projects" | "style" | "json">("hero");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [localTags, setLocalTags] = useState("");

  useEffect(() => {
    if (data.hero && data.hero.tags) {
      setLocalTags(data.hero.tags.join(", "));
    }
  }, [data.hero.tags]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminId === "admin7" && password === "aa00110011!!") {
      setIsAdmin(true);
      setShowPasswordInput(false);
      setAdminId("");
      setPassword("");
      setErrorMsg("");
      setIsOpen(true);
      showTemporarySuccess("관리자 권한이 승인되었습니다!");
    } else {
      setErrorMsg("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const showTemporarySuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(""), 2500);
  };

  const handleReset = () => {
    if (window.confirm("정말로 모든 기획 데이터를 초기 상태로 복구하시겠습니까? 로컬 저장 내역이 덮어씌워집니다.")) {
      onChange(defaultPortfolioData);
      showTemporarySuccess("기본 기획 양식으로 리셋되었습니다.");
    }
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "product_qa_custom_portfolio.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showTemporarySuccess("JSON 백업 완료!");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed.hero && parsed.coreStrength && parsed.projects) {
            onChange(parsed);
            showTemporarySuccess("외부 기획 데이터를 성공적으로 병합했습니다.");
          } else {
            alert("유효하지 않은 업로드 포맷입니다.");
          }
        } catch (error) {
          alert("JSON 해석 오류");
        }
      };
    }
  };

  // Helper directly for Hero section
  const updateHero = (field: keyof typeof data.hero, value: any) => {
    onChange({
      ...data,
      hero: {
        ...data.hero,
        [field]: value
      }
    });
  };

  // 1. CORE STRENGTHS Actions
  const updateStrength = (index: number, updatedItem: Partial<CoreStrengthItem>) => {
    const updated = [...data.coreStrength];
    updated[index] = { ...updated[index], ...updatedItem };
    onChange({ ...data, coreStrength: updated });
  };

  const addNewStrength = () => {
    const newItem: CoreStrengthItem = {
      id: `strength-${Date.now()}`,
      title: "신규 검증 역량 타이틀",
      description: "고객 가치와 배포 가속을 향상시키는 상세 기법을 서술하십시오.",
      skillsKeyword: "검증 키워드 • 도구 태그리스트 문안",
      visible: true
    };
    onChange({ ...data, coreStrength: [...data.coreStrength, newItem] });
    showTemporarySuccess("신규 핵심 역량 카드가 추가되었습니다!");
  };

  const deleteStrength = (index: number) => {
    const updated = data.coreStrength.filter((_, i) => i !== index);
    onChange({ ...data, coreStrength: updated });
    showTemporarySuccess("핵심 역량 카드가 삭제되었습니다.");
  };

  // 2. DOMAINS Actions
  const updateDomain = (index: number, updatedItem: Partial<DomainItem>) => {
    const updated = [...data.domain];
    updated[index] = { ...updated[index], ...updatedItem };
    onChange({ ...data, domain: updated });
  };

  const addNewDomain = () => {
    const newItem: DomainItem = {
      id: `dom-${Date.now()}`,
      company: "새로운 금융사/기관",
      role: "Product QA 담당 엔지니어",
      project: "수임 전세대 대환 및 데이터 회계 정합",
      period: "2024.01 ~ 2025.02",
      visible: true
    };
    onChange({ ...data, domain: [...data.domain, newItem] });
    showTemporarySuccess("금융 도메인 정보가 추가되었습니다.");
  };

  const deleteDomain = (index: number) => {
    const updated = data.domain.filter((_, i) => i !== index);
    onChange({ ...data, domain: updated });
    showTemporarySuccess("금융 도메인 정보가 제거되었습니다.");
  };

  // 3. CAREERS Actions
  const updateCareer = (index: number, updatedItem: Partial<CareerItem>) => {
    const updated = [...data.career];
    updated[index] = { ...updated[index], ...updatedItem };
    onChange({ ...data, career: updated });
  };

  const updateCareerAchievements = (index: number, valueString: string) => {
    const lines = valueString.split("\n");
    updateCareer(index, { achievements: lines });
  };

  const addNewCareer = () => {
    const newItem: CareerItem = {
      id: `car-${Date.now()}`,
      company: "신임 주식회사",
      period: "2024.01 ~ 현재",
      role: "QA Lead",
      service: "주요 마이크로 서비스 및 어플리케이션 검증",
      achievements: [
        "핵심 리그레션 시인율 조정을 통한 총 결함 발생 누출율 0% 유지 성공",
        "비동기 트랜잭션 경계 분석 도구 설계 도입"
      ],
      visible: true
    };
    onChange({ ...data, career: [...data.career, newItem] });
    showTemporarySuccess("신규 커리어 레코드가 생성되었습니다.");
  };

  const deleteCareer = (index: number) => {
    const updated = data.career.filter((_, i) => i !== index);
    onChange({ ...data, career: updated });
    showTemporarySuccess("커리어가 제거되었습니다.");
  };

  // 4. PROJECTS Actions
  const updateProject = (index: number, updatedItem: Partial<CaseStudyItem>) => {
    const updated = [...data.projects];
    updated[index] = { ...updated[index], ...updatedItem };
    onChange({ ...data, projects: updated });
  };

  const updateProjectApproach = (index: number, valueString: string) => {
    const lines = valueString.split("\n");
    updateProject(index, { approach: lines });
  };

  const handleImageUpload = (index: number, file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const current = data.projects[index].imageUrl || "";
      const base64 = reader.result as string;
      const updated = current ? `${current}\n${base64}` : base64;
      updateProject(index, { imageUrl: updated });
      showTemporarySuccess("이미지가 추가(Base64 인코딩)되었습니다.");
    };
    reader.readAsDataURL(file);
  };

  const deleteProjectImage = (projIdx: number, imgIdx: number) => {
    const proj = data.projects[projIdx];
    const images = proj.imageUrl
      ? proj.imageUrl.split(/[|\n]+/).map(img => img.trim()).filter(Boolean)
      : [];
    const updatedImages = images.filter((_, idx) => idx !== imgIdx);
    updateProject(projIdx, { imageUrl: updatedImages.join("\n") });
    showTemporarySuccess("선택한 이미지가 삭제되었습니다.");
  };

  const addNewProject = () => {
    const newItem: CaseStudyItem = {
      id: `proj-${Date.now()}`,
      title: "신규 서비스 수호 프로젝트",
      subtitle: "실시간 한도 인입 지연 및 데이터 회수 모듈 긴급 점검사례",
      ratio: "15%",
      problem: "단말 네트워크 스왑 시 주문이 다중 트리거되는 현상이 드물게 보고되었습니다.",
      challenge: "원장 데이터에는 한 건만 기록되어 현상 확인이 어렵고 레이턴시 편차가 심함.",
      approach: [
        "Charles 핑 시뮬레이션을 이용해 다중 스왑 조건 조합 테스트 수립",
        "동작 과정에서의 API 게이트웨이 유입 로그 정량 분석"
      ],
      result: "다중 발송 중복 패널 락킹 변속 도입으로 실시간 트래픽 유입 오류 선제 치유 완료.",
      learned: "정합성이 생명인 거래망에서 동시 동작 중복 방지의 중요성을 환기함.",
      visible: true
    };
    onChange({ ...data, projects: [...data.projects, newItem] });
    showTemporarySuccess("신규 케이스 스터디가 생성되었습니다!");
  };

  const deleteProject = (index: number) => {
    const updated = data.projects.filter((_, i) => i !== index);
    onChange({ ...data, projects: updated });
    showTemporarySuccess("케이스 스터디 프로젝트가 제거되었습니다.");
  };

  // 5. WORKING STYLE Actions
  const updateStyle = (index: number, updatedItem: Partial<WorkingStyleItem>) => {
    const updated = [...data.workingStyle];
    updated[index] = { ...updated[index], ...updatedItem };
    onChange({ ...data, workingStyle: updated });
  };

  const addNewStyle = () => {
    const newItem: WorkingStyleItem = {
      id: `style-${Date.now()}`,
      title: "새로운 비즈니스 지표 기반 품질 검증 방식",
      description: "고객 신뢰 중심의 비즈니스 타협점 및 리소스 트리아지를 진행하는 방법입니다.",
      visible: true
    };
    onChange({ ...data, workingStyle: [...data.workingStyle, newItem] });
    showTemporarySuccess("협업 스타일 카드가 추가되었습니다.");
  };

  const deleteStyle = (index: number) => {
    const updated = data.workingStyle.filter((_, i) => i !== index);
    onChange({ ...data, workingStyle: updated });
    showTemporarySuccess("협업 스타일 카드가 제거되었습니다.");
  };

  return (
    <>
      {/* Dynamic Success Prompt Toast */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none">
        <AnimatePresence>
          {successMsg && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-950 border border-zinc-800 text-white font-medium text-xs px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 pointer-events-auto"
            >
              <Check className="w-3.5 h-3.5 text-blue-400" />
              {successMsg}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-2 pointer-events-auto">
          {/* Main Action Widget */}
          {isAdmin ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full shadow-2xl border border-blue-500 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Settings className="w-4 h-4" />
              어드민 편집기 {isOpen ? "닫기" : "열기"}
            </button>
          ) : (
            <button
              onClick={() => setShowPasswordInput(!showPasswordInput)}
              className="px-4 py-3 bg-zinc-900 hover:bg-black text-zinc-300 hover:text-white font-semibold text-xs rounded-full shadow-xl border border-zinc-800 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              Admin 로그인
            </button>
          )}

          {isAdmin && (
            <button
              onClick={() => {
                setIsAdmin(false);
                setIsOpen(false);
                showTemporarySuccess("로그아웃 되었습니다.");
              }}
              className="px-4 py-3 bg-zinc-100 hover:bg-zinc-250 text-zinc-700 font-semibold text-xs rounded-full border border-zinc-200 transition cursor-pointer"
            >
              로그아웃
            </button>
          )}
        </div>

        {/* Auth prompt dropdown */}
        <AnimatePresence>
          {showPasswordInput && (
            <motion.form
              onSubmit={handleLogin}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12 }}
              className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-2xl w-80 flex flex-col gap-3 mt-2 pointer-events-auto"
            >
              <div className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                <Unlock className="w-3.5 h-3.5 text-blue-600" />
                관리자 인증 로그인
              </div>
              <p className="text-[11px] text-zinc-500 leading-normal">
                시스템 자산 및 포트폴리오 문안 통제를 위해 관리자 인증 정보를 입력해주십시오.
              </p>
              <div className="space-y-2">
                <div>
                  <label className="block text-[10px] font-semibold text-zinc-500 mb-0.5">아이디 (ID)</label>
                  <input
                    type="text"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    placeholder="ID 입력"
                    className="w-full text-xs px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-950"
                    autoFocus
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-zinc-500 mb-0.5">비밀번호 (PW)</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호 입력"
                    className="w-full text-xs px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-950"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordInput(false);
                    setErrorMsg("");
                    setAdminId("");
                    setPassword("");
                  }}
                  className="w-1/2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-lg py-2 text-xs font-bold transition cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-zinc-950 hover:bg-black text-white rounded-lg py-2 text-xs font-bold transition cursor-pointer"
                >
                  로그인
                </button>
              </div>
              {errorMsg && (
                <div className="text-[10px] text-red-500 font-bold mt-0.5 text-center">{errorMsg}</div>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Slide-out Full Admin Console Panel */}
      <AnimatePresence>
        {isOpen && isAdmin && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-2xl bg-zinc-50 border-l border-zinc-200 shadow-2xl z-40 flex flex-col pt-16"
          >
            {/* Header section */}
            <div className="px-6 py-4 bg-white border-b border-zinc-200 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-blue-600 animate-spin-slow" />
                  Product QA 포트폴리오 에디터 
                </h3>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  각 항목의 **추가, 삭제, 숨김(눈동자 온/오프)** 가 실시간 반영됩니다.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 px-2 text-xs font-semibold rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-700 cursor-pointer"
              >
                닫기
              </button>
            </div>

            {/* Quick backup bar */}
            <div className="px-6 py-2.5 bg-zinc-100 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-2.5 text-xs text-zinc-650">
              <div className="flex gap-2">
                <button
                  onClick={handleExport}
                  className="flex items-center gap-1.5 px-2 py-1.5 bg-white border border-zinc-200 rounded font-medium text-zinc-800 hover:bg-zinc-50 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  JSON 다운로드
                </button>
                <label className="flex items-center gap-1.5 px-2 py-1.5 bg-white border border-zinc-200 rounded font-medium text-zinc-800 hover:bg-zinc-50 cursor-pointer text-xs">
                  <Upload className="w-3.5 h-3.5" />
                  백업 복구 (.json)
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImport}
                    className="hidden"
                  />
                </label>
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 px-2 py-1.5 bg-red-50 text-red-650 border border-red-150 rounded font-bold hover:bg-red-100 text-[11px] cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                기본 기획 복구
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex bg-white border-b border-zinc-100 overflow-x-auto scrollbar-none shrink-0">
              {(["hero", "strengths", "career", "projects", "style", "json"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-xs font-bold border-b-2 transition whitespace-nowrap capitalize ${
                    activeTab === tab
                      ? "border-zinc-900 text-zinc-950 bg-zinc-50/70"
                      : "border-transparent text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  {tab === "hero" ? "Hero & About" : 
                   tab === "strengths" ? "핵심 강점(Skills포함)" : 
                   tab === "career" ? "커리어 타임라인" : 
                   tab === "projects" ? "케이스 해결사례" : 
                   tab === "style" ? "협업 방식" : "전체 JSON"}
                </button>
              ))}
            </div>

            {/* Form Fields body list */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* HERO & ABOUT */}
              {activeTab === "hero" && (
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl border border-zinc-200 space-y-3.5 shadow-sm">
                    <span className="text-[10px] bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded font-mono font-bold">HERO EDIT</span>
                    <div>
                      <label className="block text-[11px] text-zinc-500 mb-1 font-semibold">메인 헤드라인</label>
                      <input
                        type="text"
                        value={data.hero.headline}
                        onChange={(e) => updateHero("headline", e.target.value)}
                        className="w-full text-xs px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-zinc-500 mb-1 font-semibold">Hero 한 줄 고유 강조구문</label>
                      <input
                        type="text"
                        value={data.hero.strongStatement || ""}
                        onChange={(e) => updateHero("strongStatement", e.target.value)}
                        className="w-full text-xs px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-950 font-bold text-blue-600"
                        placeholder="예: 재현되지 않는 오류를 쉽게 종료하지 않는 QA"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-zinc-500 mb-1 font-semibold">서브 텍스트 (품질 신망 서사)</label>
                      <textarea
                        rows={3}
                        value={data.hero.subtext}
                        onChange={(e) => updateHero("subtext", e.target.value)}
                        className="w-full text-xs px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900 leading-relaxed font-normal"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-zinc-500 mb-1 font-semibold">브랜딩 키워드 태그 (쉼표구분)</label>
                      <input
                        type="text"
                        value={localTags}
                        onChange={(e) => {
                          setLocalTags(e.target.value);
                          const parsed = e.target.value.split(",").map(t => t.trim()).filter(Boolean);
                          updateHero("tags", parsed);
                        }}
                        className="w-full text-xs px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900 font-mono"
                      />
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-zinc-200 space-y-3 shadow-sm">
                    <span className="text-[10px] bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded font-mono font-bold">ABOUT ME EDIT</span>
                    <div>
                      <label className="block text-[11px] text-zinc-500 mb-1 font-semibold">소개 글귀</label>
                      <textarea
                        rows={5}
                        value={data.aboutMe.text}
                        onChange={(e) => onChange({ ...data, aboutMe: { ...data.aboutMe, text: e.target.value } })}
                        className="w-full text-xs px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-950 leading-relaxed font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-zinc-500 mb-1 font-semibold">QA 인용 슬로건 구절</label>
                      <input
                        type="text"
                        value={data.aboutMe.quote || ""}
                        onChange={(e) => onChange({ ...data, aboutMe: { ...data.aboutMe, quote: e.target.value } })}
                        className="w-full text-xs px-3 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-950 font-semibold text-zinc-800"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* CORE STRENGTHS */}
              {activeTab === "strengths" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-xs font-bold text-zinc-500">Core Strengths 카드리스트 ({data.coreStrength.length}개)</span>
                    <button
                      onClick={addNewStrength}
                      className="px-3 py-1.5 bg-zinc-900 hover:bg-black text-white rounded-lg text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      새 강점카드 추가
                    </button>
                  </div>

                  {data.coreStrength.map((strength, idx) => (
                    <div 
                      key={strength.id} 
                      className={`p-4 rounded-xl border transition-all ${
                        strength.visible !== false 
                          ? "bg-white border-zinc-200" 
                          : "bg-zinc-100/70 border-zinc-200/50 opacity-60"
                      } space-y-3.5 shadow-sm`}
                    >
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                        <span className="text-[11px] font-mono font-bold text-zinc-400">0{idx + 1} STRENGTH ITEM</span>
                        <div className="flex items-center gap-2">
                          {/* Visibility toggle button */}
                          <button
                            onClick={() => updateStrength(idx, { visible: strength.visible === false ? true : false })}
                            className={`p-1.5 rounded transition ${strength.visible !== false ? "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100" : "text-blue-600 bg-blue-50 hover:bg-blue-100"}`}
                            title={strength.visible !== false ? "숨기기" : "노출하기"}
                          >
                            {strength.visible !== false ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => deleteStrength(idx)}
                            className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition"
                            title="삭제"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        <div>
                          <label className="block text-[11px] text-zinc-550 mb-0.5">강점 명세 타이틀</label>
                          <input
                            type="text"
                            value={strength.title}
                            onChange={(e) => updateStrength(idx, { title: e.target.value })}
                            className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] text-zinc-555 mb-0.5">내장 테크니컬 스택 키워드 (Skills 제거 보완용)</label>
                          <input
                            type="text"
                            value={strength.skillsKeyword || ""}
                            onChange={(e) => updateStrength(idx, { skillsKeyword: e.target.value })}
                            className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded focus:outline-none font-mono text-zinc-650"
                            placeholder="Charles Proxy • Network Simulation"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] text-zinc-555 mb-0.5">가치 검증 중심의 서술 (풍부하게 상세 기술 가능)</label>
                          <textarea
                            rows={3}
                            value={strength.description}
                            onChange={(e) => updateStrength(idx, { description: e.target.value })}
                            className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded focus:outline-none leading-relaxed"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CAREERS (Merged Career & Domain style timeline tracker) */}
              {activeTab === "career" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-xs font-bold text-zinc-500">경력 타임라인 리스트 ({data.career.length}개)</span>
                    <button
                      onClick={addNewCareer}
                      className="px-3 py-1.5 bg-zinc-900 hover:bg-black text-white rounded-lg text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      회사 추가
                    </button>
                  </div>

                  {data.career.map((car, idx) => (
                    <div 
                      key={car.id} 
                      className={`p-4 rounded-xl border ${
                        car.visible !== false ? "bg-white border-zinc-200" : "bg-zinc-100/70 border-zinc-200/50 opacity-60"
                      } space-y-3.5 shadow-sm`}
                    >
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                        <span className="text-xs font-bold text-zinc-755">{car.company || "신규 회사 레코드"}</span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => updateCareer(idx, { visible: car.visible === false ? true : false })}
                            className="p-1 text-zinc-400 hover:text-zinc-650"
                          >
                            {car.visible !== false ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => deleteCareer(idx)}
                            className="p-1 text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] text-zinc-500">회사명</label>
                          <input
                            type="text"
                            value={car.company}
                            onChange={(e) => updateCareer(idx, { company: e.target.value })}
                            className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-zinc-500">근무 기간</label>
                          <input
                            type="text"
                            value={car.period}
                            onChange={(e) => updateCareer(idx, { period: e.target.value })}
                            className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] text-zinc-500 font-bold">공식 직군/포지션</label>
                          <input
                            type="text"
                            value={car.role}
                            onChange={(e) => updateCareer(idx, { role: e.target.value })}
                            className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-zinc-500">담당 검수 서비스 / 모듈도출</label>
                          <input
                            type="text"
                            value={car.service}
                            onChange={(e) => updateCareer(idx, { service: e.target.value })}
                            className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Achievements List visually added as clickable card bullets! */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-[10px] text-zinc-500 font-semibold">정량적 QA 수치 성과 및 지표 (개별 카드 형태 실시간 편집)</label>
                          <button
                            type="button"
                            onClick={() => {
                              const updatedAchievements = [...car.achievements, "신규 상세 성과 지표 혹은 검증 스펙을 입력하십시오."];
                              updateCareer(idx, { achievements: updatedAchievements });
                            }}
                            className="text-[10px] text-blue-600 hover:text-blue-700 font-bold flex items-center gap-0.5 cursor-pointer"
                          >
                            <Plus className="w-2.5 h-2.5" />
                            성과 카드 추가
                          </button>
                        </div>
                        <div className="space-y-2">
                          {car.achievements && car.achievements.map((achievement, achIdx) => (
                            <div key={achIdx} className="flex gap-2 items-center bg-zinc-50 p-2 border border-zinc-200/80 rounded-lg animate-fade-in">
                              <span className="w-4 h-4 bg-zinc-200 text-zinc-650 font-mono text-[9px] rounded-full flex items-center justify-center shrink-0">
                                {achIdx + 1}
                              </span>
                              <input
                                type="text"
                                value={achievement}
                                onChange={(e) => {
                                  const updated = [...car.achievements];
                                  updated[achIdx] = e.target.value;
                                  updateCareer(idx, { achievements: updated });
                                }}
                                className="w-full text-xs px-2 py-1.5 bg-white border border-zinc-250 rounded focus:outline-none focus:border-zinc-400 font-sans"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = car.achievements.filter((_, aIdx) => aIdx !== achIdx);
                                  updateCareer(idx, { achievements: updated });
                                }}
                                className="p-1 px-1.5 text-red-500 hover:bg-red-50 rounded cursor-pointer"
                                title="이 성과 카드 삭제"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* PROJECTS (CASE STUDIES) */}
              {activeTab === "projects" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-xs font-bold text-zinc-500 font-sans">핵심 Case Studies ({data.projects.length}개)</span>
                    <button
                      onClick={addNewProject}
                      className="px-3 py-1.5 bg-zinc-900 hover:bg-black text-white rounded-lg text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      새 이력사례 추가
                    </button>
                  </div>

                  {data.projects.map((proj, idx) => (
                    <div 
                      key={proj.id} 
                      className={`p-4 rounded-xl border ${
                        proj.visible !== false ? "bg-white border-zinc-200" : "bg-zinc-100/70 border-zinc-200/50 opacity-60"
                      } space-y-3 shadow-sm`}
                    >
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                        <div className="flex items-center gap-1.5 flex-1 min-w-0 mr-4">
                          <span className="text-xs font-bold text-blue-600 shrink-0 select-none">Case 0{idx + 1}.</span>
                          <input
                            type="text"
                            value={proj.title}
                            onChange={(e) => updateProject(idx, { title: e.target.value })}
                            className="text-xs font-bold text-blue-600 bg-transparent hover:bg-zinc-100/50 focus:bg-zinc-50 focus:ring-1 focus:ring-blue-400 focus:outline-none rounded px-1.5 py-0.5 w-full border border-transparent focus:border-zinc-200 transition-all font-sans"
                            placeholder="프로젝트 대분류를 입력해주세요"
                          />
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => updateProject(idx, { visible: proj.visible === false ? true : false })}
                            className="p-1 text-zinc-400 hover:text-zinc-600"
                          >
                            {proj.visible !== false ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteProject(idx)}
                            className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                            title="삭제"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="md:col-span-1">
                          <label className="block text-[10px] text-zinc-500 mb-1 font-semibold">경영/해결 기여 중량 비중 (예: 60%)</label>
                          <input
                            type="text"
                            value={proj.ratio}
                            onChange={(e) => updateProject(idx, { ratio: e.target.value })}
                            className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded font-bold bg-white"
                            placeholder="60%"
                          />
                        </div>
                        <div className="md:col-span-3">
                          <label className="block text-[10px] text-zinc-500 mb-1 font-semibold">주요 쟁점 / 헤드라인</label>
                          <input
                            type="text"
                            value={proj.subtitle}
                            onChange={(e) => updateProject(idx, { subtitle: e.target.value })}
                            className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded font-semibold text-zinc-800 bg-white"
                            placeholder="주요 쟁점 및 해결 목표를 입력해주세요"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] text-zinc-500 mb-1 font-semibold">Problem (문제 상황)</label>
                          <textarea
                            rows={3}
                            value={proj.problem}
                            onChange={(e) => updateProject(idx, { problem: e.target.value })}
                            className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded leading-relaxed bg-white"
                            placeholder="어떤 문제 상황이 발생했는지 편하게 서술해주세요"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-zinc-500 mb-1 font-semibold">Challenge (장애 극복 허들)</label>
                          <textarea
                            rows={3}
                            value={proj.challenge}
                            onChange={(e) => updateProject(idx, { challenge: e.target.value })}
                            className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded leading-relaxed bg-white"
                            placeholder="해결하는 데 있어서 장애 요소나 한계점이 무엇이었나요?"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] text-zinc-500">Approach & Investigative Procedures (줄바꿈 구분)</label>
                        <textarea
                          rows={4}
                          value={proj.approach.join("\n")}
                          onChange={(e) => updateProjectApproach(idx, e.target.value)}
                          className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded font-sans leading-relaxed"
                          placeholder="구체적인 가치 도구 추적 시나리오를 한 줄씩 쓰십시오."
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] text-zinc-500">Result (반사 효과 및 정합 개선)</label>
                        <textarea
                          rows={2}
                          value={proj.result}
                          onChange={(e) => updateProject(idx, { result: e.target.value })}
                          className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded leading-relaxed"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] text-zinc-500">What I Learned (학습 교훈)</label>
                        <textarea
                          rows={2}
                          value={proj.learned}
                          onChange={(e) => updateProject(idx, { learned: e.target.value })}
                          className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded leading-relaxed italic"
                        />
                      </div>

                      {/* Dynamic File Upload / Image attachment & External Document Link attachment */}
                      <div className="pt-4 border-t border-zinc-100 space-y-3">
                        <span className="text-[10px] font-mono font-bold text-zinc-400 block uppercase tracking-wider">PROJECT DELIVERABLES & PROOF OF WORK (선택)</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Image Attachment widget */}
                          {(() => {
                            const projImages = proj.imageUrl
                              ? proj.imageUrl.split(/[|\n]+/).map((img) => img.trim()).filter(Boolean)
                              : [];
                            return (
                              <div className="space-y-2.5 p-3 bg-zinc-50 rounded-lg border border-zinc-150">
                                <div className="flex items-center justify-between">
                                  <label className="block text-[10px] font-bold text-zinc-650">작업 파일/스크린샷 업로드 (실행 검증 화면)</label>
                                  <span className="text-[9px] font-mono font-bold bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-100 select-none">
                                    추가된 이미지: {projImages.length}개
                                  </span>
                                </div>
                                
                                {projImages.length > 0 && (
                                  <div className="grid grid-cols-3 gap-2 p-2 bg-zinc-105 rounded-lg border border-zinc-200">
                                    {projImages.map((imgSrc, imgIdx) => (
                                      <div key={imgIdx} className="relative aspect-video border border-zinc-200 rounded overflow-hidden bg-white shadow-xs group">
                                        <img src={imgSrc} alt={`attached preview ${imgIdx + 1}`} className="w-full h-full object-cover" />
                                        <button
                                          type="button"
                                          onClick={() => deleteProjectImage(idx, imgIdx)}
                                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                                          title="이 이미지 삭제"
                                        >
                                          <Trash2 className="w-3.5 h-3.5 text-white" />
                                        </button>
                                        <div className="absolute bottom-1 left-1 px-1 bg-black/65 rounded text-[8px] font-mono font-bold text-white select-none">
                                          #{imgIdx + 1}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                <div className="space-y-1.5">
                                  <input
                                    id={`file-upload-${proj.id}`}
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0] || null;
                                      handleImageUpload(idx, file);
                                    }}
                                    className="w-full text-[10px] text-zinc-550 file:mr-2 file:py-1 file:px-2.5 file:rounded file:border file:border-zinc-250 file:font-semibold file:bg-white file:text-zinc-700 hover:file:bg-zinc-50 cursor-pointer"
                                  />
                                  <p className="text-[9px] text-zinc-450 leading-normal">
                                    * 기획서 캡처본, 로그 등 이미지를 추가하면 목록에 계속 누적(Append)됩니다.
                                  </p>
                                </div>

                                <textarea
                                  rows={2}
                                  value={proj.imageUrl || ""}
                                  onChange={(e) => updateProject(idx, { imageUrl: e.target.value })}
                                  placeholder="직접 이미지 웹 주소 (줄바꿈 또는 | 기호로 여러 장 등록 가능)"
                                  className="w-full text-[10px] px-2.5 py-1.5 border border-zinc-200 rounded focus:outline-none font-mono leading-normal"
                                />
                              </div>
                            );
                          })()}

                          {/* Outer Link Connect Widget */}
                          <div className="space-y-2 p-3 bg-zinc-50 rounded-lg border border-zinc-150 font-sans">
                            <label className="block text-[10px] font-bold text-zinc-650 font-sans">외부 위키 / 저장소 / 노션 온라인 문서 증빙 (선택)</label>
                            <div className="space-y-1.5">
                              <input
                                type="text"
                                value={proj.externalLink || ""}
                                onChange={(e) => updateProject(idx, { externalLink: e.target.value })}
                                placeholder="http:// 또는 https:// 로 시작하는 절대 경로 주소"
                                className="w-full text-[11px] px-2.5 py-1 border border-zinc-200 rounded font-mono focus:outline-none bg-white font-sans text-zinc-700"
                              />
                              <input
                                type="text"
                                value={proj.linkText || ""}
                                onChange={(e) => updateProject(idx, { linkText: e.target.value })}
                                placeholder="연결 버튼 라벨명 (예: Charles Proxy 패킷 복제본)"
                                className="w-full text-[11px] px-2.5 py-1 border border-zinc-200 rounded font-semibold text-zinc-800 focus:outline-none bg-white font-sans"
                              />
                              <p className="text-[9px] text-zinc-450 leading-relaxed font-sans">
                                위 링크를 입력하면 포트폴리오 메인 화면에서 "참고참조 링크" 연결이 활성화되어 방문자가 본사 증빙 또는 저장소를 직접 검증할 수 있습니다.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* WORKING STYLES */}
              {activeTab === "style" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-xs font-bold text-zinc-500">협업 스타일 항목리스트 ({data.workingStyle.length}개)</span>
                    <button
                      onClick={addNewStyle}
                      className="px-3 py-1.5 bg-zinc-900 hover:bg-black text-white rounded-lg text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      항목 추가
                    </button>
                  </div>

                  {data.workingStyle.map((style, idx) => (
                    <div 
                      key={style.id} 
                      className={`p-4 rounded-xl border ${
                        style.visible !== false ? "bg-white border-zinc-200" : "bg-zinc-100/70 border-zinc-200/50 opacity-60"
                      } space-y-3.5 shadow-sm`}
                    >
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                        <span className="text-[11px] font-mono font-bold text-zinc-400">WORKING STYLE 0{idx + 1}</span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => updateStyle(idx, { visible: style.visible === false ? true : false })}
                            className="p-1 text-zinc-400 hover:text-zinc-600"
                          >
                            {style.visible !== false ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => deleteStyle(idx)}
                            className="p-1 text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] text-zinc-500">소통 가치 타이틀</label>
                        <input
                          type="text"
                          value={style.title}
                          onChange={(e) => updateStyle(idx, { title: e.target.value })}
                          className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded font-bold"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] text-zinc-500">체적 협약 예시 설명</label>
                        <textarea
                          rows={3}
                          value={style.description}
                          onChange={(e) => updateStyle(idx, { description: e.target.value })}
                          className="w-full text-xs px-3 py-1.5 border border-zinc-200 rounded leading-relaxed font-sans"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* RAW JSON EDIT */}
              {activeTab === "json" && (
                <div className="space-y-4">
                  <span className="text-xs font-bold text-zinc-500">원시 포트폴리오 스키마 제어</span>
                  <p className="text-[10px] text-zinc-400">
                    전체의 텍스트 배열을 한번에 교정할 수 있는 쉘 구조 편집 상자입니다.
                  </p>
                  <textarea
                    rows={18}
                    value={JSON.stringify(data, null, 2)}
                    onChange={(e) => {
                      try {
                        const parsed = JSON.parse(e.target.value);
                        onChange(parsed);
                      } catch (err) {}
                    }}
                    className="w-full text-[11px] font-mono px-3 py-2 bg-zinc-900 text-green-400 rounded-xl leading-relaxed outline-none border border-zinc-950 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>

            {/* Sticky footer close widget */}
            <div className="px-6 py-4 bg-white border-t border-zinc-200 flex items-center justify-between shrink-0">
              <span className="text-[11px] text-zinc-400 font-mono">
                TOSS Product Portfolio Dynamic Synchronizer
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 bg-zinc-950 hover:bg-black text-white text-xs font-bold rounded-lg cursor-pointer"
              >
                닫기
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
