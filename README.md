# 🚀 Personal Portfolio & Website

GitHub Pages(`https://tktlswnsldi2.github.io`) 전용으로 제작된 모던하고 세련된 개인 포트폴리오 웹사이트입니다.

별도의 복잡한 빌드 도구나 프레임워크 설치 없이, **`assets/js/data.js` 파일 하나만 수정**하면 사이트의 모든 텍스트, 프로젝트, 스킬, 연락처 정보가 자동으로 반영됩니다.

---

## ✨ 주요 기능 및 특징

- 🌓 **다크 모드 / 라이트 모드 지원**: 사용자 시스템 테마 자동 감지 및 토글 저장
- 📱 **완벽한 반응형 웹**: 모바일, 태블릿, 데스크톱 등 모든 기기 최적화
- ⌨️ **Hero 타이핑 애니메이션**: 직무 및 관심 분야 자동 타이핑 효과
- 🎨 **모던 글래스모피즘 UI**: 반투명 블러 효과, 은은한 배경 오르브 애니메이션, 부드러운 호버 트랜지션
- 🔍 **프로젝트 카테고리 필터링 & 상세 모달**: 태그별 필터 및 팝업 상세 모달 지원
- 📋 **원클릭 이메일 복사 & 피드백 토스트**: 이메일 주소 간편 복사 인터랙션
- ⚡ **초경량 & 고성능**: 별도 번들링 빌드 없이 `git push` 즉시 배포 가능

---

## 📁 프로젝트 구조

```
tktlswnsldi2.github.io/
├── index.html              # 메인 웹페이지 구조 (Header, Hero, About, Skills, Projects, Timeline, Contact)
├── assets/
│   ├── css/
│   │   └── style.css       # 커스텀 스타일 (글래스모피즘, 네온 글로우, 테마 변수, 애니메이션)
│   └── js/
│       ├── data.js         # ⭐️ [핵심] 내 프로필, 스킬, 프로젝트, 이력 데이터를 정의하는 곳
│       └── main.js         # 렌더링 엔진, 테마 스위처, 필터링, 모달 등 웹 인터랙션 로직
└── README.md               # 가이드 문서
```

---

## 🛠️ 내 정보로 커스터마이징하는 방법

`assets/js/data.js` 파일을 열어 객체의 값들을 본인의 정보로 변경해 주세요:

### 1. 기본 프로필 (`portfolioData.profile`)
```javascript
profile: {
  name: "홍길동",
  englishName: "Gildong Hong",
  role: "Full-Stack Developer",
  typingTitles: ["Full-Stack Developer", "Frontend Specialist", "Problem Solver"],
  greeting: "안녕하세요! 가치를 만드는 개발자",
  shortBio: "사용자 중심의 가치 있는 웹 서비스를 설계하고 구현합니다.",
  location: "Seoul, Republic of Korea",
  email: "your-email@example.com",
  avatar: "이미지 URL 또는 assets/images/profile.jpg",
  resumeUrl: "#", // 이력서 링크 (노션 또는 PDF 다운로드 링크)
  status: {
    available: true,
    text: "Currently open for new opportunities"
  }
}
```

### 2. 소셜 링크 (`portfolioData.socialLinks`)
- GitHub, LinkedIn, 이메일, Velog/티스토리/블로그 주소를 입력합니다.

### 3. 기술 스택 (`portfolioData.skills`)
- `frontend`, `backend`, `devops_tools` 목록에 자신이 다루는 기술과 숙련도(`Master`, `Advanced`, `Intermediate`, `Basic`), 아이콘을 추가/수정합니다.

### 4. 프로젝트 목록 (`portfolioData.projects`)
- 대표 프로젝트의 제목, 카테고리(`web`, `fullstack`, `mobile`), 썸네일 이미지, 설명, 주요 성과, 깃허브 및 데모 링크를 등록합니다.

### 5. 이력 및 활동 (`portfolioData.timeline`)
- 학력, 경력, 부트캠프, 동아리 활동 등의 타임라인을 등록합니다.

---

## 🌐 GitHub Pages 배포 방법

1. 변경된 파일들을 Git에 커밋하고 GitHub 저장소로 푸시합니다.
   ```bash
   git add .
   git commit -m "feat: 개인 홈페이지 구축 및 데이터 설정"
   git push origin main
   ```
2. GitHub 저장소(`https://github.com/tktlswnsldi2/tktlswnsldi2.github.io`) 페이지로 이동합니다.
3. **Settings** -> 좌측 메뉴의 **Pages**로 이동합니다.
4. **Build and deployment** 항목의 **Source**를 `Deploy from a branch`로 선택하고, Branch를 `main` / `/(root)`로 지정한 뒤 **Save**를 누릅니다. (저장소 이름이 `username.github.io`인 경우 대부분 기본으로 자동 활성화됩니다.)
5. 약 1~2분 후 `https://tktlswnsldi2.github.io`에 접속하면 포트폴리오가 정상적으로 열립니다.

---

## 💻 로컬에서 미리보기 (선택 사항)

VS Code의 **Live Server** 확장을 이용하거나, 터미널에서 간단한 로컬 웹 서버를 실행하여 즉시 확인할 수 있습니다:

```bash
# Python 내장 서버 (Python이 설치된 경우)
python -m http.server 8000

# 또는 npx serve (Node.js가 설치된 경우)
npx serve
```
브라우저에서 `http://localhost:8000`으로 접속하여 확인합니다.
