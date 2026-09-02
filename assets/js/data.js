/**
 * ==========================================================================
 * 포트폴리오 데이터 설정 파일 (data.js) - 회계학 전공 맞춤
 * ==========================================================================
 */

const portfolioData = {
  // 기본 프로필 정보
  profile: {
    name: "이영준",
    englishName: "Youngjun Lee",
    university: "강원대학교 강릉캠퍼스",
    department: "경영대학 회계학과",
    major: "회계학 전공",
    grade: "2학년 재학",
    role: "강원대학교 회계학과 2학년",
    typingTitles: [
      "강원대학교 회계학과 2학년 이영준",
      "재무회계 & K-IFRS 재무제표 분석",
      "원가관리회계 & 손익분기점(BEP) 시뮬레이션",
      "세무회계 & 부가가치세·법인세 세무조정 탐구",
      "Excel 기반 재무 모델링 & 데이터 분석",
      "정확성과 신뢰를 추구하는 회계인"
    ],
    greeting: "반갑습니다! 숫자를 통해 기업의 가치를 투명하게 분석하는",
    shortBio: "강원대학교 강릉캠퍼스 회계학과 2학년에 재학 중인 이영준입니다. 재무회계, 원가관리회계, 세무회계 등 탄탄한 전공 이론을 바탕으로 기업의 재무 상태를 분석하고, 실무 엑셀과 데이터 역량을 결합하여 신뢰성 높은 인사이트를 도출하고자 합니다.",
    location: "강원특별자치도 강릉시 (강원대학교 강릉캠퍼스)",
    email: "tktlswnsldi2@gmail.com",
    avatar: "", // 사진 미사용
    resumeUrl: "#",
    status: {
      available: true,
      text: "강원대학교 회계학과 2학년 재학 중 🎓"
    }
  },

  // 소셜 / 외부 링크
  socialLinks: [
    {
      name: "이메일 문의",
      icon: "fa-solid fa-envelope",
      url: "mailto:tktlswnsldi2@gmail.com",
      color: "hover:text-blue-600"
    }
  ],

  // 핵심 역량 및 가치관 (About Me 섹션)
  highlights: [
    {
      icon: "fa-solid fa-scale-balanced",
      title: "재무회계 & K-IFRS 기준 분석",
      description: "재무상태표, 손익계산서, 현금흐름표의 유기적 관계를 이해하고 K-IFRS 회계기준에 따른 기업의 수익성과 재무건전성을 다각도로 평가합니다."
    },
    {
      icon: "fa-solid fa-chart-pie",
      title: "원가관리 & 손익 의사결정",
      description: "고정비와 변동비 분류, CVP(원가-조업도-이익) 분석을 통해 손익분기점(BEP)을 산출하고 합리적인 원가 절감 및 가격 전략을 탐구합니다."
    },
    {
      icon: "fa-solid fa-file-invoice-dollar",
      title: "세무회계 & 세법 기초",
      description: "부가가치세법과 법인세법의 기본 구조를 익히고, 기업 회계이익과 과세소득의 차이를 조정하는 세무조정 원리를 학습하고 있습니다."
    },
    {
      icon: "fa-solid fa-table",
      title: "Excel 실무 재무 모델링",
      description: "복식부기 원리를 반영한 분개장 자동 집계, 피벗테이블, 고급 재무 함수를 활용해 실무에서 활용 가능한 재무 템플릿을 구축합니다."
    }
  ],

  // 주요 학업 현황 통계
  stats: [
    { label: "소속 대학", value: "강원대학교" },
    { label: "전공 학과", value: "회계학과" },
    { label: "현재 학년", value: "2학년" },
    { label: "캠퍼스", value: "강릉캠퍼스" }
  ],

  // 전공 역량 및 지식 (Skills & Competencies 섹션)
  skills: {
    financial: [ // 1. 재무 및 관리회계
      { name: "재무회계 (Financial Accounting)", level: "전공 심화", icon: "fa-solid fa-coins" },
      { name: "원가관리회계 (Cost & Management)", level: "전공 이수", icon: "fa-solid fa-chart-pie" },
      { name: "재무제표 분석 (FS Analysis)", level: "심층 분석", icon: "fa-solid fa-chart-line" },
      { name: "회계원리 & 복식부기 원리", level: "완전 숙지", icon: "fa-solid fa-book-open" },
      { name: "K-IFRS 회계기준 이해", level: "학습 중", icon: "fa-solid fa-landmark" }
    ],
    tax: [ // 2. 세무회계 & 경영 지식
      { name: "부가가치세법 기초 및 신고", level: "기초 습득", icon: "fa-solid fa-receipt" },
      { name: "법인세법 및 세무조정 원리", level: "학습 중", icon: "fa-solid fa-file-invoice-dollar" },
      { name: "경영학 원론 & 기업윤리", level: "이수 완료", icon: "fa-solid fa-building-columns" },
      { name: "경제학 기초 & 거시/미시", level: "이수 완료", icon: "fa-solid fa-globe" }
    ],
    tools: [ // 3. 실무 도구 & 자격 역량
      { name: "Microsoft Excel (고급 함수/피벗)", level: "고급 활용", icon: "fa-solid fa-table" },
      { name: "전산세무회계 / 더존 ERP 실습", level: "실습 및 준비", icon: "fa-solid fa-calculator" },
      { name: "PowerPoint 보고서 프레젠테이션", level: "능숙", icon: "fa-solid fa-file-powerpoint" },
      { name: "한글 (HWP) & MS Word", level: "능숙", icon: "fa-solid fa-file-lines" }
    ]
  },

  // 학술 분석 및 프로젝트 (Projects 섹션)
  projects: [
    {
      id: "project-1",
      title: "국내 상장기업 (삼양식품 vs 농심) 재무 성과 및 수익성 비교 분석",
      category: "financial", // financial, cost, tax
      period: "2024.09 - 2024.12",
      thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
      description: "K-IFRS 사업보고서(DART)를 기반으로 3개년 재무비율과 듀퐁(DuPont) 분석을 실시하여 해외 수출 성장에 따른 수익 구조 변화를 비교 분석한 과제입니다.",
      longDescription: "금융감독원 전자공시시스템(DART)의 최근 3개년 사업보고서를 바탕으로 안정성(유동비율, 부채비율), 수익성(매출액영업이익률, ROE, ROA), 활동성(매출채권회전율, 재고자산회전율) 지표를 정밀 산출했습니다. 특히 듀퐁 시스템을 적용하여 ROE의 세부 변동 원인을 순이익률, 총자산회전율, 재무레버리지로 분해하여 심층 비교 보고서를 완성했습니다.",
      tags: ["재무회계", "재무비율분석", "듀퐁(DuPont) 분석", "DART 전자공시", "K-IFRS"],
      reportUrl: "#",
      highlights: [
        "최근 3개년 재무상태표 및 손익계산서 데이터 엑셀 모델링",
        "듀퐁 분석(DuPont Analysis)을 통한 주주 수익성(ROE) 원인 규명",
        "수출 비중 증가에 따른 환율 변동 영향 및 영업이익률 민감도 분석",
        "업계 평균 대비 재무건전성 및 향후 재무 리스크 평가 보고서 도출"
      ]
    },
    {
      id: "project-2",
      title: "제조기업 원가구조 분석 및 CVP(손익분기점) 시뮬레이션",
      category: "cost",
      period: "2024.10 - 2024.11",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "고정원가와 변동원가를 분리하여 손익분기점(BEP) 매출액과 안전한계율을 도출하고, 목표 영업이익 달성을 위한 최적 가격 전략을 시뮬레이션했습니다.",
      longDescription: "원가관리회계 이론을 실제 제조기업 사례에 적용하여 고저점법과 계정분류법으로 원가를 행태별로 분리하였습니다. CVP(Cost-Volume-Profit) 공식을 엑셀 함수로 모델링하여 조업도 변화에 따른 손익분기점 변동을 시뮬레이션하고, 영업레버리지도(DOL)를 계산하여 원가 구조의 탄력성을 평가했습니다.",
      tags: ["원가관리회계", "CVP 분석", "손익분기점(BEP)", "공헌이익률", "경영 의사결정"],
      reportUrl: "#",
      highlights: [
        "고정원가 및 변동원가 분리를 통한 제품별 공헌이익 산출",
        "목표 이익 달성을 위한 필요 판매량 및 가격 민감도 시뮬레이션",
        "영업레버리지도(DOL) 측정을 통한 매출 변동 시 영업이익 위험도 분석",
        "단기 특수 의사결정(특별 주문 수락 여부) 케이스 분석"
      ]
    },
    {
      id: "project-3",
      title: "Excel 기반 복식부기 월별 손익계산서 & 자금수지 자동 관리 모델",
      category: "financial",
      period: "2024.03 - 2024.06",
      thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      description: "복식부기 원리를 활용하여 일별 거래 분개를 입력하면 총계정원장과 월별 손익계산서(P&L), 자금 현황이 자동 집계되는 엑셀 시스템입니다.",
      longDescription: "차변과 대변의 일치 원리를 검증하는 자동 오류 검출 수식을 구성하고, SUMIFS, INDEX/MATCH, 피벗테이블을 활용해 계정과목별 집계가 실시간으로 반영되도록 설계했습니다. 소상공인이나 학과 학생회 등에서 간편하게 자금 및 손익을 통제할 수 있는 실무 템플릿입니다.",
      tags: ["복식부기", "전산회계", "손익계산서(P&L)", "Excel 모델링", "자금관리"],
      reportUrl: "#",
      highlights: [
        "차·대변 불일치 시 실시간 경고를 띄우는 데이터 유효성 검사 적용",
        "계정과목 코드체계(자산, 부채, 자본, 수익, 비용)에 맞춘 자동 분류",
        "월별 매출·비용 추이 및 영업이익률 동적 그래프 자동 생성"
      ]
    },
    {
      id: "project-4",
      title: "부가가치세 신고 및 주요 세무조정(익금/손금) 기초 케이스 연구",
      category: "tax",
      period: "2024.04 - 2024.05",
      thumbnail: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      description: "매입매출 전표 데이터를 바탕으로 부가가치세 과세표준을 산출하고, 법인세법상 주요 결산조정 및 신고조정 항목의 세무조정 절차를 연구했습니다.",
      longDescription: "세법 전공 기초 지식을 바탕으로 부가가치세 일반과세자의 세금계산서 발행 및 매입세액 불공제 항목을 정리하고 모의 신고서를 작성했습니다. 또한 기업회계상 당기순이익과 법인세법상 각 사업연도 소득금액의 차이를 메우는 익금산입, 손금불산입 및 소득처분(상여, 배당 등) 절차를 도식화했습니다.",
      tags: ["세무회계", "부가가치세법", "법인세법", "세무조정", "소득처분"],
      reportUrl: "#",
      highlights: [
        "부가가치세 매입세액 공제 및 불공제(접대비, 비영업용 소형승용차 등) 분류",
        "회계상 수익/비용과 세법상 익금/손금 차이 조정 프로세스 분석",
        "소득처분(유보, 사외유출 등)에 따른 사후관리 메커니즘 정리"
      ]
    }
  ],

  // 학업 및 활동 이력 (Journey & Timeline 섹션)
  timeline: [
    {
      period: "2024.03 - 현재",
      role: "강원대학교 경영대학 회계학과 2학년 재학",
      organization: "강원대학교 (강릉캠퍼스)",
      description: "재무회계, 원가관리회계, 세법 등 전공 심화 과목을 수강하며 기업 재무제표 분석과 실무 엑셀 활용 능력을 집중적으로 기르고 있습니다.",
      badges: ["강원대학교", "회계학과", "2학년 재학", "재무회계", "원가관리회계"]
    },
    {
      period: "2023.03 - 2024.02",
      role: "회계학과 1학년 이수 및 전공 기초 확립",
      organization: "강원대학교 (강릉캠퍼스)",
      description: "회계원리, 경영학원론, 경제학기초 등 경영·회계학 전반의 기본 소양을 탄탄히 쌓았습니다.",
      badges: ["회계원리", "경영학원론", "경제학개론", "복식부기 기초"]
    },
    {
      period: "2023.02",
      role: "고등학교 졸업",
      organization: "High School",
      description: "성실한 학업 태도와 수리적 논리력 및 책임감 있는 기본 역량 배양.",
      badges: ["고교 졸업", "성실성"]
    }
  ],

  // 연락처 정보
  contact: {
    title: "함께 소통하고 성장하는 회계인이 되겠습니다",
    description: "강원대학교 회계학과 2학년 이영준입니다. 전공 학술 스터디, 자격증 준비, 기업 분석 프로젝트 등 교류와 협업에 열려 있습니다.",
    email: "tktlswnsldi2@gmail.com",
    location: "강원특별자치도 강릉시 (강원대학교 강릉캠퍼스)",
    availabilityText: "이메일로 문의 주시면 정성껏 확인 후 회신드리겠습니다 ✉️"
  }
};
