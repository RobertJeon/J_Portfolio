/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface HeroData {
  headline: string;
  subtext: string;
  strongStatement?: string; // "재현되지 않는 오류를 쉽게 종료하지 않는 QA"
  tags: string[];
}

export interface CoreStrengthItem {
  id: string;
  title: string;
  description: string;
  skillsKeyword?: string; // Absorbed skills tag
  visible?: boolean;
}

export interface AboutMeData {
  text: string;
  quote?: string;
}

export interface DomainItem {
  id: string;
  company: string;
  role: string;
  project: string;
  period: string;
  visible?: boolean;
}

export interface CareerItem {
  id: string;
  company: string;
  period: string;
  role: string;
  service: string;
  achievements: string[];
  visible?: boolean;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  subtitle: string;
  ratio: string; // e.g. "60%", "25%", "15%" weight representation
  problem: string;
  challenge: string;
  approach: string[];
  result: string;
  learned: string;
  imageUrl?: string;
  externalLink?: string;
  linkText?: string;
  visible?: boolean;
}

export interface WorkingStyleItem {
  id: string;
  title: string;
  description: string;
  visible?: boolean;
}

export interface ContactData {
  email: string;
  github: string;
  linkedin: string;
  resumeUrl?: string;
  portfolioUrl?: string;
}

export interface PortfolioData {
  hero: HeroData;
  coreStrength: CoreStrengthItem[];
  aboutMe: AboutMeData;
  domain: DomainItem[];
  career: CareerItem[];
  projects: CaseStudyItem[];
  workingStyle: WorkingStyleItem[];
  contact: ContactData;
}
