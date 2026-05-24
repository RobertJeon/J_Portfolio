/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioData } from "./types";

export const defaultPortfolioData: PortfolioData = {
  hero: {
    headline: "Product Quality를 사용자 경험 관점에서 검증하는 QA Engineer",
    subtext: "금융 서비스 운영 환경에서 HTS/MTS/WTS 품질 검증을 담당하며, 실제 사용자 흐름 기반으로 문제를 추적하고 해결하는 실무형 QA 엔지니어입니다.",
    strongStatement: "문제를 끝까지 추적하는 집요한  QA",
    tags: [
      "Financial Domain",
      "User Scenario Testing"
    ]
  },
  coreStrength: [
    {
      id: "strength-2",
      title: "Deep Issue Reproduction",
      description: "재현이 어려운 오류를 쉽게 종료하지 않고, 실제 사용자 흐름과 다양한 거래 조건을 반복적으로 검증하며 문제 원인을 추적합니다. 운영 환경에서 발생하는 간헐 이슈에 대해 사용자 행동 패턴과 데이터 조건을 함께 고려하며 접근합니다.",
      skillsKeyword: "운영 QA / 간헐 오류 / 사용자 흐름 기반 검증",
      visible: true
    },
    {
      id: "strength-3",
      title: "User Scenario Testing",
      description: "단순 기능 단위 검증보다 실제 서비스 이용 흐름을 중심으로 테스트를 수행합니다. 정상 흐름뿐 아니라 실패 흐름과 예외 상황까지 고려하며 사용자 영향도를 기준으로 품질을 검증합니다.",
      skillsKeyword: "사용자 관점 / 예외 흐름 / 시나리오 테스트",
      visible: true
    },
    {
      id: "strength-4",
      title: "Financial Domain Understanding",
      description: "은행, 보험, 증권 도메인을 모두 경험하며 금융 서비스의 업무 흐름과 데이터 정합성 중요도를 이해하게 되었습니다. 금융 서비스 특성상 작은 오류도 사용자 신뢰와 직결된다는 점을 기반으로 QA를 수행하고 있습니다.",
      skillsKeyword: "증권 / 은행 / 보험 / 금융 서비스 이해",
      visible: true
    },
    {
      id: "strength-1779631349355",
      title: "Problem Solving Mindset",
      description: "문제를 단순 현상으로 바라보기보다 “왜 발생했는가”를 중심으로 접근합니다. 재현 조건과 사용자 영향을 함께 정리하여 개발 조직과 협업하며 문제 해결까지 연결하는 방식을 중요하게 생각합니다.",
      skillsKeyword: "문제 추적 / 원인 분석 / 협업 기반 해결",
      visible: true
    }
  ],
  aboutMe: {
    text: "은행, 보험, 증권 등 다방면의 금융 도메인 지식과 IT 기술 이해도를 두루 갖춘 QA 엔지니어입니다. 현재 KB증권의 주력 매체(HTS, WTS, MTS) 운영 QA를 담당하며, 금융 비즈니스 로직에 대한 깊은 이해를 바탕으로 테스트 프로세스 전반을 수행하고 있습니다.",
    quote: ""
  },
  domain: [
    {
      id: "dom-1",
      company: "리파인",
      role: "금융 연계 사전 권리조사 QA",
      project: "전세대출 권리조사 시스템 수립 및 금융 원동 연장",
      period: "2020.01 ~ 2021.07",
      visible: true
    },
    {
      id: "dom-2",
      company: "카카오뱅크",
      role: "신용/전세대출 심사 매칭 QA",
      project: "전월세대출 대행 심사 프로세스 보완 검색",
      period: "2021.08 ~ 2023.04",
      visible: true
    },
    {
      id: "dom-3",
      company: "KB증권",
      role: "실시간 MTS/HTS 체결 & 뱅킹 QA",
      project: "HTS/MTS/WTS 거래 채널 전반의 무중단 가용 검수",
      period: "2023.05 ~ 현재",
      visible: true
    }
  ],
  career: [
    {
      id: "car-1",
      company: "와이즈와이어즈(주)",
      period: "2024.09.02~재직중",
      role: "선임연구원",
      service: "소프트웨어 QA",
      achievements: [
        "KB증권 운영 QA (2026-02-10~) HTS, MTS, WTS 서비스 배포 전 품질 검증 (해외퀵뷰, 해외양도세, Y&Y수수료 프로모션, 이체화면 전면 개선 등 다양한 프로젝트 수행)",
        "더한섬 파트너오피스 구축 (2025-10-01~2026-01-15) 통합테스트 케이스 작성 및 수행, 진행상황 관리",
        "EQL 자사브랜드 검증 (2025-05-07~2025-09-30) 단위테스트, 통합테스트 케이스 작성 및 수행",
        "엠로 삼성전자 차세대 구매관리시스템 구축 (2024-09-26~2025-04-30) 제3자 단위테스트 수행"
      ],
      visible: true
    },
    {
      id: "car-2",
      company: "(주) 코드스테이츠",
      period: "2022.07~2023.08",
      role: "LA",
      service: "AI부트캠프 - 강의 (자료구조, 알고리즘)",
      achievements: [
        "자료구조 및 알고리즘 강의, 교육 콘텐츠 제작"
      ],
      visible: true
    },
    {
      id: "car-3",
      company: "카카오뱅크",
      period: "2019.07~2021.06",
      role: "팀원",
      service: "여신심사",
      achievements: [
        "전월세대출 심사 담당, 1일 평균 25~30건 심사 수행"
      ],
      visible: true
    },
    {
      id: "car-1779633145993",
      company: "메트라이프생명보험(주)",
      period: "2018.08~2019.06",
      role: "FSR",
      service: "보험 판매",
      achievements: [
        "변액 보험 상품 판매 및 고객 니즈 분석"
      ],
      visible: true
    },
    {
      id: "car-1779633238963",
      company: "리파인",
      period: "2015.07 ~2018.07",
      role: "조사역",
      service: "전세대출 권리조사",
      achievements: [
        "SGI, HUG 전세대출 권리조사, 반환보증보험 심사, 1일 평균 40~50건 심사 수행"
      ],
      visible: true
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "KB 증권 관심종목 고객 voc 재현 해결",
      subtitle: "고객 VOC 관심종목 타이틀 재현 사례",
      ratio: "",
      problem: "관심종목 배포 이후 고객이 설정한 관심종목 타이틀 말줄임 현상으로 불만",
      challenge: "특정 문구 (Aa, 명)에서 ... 말줄임 현상이 발생한 것을 발견",
      approach: [
        "글자수 제한 확인 후 기종별 동일 현상 발생 확인"
      ],
      result: "스마트폰 기종별 텍스트 블록 크기 차이로 발생한 이슈로 확인",
      learned: "",
      imageUrl: "https://drive.google.com/file/d/1sq-G0g4h87t_GHiZBx9pDETEveHy1WJ0/view?usp=drive_link\nhttps://drive.google.com/file/d/1Xul6FSyjYsirOWGktkHd4QDY5ZTURXTB/view?usp=drive_link",
      externalLink: "https://drive.google.com/file/d/1g4eFGzqFfY1Knljk7o2L-ri2jnlIexOO/view?usp=drive_link",
      linkText: "",
      visible: true
    },
    {
      id: "proj-2",
      title: "더한섬 파트너오피스",
      subtitle: "테스트 일정 부족",
      ratio: "",
      problem: "일정대비 테스트가 필요한 범위가 넓어 테스트 케이스 작성 일정이 촉박한 상태",
      challenge: "주문, 클레임과 같이 동일하지만 조건이 다양한 테스트의 케이스 작성 자동화",
      approach: [
        "테스트 데이터 분석 (협력사, 상품, 프로모션, 주문 조합, 프로모션 조합)"
      ],
      result: "TC문구자동화의 경우 반복적으로 작성되는 문구의 내용을 다양한 조합으로 작성할 수 있도록 자동화 작업을 제작",
      learned: "",
      imageUrl: "https://drive.google.com/file/d/1IUW0-wOQ3w8wTJCWx62prc-jcEWbod58/view?usp=drive_link",
      externalLink: "https://docs.google.com/spreadsheets/d/16cOriMrJGUcjt22gyfhLrqeCtM050l-gH7ddVSr6mvI/edit?usp=sharing",
      linkText: "TC자동화 샘플",
      visible: true
    },
    {
      id: "proj-3",
      title: "토스증권 옵션호가창 오류 이슈",
      subtitle: "토스증권 옵션호가창 오류 이슈",
      ratio: "",
      problem: "매도/매수 특정 가격에서 고정되는 현상 발생",
      challenge: "",
      approach: [
        "토스증권 > 티커 QQQ 검색 > 종목정보 > 옵션 선택 > 옵션 목록 > 콜/풋 옵션 선택 > 옵션 호가창 선택"
      ],
      result: "옵션의 경우 해당 주식의 가격이 변동에 따라 호가창이 수시로 변경되는데, 거래량이 적어서 발생하는 상황으로 확인된다는 답변을 받았습니다.",
      learned: "다른 금융사에서도 비슷한 시간대에 위와 같은 호가창 오류가 발생한 것으로 보아 해외 거래소의 문제가 아니었나 생각합니다.",
      imageUrl: "https://drive.google.com/file/d/1-i9YxHKDm9lJHN2uirPWEUpkVRfESNHg/view?usp=drive_link\nhttps://drive.google.com/file/d/1C_tbaUNzuZYKuoKlBgV4rU-R9tsx-KYV/view?usp=drive_link",
      externalLink: "https://drive.google.com/file/d/1r5Krix4-asZ1SiRInE3qvnaIVAQO_k8k/view?usp=drive_link",
      linkText: "",
      visible: true
    }
  ],
  workingStyle: [
    {
      id: "style-1",
      title: "사용자 영향 우선 사고",
      description: "우선순위를 판단할 때 기능 중요도보다 실제 사용자에게 어떤 영향을 줄 수 있는지를 먼저 고려합니다. 운영 환경에서는 작은 오류도 사용자 신뢰에 영향을 줄 수 있다고 생각합니다.",
      visible: true
    },
    {
      id: "style-2",
      title: "제품 중심 QA",
      description: "QA는 단순히 결함을 찾는 역할이 아니라, 제품 팀과 함께 안정적인 사용자 경험을 만드는 역할이라고 생각합니다. 기획, 개발, 운영 흐름을 함께 이해하려고 노력합니다.",
      visible: true
    },
    {
      id: "style-3",
      title: "구조화된 이슈 공유",
      description: "이슈를 전달할 때 현상만 공유하기보다 발생 조건, 예상 영향 범위, 재현 여부 등을 구조적으로 정리하여 커뮤니케이션하려고 노력합니다.",
      visible: true
    },
    {
      id: "style-1779631414132",
      title: "환경에 맞는 유연한 협업",
      "description": "빠르게 변경되는 운영 환경에서는 완벽한 계획보다 상황에 맞는 우선순위 판단과 빠른 대응이 중요하다고 생각합니다. 프로젝트 상황에 따라 유연하게 협업 방식을 조정하며 업무를 수행하고 있습니다.",
      "visible": true
    }
  ],
  contact: {
    email: "jse177@gmail.com",
    github: "github.com/RobertJeon/RobertJeon",
    linkedin: "linkedin.com/in/product-qa-toss",
    resumeUrl: "#",
    portfolioUrl: "#"
  }
};
