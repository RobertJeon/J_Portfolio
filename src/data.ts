/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioData } from "./types";

export const defaultPortfolioData: PortfolioData = {
  hero: {
    headline: "Product Quality를 사용자 경험 관점에서 검증하는 QA Engineer",
    subtext: "금융 서비스 운영 환경에서 HTS/MTS/WTS 품질 검증과 배포 안정성을 담당하며, 실제 사용자 흐름 기반으로 문제를 추적하고 해결하는 실무형 QA 엔지니어입니다.",
    strongStatement: "재현되지 않는 오류를 쉽게 종료하지 않는 QA",
    tags: [
      "Operational QA",
      "Financial Domain",
      "Issue Reproduction",
      "User Scenario Testing",
      "Release Validation"
    ]
  },
  coreStrength: [
    {
      id: "strength-1",
      title: "Deep Issue Reproduction (재현 기술)",
      description: "간헐 오류를 다양한 사용자 흐름 기반으로 추적 및 재현합니다. Charles Proxy, Postman, Chrome DevTools, 디바이스 메모리 부하 제어를 결합하여 조건이 지극히 까다로운 재현 확률 0.1% 미만의 문제 분석에 특화되어 있습니다.",
      skillsKeyword: "Charles Proxy • Network Emulation • Memory Low Simulation",
      visible: true
    },
    {
      id: "strength-2",
      title: "Operational QA (실 운영 환경 검증)",
      description: "운영 환경 중심 배포 안정성을 검증합니다. 실 운영 영향도, 리스크를 사전에 파악하여 주 단위 릴리즈의 회귀 테스트 범위를 효율화하고, 핫픽스 요소를 사전에 완벽히 방어합니다.",
      skillsKeyword: "Regression Testing • Risk Assessment • Release Validation",
      visible: true
    },
    {
      id: "strength-3",
      title: "Financial Domain Understanding (금융 도메인 이해)",
      description: "은행/보험/증권 비즈니스의 무결한 신뢰 가치를 완벽히 이해합니다. 복합적인 여신 규정, 거래 원장, 대금 거래 및 복잡소수점 정합성을 지키기 위한 원장 검증 조인 쿼리를 실장에 적용합니다.",
      skillsKeyword: "SQL (Complex Join) • Ledger Accuracy • Sync Delay Check",
      visible: true
    },
    {
      id: "strength-4",
      title: "Proactive Collaboration (해결 중심 협업)",
      description: "기획서와 API 설계서 단계에서 발생할 수 있는 잠재적 스펙 결함을 미리 식별하고 정제합니다. 단순 '현상 고발자'가 아닌 개발자와의 기술적 파트너로서 함께 원인을 좁히고 지라 티켓에 구체적인 단서를 리포트합니다.",
      skillsKeyword: "Jira / Confluence Alignment • Ticket Spec Framing • Defect Triage",
      visible: true
    }
  ],
  aboutMe: {
    text: "금융 서비스는 아주 미세한 결함 하나로도 유저가 그동안 쌓아올린 막대한 신용과 믿음을 손상시킬 수 있습니다. 그렇기 때문에 저는 단순 체크리스트 검수자로 머무는 것을 지양해 왔습니다.\n\n재현하기 지나치게 힘든 간헐적 오류가 발생하더라도 수단과 방법을 가리지 않고 유저 환경을 시뮬레이션하며 종결하지 않는 집요함을 발휘합니다. 오피스 환경의 초고속 기가비트 상태가 아니라, 고객이 실제로 마주하는 열악한 네트워크, 리소스 부족 단말 등 현장의 관점에 입각해 가차 없이 테스트하며 제품 배포의 든든한 가치를 증명합니다.",
    quote: "품질이란 소수 인원이 배포를 감시하고 가로막는 장애물이 아닌, 온 비즈니스 조직이 안심하고 빠르게 골인할 수 있게 돕는 가장 안전한 디딤돌입니다."
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
      company: "KB증권",
      period: "2023.05 ~ 현재",
      role: "Fintech MTS/HTS 운영 Product QA 엔지니어",
      service: "HTS/MTS/WTS 매매 체결, 뱅킹, 자산 관리 모듈 및 실시간 동시 가용성 분석",
      achievements: [
        "실시간 트래픽 급증 및 복합 결제 오류 수십 건의 상용 간헐 VOC를 네트워킹 및 기기 가용 연계 분석으로 재현 성공 및 소스 특정화 해결",
        "매주 이루어지는 주 2회 배포 스케줄을 대비한 고위험군 산정 리그레션 테스트 버킷(Regression test bucket) 슬라이스 설계를 통한 총 검증 시간 45% 단축",
        "개발, 기획, 현업과의 정제된 리인포스 프로세스 회의 신설하여 출시 지연 가능성을 원천 차단하고 무장애 릴리즈 일수 230일 달성"
      ],
      visible: true
    },
    {
      id: "car-2",
      company: "카카오뱅크",
      period: "2021.08 ~ 2023.04",
      role: "은행 비즈니스 코어 대출 파트 QA 담당",
      service: "전월세대출 서류 위변조 자동 판별 심사, 보증 한도 매칭 연계 트랜잭션",
      achievements: [
        "공공기관 연계 스크래핑 데이터 정합성에 대한 시나리오 120여 종 전면 제정으로, 연계 오차로 인한 서류 심사 실패율을 기존 4.2%에서 0%로 통제",
        "고비용 수수 행위에 대응하는 한도 시뮬레이션 데이터 검증 자동화 도구를 간이 설계하여 단순 반복 테스트 시간을 주 평균 8시간 감소"
      ],
      visible: true
    },
    {
      id: "car-3",
      company: "리파인",
      period: "2020.01 ~ 2021.07",
      role: "금융 연계 사전 권리조사 솔루션 QA 담당",
      service: "전세 임대차 대출 진행을 위한 권리관계 정보 수집 및 리스크 검증 시스템",
      achievements: [
        "은행-신용보증협회 간 실시간 연동 원장 검증으로 수동 이체 오차 케이스 발견하여 금융 사고 위험 3건 선제 방어",
        "법률 개정에 따른 신규 주거 대출 정책 긴급 적용 당시 영향 범위 맵핑 표 배포하여 테스트 커버리지 누락율 0% 기록"
      ],
      visible: true
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "KB증권 운영 QA 및 모바일 거래 가용 검증",
      subtitle: "고객 VOC 기반 간헐 MTS 체결 연장 현상에 대한 세션 디버깅 재현 성공 사례",
      ratio: "60%",
      problem: "배포 이후 실사용자 환경에서 특정 기기(Android OS 일부 버전) 및 특정 무선 망 접속 시 '주문 신청 후 대기화면 정지' VOC가 간헐적으로 발생함. 하지만 내부 사내 네트워크 QA 존 및 일반 에뮬레이터 기기들에서는 수백 번을 눌러도 재현되지 않는 이슈.",
      challenge: "수십만 사용자 중 일부 이용자층의 네트워크 핑 지연, 모바일 단말 자체 백그라운드 리소스 경쟁 이슈가 혼재되어 단순 시나리오 동작만으로는 재현 확률이 0.1% 미만으로 극도로 은폐됨.",
      approach: [
        "Charles Proxy 툴을 활용해 인위적으로 전송 지연 (RTT 800ms ~ 1200ms) 및 Packet Drop 5% 통신 파티션 주입",
        "장애 이력이 수집된 유저 시나리오를 바탕으로 주문 동시 요청 타임스탬프 심층 추적",
        "서버 게이트웨이 병목 구간을 시뮬레이션하는 복합 트랜잭션 수치 작성 및 실행",
        "Low-Memory 단말 환경 기기 백그라운드 95% 부하 상황 설계"
      ],
      result: "특정 게이트웨이 응답 수신 전 두 번째 로컬 UI 변경 API가 비동기 레이스 컨디션을 일으켜 화면 상태를 무한 대기로 묶는 미세 에러 발생 조건을 최종 유도해내는 데 성공. 개발팀에 정확한 타이밍 다이어그램과 패킷 조건 전달하여 상용 방어 코드 배포 완료하였습니다.",
      learned: "아무리 사소해 보이거나 재현 불가 타이틀을 단 VOC라도 인프라 및 전송 조건의 합세를 끝까지 탐구하면 결국 재현된다는 것을 깨달았습니다. 운영 품질은 현장의 거친 통신 한계 속에서 증명해야 함을 배웠습니다.",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      externalLink: "https://github.com/product-qa-toss/kb-sec-latency-debugger",
      linkText: "차트 분석 및 Charles Proxy 모의 기록 지라 티켓",
      visible: true
    },
    {
      id: "proj-2",
      title: "더한섬 파트너오피스 유통 정보화",
      subtitle: "스펙 급변 및 극심한 개발 지연 상황에서의 기한 내 인수 테스트 전술 및 프로세스 정상화",
      ratio: "25%",
      problem: "오피스 시스템 리뉴얼 개발 중, 기획 사양의 추가 변경 요구가 배포 예정 주간까지도 뒤엉키고 빌드가 계속 흔들리며 정상적인 검증 차수 진행이 원천 불가능하여 런칭 중단 직전 위기 직면.",
      challenge: "기한 압박에 몰려 QA 검증을 생략하거나 단순 해피패스만 테스트해 출시하자는 압박이 거셌으나, 유통 공급망 원장 오작동 시 재고 대혼란이 기정사실화된 고위험 상황.",
      approach: [
        "기다리는 수동 테스트 대신, 핵심 인수 준거 기준(Acceptance Criteria) 단위를 슬라이싱하여 점진적 조기 검증 모드로 즉각 개편",
        "요구사항 변동 이력을 Jira 티켓 기반 마스터 표에 시각 맵핑하여 소통 오해 원천 봉쇄",
        "일일 30분 버그 트리아지(Triage) 허들을 직접 리드해 지연 원인 핵심 제거"
      ],
      result: "기획 변경 리스크 영역을 100% 가시적으로 확인하며 핵심 모듈 무장애 무패치 정상 출시. 본래 스펙 소요일 대비 약 4일의 품질 일정을 혁신적으로 압축하는 데 성공하였습니다.",
      learned: "상황이 긴박할수록 감정에 휩쓸리지 않고, 기획-개발-QA가 공유 가능한 명확한 트리아지 기준과 가시적인 마스터 진행판을 마련해주는 것이 조력자의 가치임을 깨달았습니다.",
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      externalLink: "https://github.com/product-qa-toss/acceptance-criteria-triage",
      linkText: "Jira 트라이아지 마스터 인스펙터 대시보드",
      visible: true
    },
    {
      id: "proj-3",
      title: "EQL 커머스 원장 및 정합 검증",
      subtitle: "신년 고단위 복합 할인 프로모션 원장 회계 정합성 및 결제 한계값 집중 방어 설계",
      ratio: "15%",
      problem: "고객 등급별 할인, 한정 쿠폰 조합, 마일리지 적용 시 최종 계산식의 소수점 보할 처리 편차로 인해 실 결제 금액이 마이너스(-)가 되거나 0원 우회 결제가 성립할 잠재 위기가 탐지됨.",
      challenge: "쿠폰 조합 및 적용 정책 수가 수천 개가 넘어 전수 테스트가 불가능하여, 실 사용 상황에서 일어날 수 있는 오차를 최단 시간 내 정확히 걸러내야만 하는 상황.",
      approach: [
        "경계 조건에 대한 페어와이즈(Pairwise Testing) 기법 매트릭스를 구성해 2천 개의 조합을 단 70여 주요 대표 시나리오로 압축 검수",
        "동시 결제 유입 상황 복제 도구(jMeter) 연동 설계로 지연 동시성 결제 트랙 추적",
        "DB 원장 데이터와 클라이언트 앱 할인 캐싱 값 간의 싱크 오차 타임 분석"
      ],
      result: "순차 조합 체크 중 쿠폰 선후관계 계산이 꼬여 한결값을 추가 이탈할 수 있었던 복합 치명적 할인 계산 버그 3건을 선제적으로 찾아내고 정제. 금전적 손해가 발생할 수 있던 중대 손실 가능성을 런칭 전에 방어하였습니다.",
      learned: "돈을 다루는 트랜잭션의 정합성은 기업 신뢰의 핵심입니다. 경계 분석과 구조화 기술을 통해 조합 테스트의 한계를 극복하고 보이지 않는 1원 한 자리 수 정량 오차를 방어해내서 보람찼습니다.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      externalLink: "https://github.com/product-qa-toss/pairwise-matrix-generator",
      linkText: "신년 프로모션 70여 종 페어와이즈 매트릭스 도출표",
      visible: true
    }
  ],
  workingStyle: [
    {
      id: "style-1",
      title: "단순 현상 고발이 아닌, 해결 단서와 재현 로그의 명확한 전달",
      description: "\"페이지가 안 나옵니다\"라는 불명확한 접수 대신 \"특정 디바이스 다크 모드 상황에서, 3번 API 동시 유효 수신 지연이 발생할 때 레이스 컨디션으로 약 80% 확률로 프리징됩니다. Charles 덤프 로그와 디버그 덤프를 첨부합니다\"와 같이 개발 파트너가 즉시 해결 행동에 돌입하도록 정보를 패키지해서 제공합니다.",
      visible: true
    },
    {
      id: "style-2",
      title: "사업적 타격도(Severity)와 실 사용자 영향도(Priority)에 입각한 우선순위 수호",
      description: "기계적인 심각도 판단을 거부합니다. 레이아웃 11픽셀 어긋남 같은 경결함도 주 전환 경로인 결제 버튼 근처에 있다면 최우선 순위로 조향하며, 복잡하지만 유저 노출도가 극도로 적은 버그는 개발 일정을 존중해 타협 가능한 시점으로 배율을 맞추는 영리한 매니징을 펼칩니다.",
      visible: true
    },
    {
      id: "style-3",
      title: "품질은 배포를 차단하는 브레이크가 아니라, 신나게 나아가게 하는 핸들",
      description: "QA를 결함 검열관으로 보지 않고, 비즈니스 아이디어가 마켓에 신속하고 건강하게 나갈 수 있도록 함께 대안을 모색하고 조율하는 든든한 파트너 메신저로 협업합니다.",
      visible: true
    }
  ],
  contact: {
    email: "jse177@gmail.com",
    github: "github.com/product-qa-toss",
    linkedin: "linkedin.com/in/product-qa-toss",
    resumeUrl: "#",
    portfolioUrl: "#"
  }
};
