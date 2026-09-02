/**
 * ==========================================================================
 * 포트폴리오 데이터 설정 파일 (data.js)
 * ==========================================================================
 */

const portfolioData = {
  // 기본 프로필 정보
  profile: {
    name: "이영준",
    englishName: "Youngjun Lee",
    university: "강원대학교 강릉캠퍼스",
    major: "회계학과",
    grade: "2학년 재학",
    role: "강원대학교 회계학과 2학년",
    typingTitles: [
      "강원대학교 회계학과 2학년",
      "회계 & 재무 데이터 분석",
      "정확성과 꼼꼼함을 갖춘 인재",
      "Accounting & Finance Explorer",
      "끊임없이 배우고 성장하는 학생"
    ],
    greeting: "안녕하세요! 숫자로 가치를 분석하고 인사이트를 찾는",
    shortBio: "강원대학교 강릉캠퍼스 회계학과 2학년에 재학 중인 이영준입니다. 탄탄한 회계·재무 기초와 데이터 분석 역량을 바탕으로 신뢰할 수 있는 비즈니스 가치를 만들어가고자 합니다.",
    location: "Gangneung / Seoul, Republic of Korea",
    email: "tktlswnsldi2@gmail.com",
    avatar: "", // 사진 미사용 (그래픽 배지로 대체)
    resumeUrl: "#",
    status: {
      available: true,
      text: "강원대학교 강릉캠퍼스 회계학과 2학년 재학 중 🎓"
    }
  },

  // 소셜 / 외부 링크
  socialLinks: [
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/tktlswnsldi2",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "Email",
      icon: "fa-solid fa-envelope",
      url: "mailto:tktlswnsldi2@gmail.com",
      color: "hover:text-rose-500"
    }
  ],

  // 핵심 역량 및 강점 (About Me 섹션)
  highlights: [
    {
      icon: "fa-solid fa-calculator",
      title: "재무 및 회계 전공 역량",
      description: "재무회계, 원가관리회계, 세무회계 등 회계학 전공 기초를 탄탄히 다지며 기업의 재무 상태와 경영 성과를 정확히 분석합니다."
    },
    {
      icon: "fa-solid fa-file-excel",
      title: "데이터 활용 & 엑셀 분석",
      description: "Excel 고급 함수 및 피벗 테이블, 데이터 시각화를 활용하여 복잡한 수치 데이터를 체계적으로 정리하고 가공합니다."
    },
    {
      icon: "fa-solid fa-magnifying-glass-chart",
      title: "꼼꼼한 검증과 오차 없는 성실성",
      description: "작은 오차도 놓치지 않는 철저한 검증 태도와 책임감으로 신뢰성 높은 결과물을 도출합니다."
    },
    {
      icon: "fa-solid fa-graduation-cap",
      title: "지속적인 전공 심화 & 자기계발",
      description: "전공 학업뿐만 아니라 전산회계/세무 자격증 취득 및 비즈니스 트렌드 탐구를 통해 지속적으로 성장하고 있습니다."
    }
  ],

  // 주요 통계 / 상태 수치
  stats: [
    { label: "소속 대학", value: "강원대학교" },
    { label: "전공 학과", value: "회계학과" },
    { label: "현재 학년", value: "2학년" },
    { label: "캠퍼스", value: "강릉캠퍼스" }
  ],

  // 기술 및 지식 역량 (Skills & Competencies 섹션)
  skills: {
    frontend: [ // 전공 지식 & 회계 영역
      { name: "재무회계 (Financial Accounting)", level: "전공 심화", icon: "fa-solid fa-coins" },
      { name: "원가관리회계 (Cost Accounting)", level: "전공 이수", icon: "fa-solid fa-chart-pie" },
      { name: "재무제표 분석 (FS Analysis)", level: "기초/활용", icon: "fa-solid fa-chart-line" },
      { name: "세법 및 세무회계 기초", level: "학습 중", icon: "fa-solid fa-receipt" },
      { name: "경영학 원론 / 경제학 기초", level: "이수 완료", icon: "fa-solid fa-book-bookmark" }
    ],
    backend: [ // 실무 툴 & 오피스/데이터 역량
      { name: "Microsoft Excel (고급 함수/피벗)", level: "고급 활용", icon: "fa-solid fa-table" },
      { name: "전산세무회계 / ERP 기초", level: "실습 및 준비", icon: "fa-solid fa-database" },
      { name: "PowerPoint & 보고서 작성", level: "능숙", icon: "fa-solid fa-file-powerpoint" },
      { name: "한글 / MS Word", level: "능숙", icon: "fa-solid fa-file-lines" }
    ],
    devops_tools: [ // IT & 협업 도구
      { name: "GitHub / Git", level: "기초 활용", icon: "fa-brands fa-github" },
      { name: "Notion / 생산성 도구", level: "능숙", icon: "fa-solid fa-note-sticky" },
      { name: "Python / 데이터 기초", level: "관심 및 탐구", icon: "fa-brands fa-python" }
    ]
  },

  // 프로젝트 및 학술/과제 활동 (Projects 섹션)
  projects: [
    {
      id: "project-1",
      title: "국내 상장기업 재무제표 비교 분석 보고서",
      category: "analysis",
      featured: true,
      period: "2024.09 - 2024.12",
      thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
      description: "동일 산업군 내 주요 기업의 재무제표(재무상태표, 손익계산서, 현금흐름표)를 비교하여 안정성·수익성·성장성을 심층 분석한 프로젝트입니다.",
      longDescription: "DART 전자공시시스템의 사업보고서를 기반으로 재무비율 분석(유동비율, 부채비율, ROE, 영업이익률 등)을 수행하고, 엑셀을 활용한 시각화 차트와 기업 분석 리포트를 작성하였습니다.",
      tags: ["재무회계", "재무비율분석", "DART 전자공시", "Excel 시각화"],
      githubUrl: "https://github.com/tktlswnsldi2",
      demoUrl: "#",
      highlights: [
        "최근 3개년 재무 데이터를 기반으로 한 듀퐁(DuPont) 분석 수행",
        "엑셀 피벗테이블과 동적 차트를 통한 직관적인 재무 지표 시각화",
        "기업의 잠재 리스크 요인 및 향후 경영 성과 전망 도출"
      ]
    },
    {
      id: "project-2",
      title: "엑셀 기반 스마트 자산·손익 관리 템플릿",
      category: "tools",
      featured: true,
      period: "2024.03 - 2024.06",
      thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      description: "월별 수입/지출 내역을 입력하면 자동으로 계정과목별 분류와 손익 현황을 집계해주는 자동화 엑셀 대시보드입니다.",
      longDescription: "조건부 서식, VLOOKUP/INDEX-MATCH, SUMIFS 함수를 응용하여 복잡한 수기 작업 없이도 월간/연간 손익 추이와 예산 대비 달성률을 한눈에 파악할 수 있도록 설계했습니다.",
      tags: ["Excel 고급함수", "대시보드 설계", "손익관리", "원가/비용 통제"],
      githubUrl: "https://github.com/tktlswnsldi2",
      demoUrl: "#",
      highlights: [
        "복식부기 개념을 일부 차용한 수입·지출 계정 분류 체계 구축",
        "예산 초과 시 자동 알림을 제공하는 동적 조건부 서식 적용",
        "카테고리별 지출 비중 도넛 차트 및 추세선 자동 생성"
      ]
    },
    {
      id: "project-3",
      title: "원가 구조 분석 및 가격 결정 시뮬레이션",
      category: "analysis",
      featured: false,
      period: "2024.10 - 2024.11",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "제조 기업의 고정원가와 변동원가를 분류하고 손익분기점(BEP)을 산출하여 최적의 판매 전략을 도출한 케이스 스터디입니다.",
      longDescription: "CVP(원가-조업도-이익) 분석 모델을 적용하여 생산량 변동에 따른 영업이익 민감도를 시뮬레이션하고, 목표 이익 달성을 위한 최적 가격대를 제안했습니다.",
      tags: ["원가관리회계", "CVP 분석", "손익분기점(BEP)", "경영 의사결정"],
      githubUrl: "https://github.com/tktlswnsldi2",
      demoUrl: "#",
      highlights: [
        "안전한계율(Margin of Safety) 및 영업레버리지도(DOL) 계산",
        "목표 이익 달성을 위한 다각적 시나리오 분석",
        "원가 절감 방안 및 가격 전략 제안서 작성"
      ]
    }
  ],

  // 이력 및 타임라인 (Journey & Timeline 섹션)
  timeline: [
    {
      period: "2024.03 - 현재",
      role: "회계학과 2학년 재학",
      organization: "강원대학교 (강릉캠퍼스)",
      description: "재무회계, 원가관리회계 등 전공 핵심 과목을 집중 수강하며 회계 및 재무 데이터 분석 역량을 기르고 있습니다.",
      badges: ["강원대학교", "회계학과", "2학년", "전공심화"]
    },
    {
      period: "2023.03 - 2024.02",
      role: "회계학과 1학년 이수 및 전공 기초 확립",
      organization: "강원대학교 (강릉캠퍼스)",
      description: "회계원리, 경영학 및 경제학 기초 과목을 수강하고 다양한 교내 학술 활동에 참여하였습니다.",
      badges: ["회계원리", "경영학기초", "경제학개론"]
    },
    {
      period: "2023.02",
      role: "고등학교 졸업",
      organization: "High School",
      description: "성실한 학업 수행 및 논리적 사고력과 수리적 역량 배양.",
      badges: ["졸업"]
    }
  ],

  // 연락처 정보
  contact: {
    title: "함께 소통하고 성장해 나가요!",
    description: "강원대학교 회계학과 이영준입니다. 전공 스터디, 학술 교류, 프로젝트 협업 또는 궁금하신 점이 있으시면 언제든지 편하게 연락주세요.",
    email: "tktlswnsldi2@gmail.com",
    location: "강원특별자치도 강릉시 / 강원대학교 강릉캠퍼스",
    availabilityText: "이메일로 연락 주시면 빠르게 확인 후 답변드리겠습니다 ☕"
  }
};
