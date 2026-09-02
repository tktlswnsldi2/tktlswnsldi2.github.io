/**
 * ==========================================================================
 * 포트폴리오 데이터 설정 파일 (data.js)
 * ==========================================================================
 * 이 파일의 내용을 수정하여 포트폴리오의 모든 텍스트, 링크, 프로젝트, 기술 스택 등을
 * 손쉽게 변경할 수 있습니다.
 */

const portfolioData = {
  // 기본 프로필 정보
  profile: {
    name: "홍길동", // 본인 이름 또는 닉네임
    englishName: "Gildong Hong",
    role: "Full-Stack Developer", // 대표 직무
    typingTitles: [
      "Full-Stack Developer",
      "Frontend Specialist",
      "Problem Solver",
      "Open Source Enthusiast",
      "Continuous Learner"
    ],
    greeting: "안녕하세요! 가치를 만드는 개발자",
    shortBio: "사용자 중심의 가치 있는 프로덕트를 만들고, 최적화된 웹 경험과 안정적인 시스템 구축에 열정을 가진 개발자입니다.",
    location: "Seoul, Republic of Korea",
    email: "your-email@example.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80", // 프로필 이미지 URL 또는 로컬 경로
    resumeUrl: "#", // 이력서 PDF 또는 노션 링크 (없으면 '#' 유지)
    status: {
      available: true,
      text: "Currently open for new opportunities" // 현재 구직/프로젝트 참여 가능 상태
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
      url: "mailto:your-email@example.com",
      color: "hover:text-rose-500"
    },
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      url: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      name: "Velog / Blog",
      icon: "fa-solid fa-blog",
      url: "https://velog.io",
      color: "hover:text-emerald-500"
    }
  ],

  // 핵심 가치 및 강점 (About Me 섹션)
  highlights: [
    {
      icon: "fa-solid fa-code",
      title: "클린 코드 & 최적화",
      description: "가독성과 유지보수성이 높은 모듈형 코드를 지향하며, 성능 병목을 찾아 최적화하는 데 집중합니다."
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "UI/UX & 사용자 경험",
      description: "인터랙티브하고 직관적인 인터페이스를 설계하여 사용자에게 즐겁고 매끄러운 경험을 제공합니다."
    },
    {
      icon: "fa-solid fa-bolt",
      title: "빠른 학습 & 문제 해결",
      description: "새로운 기술 트렌드를 빠르게 습득하고 실제 프로덕트의 문제 해결에 적재적소로 적용합니다."
    },
    {
      icon: "fa-solid fa-comments",
      title: "협업과 커뮤니케이션",
      description: "팀원과의 원활한 소통 및 코드 리뷰 문화를 중요시하며 함께 성장하는 협업 환경을 만듭니다."
    }
  ],

  // 주요 통계 수치
  stats: [
    { label: "Projects Completed", value: "12+" },
    { label: "Git Commits", value: "800+" },
    { label: "Years Experience", value: "2+" },
    { label: "Tech Stack", value: "15+" }
  ],

  // 기술 스택 (Skills 섹션)
  skills: {
    frontend: [
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Tailwind CSS", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5 / CSS3", level: "Master", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
    ],
    backend: [
      { name: "Node.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI / Django", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "PostgreSQL", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ],
    devops_tools: [
      { name: "Git & GitHub", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Vercel", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Figma", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ]
  },

  // 프로젝트 목록 (Projects 섹션)
  projects: [
    {
      id: "project-1",
      title: "AI 기반 스마트 대시보드",
      category: "web", // 필터용: all, web, fullstack, mobile, ai
      featured: true,
      period: "2025.01 - 2025.03",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "실시간 데이터 시각화와 AI 인사이트 분석을 제공하는 풀스택 SaaS 웹 대시보드 플랫폼입니다.",
      longDescription: "사용자가 업로드한 대량의 비즈니스 데이터를 실시간으로 차트화하고, LLM API를 연동하여 트렌드 예측과 요약 인사이트를 자동 도출하는 웹 애플리케이션입니다. 대용량 데이터 렌더링 성능을 40% 개선하였습니다.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "FastAPI", "OpenAI"],
      githubUrl: "https://github.com/tktlswnsldi2",
      demoUrl: "https://github.com/tktlswnsldi2",
      highlights: [
        "WebSocket을 활용한 실시간 데이터 스트리밍 파이프라인 구축",
        "가상 스크롤(Virtual Scroll) 기법으로 대규모 테이블 렌더링 최적화",
        "반응형 대시보드 그리드 및 다크 테마 커스텀 지원"
      ]
    },
    {
      id: "project-2",
      title: "개발자 테크 블로그 플랫폼",
      category: "fullstack",
      featured: true,
      period: "2024.08 - 2024.11",
      thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
      description: "마크다운 기반의 코드 하이라이팅과 댓글, 북마크 기능을 갖춘 모던 기술 블로그 서비스입니다.",
      longDescription: "Next.js의 App Router와 SSR/SSG를 결합하여 완벽한 SEO 최적화와 빠른 페이지 로드 속도를 달성했습니다. OAuth2 소셜 로그인과 마크다운 WYSIWYG 에디터를 탑재했습니다.",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      githubUrl: "https://github.com/tktlswnsldi2",
      demoUrl: "https://github.com/tktlswnsldi2",
      highlights: [
        "Next.js SSG 적용으로 Lighthouse 성능 점수 98점 달성",
        "GitHub / Google OAuth 간편 인증 및 JWT 보안 세션 관리",
        "KaTeX 수학 기호 및 Prism.js 코드 블록 렌더링 지원"
      ]
    },
    {
      id: "project-3",
      title: "실시간 협업 화이트보드 캔버스",
      category: "web",
      featured: false,
      period: "2024.04 - 2024.06",
      thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
      description: "여러 사용자가 동시에 브레인스토밍하고 드로잉할 수 있는 실시간 캔버스 협업 도구입니다.",
      longDescription: "HTML5 Canvas API와 Socket.io를 결합하여 다자간 드로잉, 스티커 메모, 도형 추가 및 이미지 내보내기 기능을 지연 없이 실시간으로 동기화했습니다.",
      tags: ["JavaScript", "HTML5 Canvas", "Socket.io", "Express", "Tailwind CSS"],
      githubUrl: "https://github.com/tktlswnsldi2",
      demoUrl: "https://github.com/tktlswnsldi2",
      highlights: [
        "WebRTC 및 Socket.io 기반의 초저지연 상태 동기화",
        "Undo / Redo 히스토리 스택 패턴 구현",
        "PNG/SVG 고해상도 이미지 내보내기 지원"
      ]
    },
    {
      id: "project-4",
      title: "크로스 플랫폼 모바일 피트니스 앱",
      category: "mobile",
      featured: false,
      period: "2023.10 - 2023.12",
      thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
      description: "개인 맞춤형 운동 루틴과 섭취 칼로리를 기록하고 통계를 확인하는 모바일 앱입니다.",
      longDescription: "React Native를 활용해 iOS 및 Android 크로스 플랫폼을 단일 코드베이스로 구축했습니다. 로컬 오프라인 데이터 동기화와 알림 기능을 지원합니다.",
      tags: ["React Native", "Expo", "Redux Toolkit", "Firebase", "AsyncStorage"],
      githubUrl: "https://github.com/tktlswnsldi2",
      demoUrl: "https://github.com/tktlswnsldi2",
      highlights: [
        "오프라인 우선(Offline-first) 아키텍처로 네트워크 불안정 대응",
        "일/주/월별 운동 통계 및 달성률 시각화 그래프",
        "푸시 알림 스케줄러를 통한 운동 습관 리마인드"
      ]
    }
  ],

  // 이력 및 타임라인 (Experience / Timeline 섹션)
  timeline: [
    {
      period: "2024.03 - 현재",
      role: "프론트엔드 / 풀스택 개발자",
      organization: "Tech Company / Freelance",
      description: "웹 프로덕트 프론트엔드 개발 및 신규 기능 설계, 성능 최적화와 디자인 시스템 구축을 담당하고 있습니다.",
      badges: ["React", "TypeScript", "Next.js", "Team Lead"]
    },
    {
      period: "2023.01 - 2023.12",
      role: "소프트웨어 엔지니어링 부트캠프 수료",
      organization: "Software Academy",
      description: "알고리즘, 웹 표준, 데이터베이스, 풀스택 협업 프로젝트 3회 진행 및 우수 프로젝트 선정.",
      badges: ["Full-Stack", "Agile", "Git-flow"]
    },
    {
      period: "2019.03 - 2023.02",
      role: "컴퓨터공학 / 소프트웨어 전공",
      organization: "University",
      description: "컴퓨터 구조, 자료구조, 운영체제, 네트워크 및 데이터베이스 등 CS 핵심 기초 습득.",
      badges: ["Computer Science", "BS Degree"]
    }
  ],

  // 연락처 정보
  contact: {
    title: "함께 멋진 프로젝트를 만들어 볼까요?",
    description: "새로운 기회, 협업 제안, 프로젝트 문의 또는 가벼운 인사 모두 언제나 환영합니다. 아래 이메일이나 소셜 링크를 통해 편하게 연락주세요!",
    email: "tktlswnsldi2@gmail.com", // 사용자 이메일
    location: "Seoul, South Korea",
    availabilityText: "보통 24시간 이내에 답장드립니다 ☕"
  }
};
