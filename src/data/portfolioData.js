const portfolioData = {
  projects: [
    {
      id: 1,
      title: "리틀 밴드",
      period: "2024.05 ~ 2024.11",
      description:
        "시니어 케어를 주제로 자세 데이터 분석 및 어플리케이션 개발을 수행했으며, 한국감성과학회 추계학술대회와 캡스톤디자인 경진대회 수상작입니다.",
      overview:
        "시니어 케어를 주제로 자세 데이터 분석 및 어플리케이션 개발을 수행했으며, 한국감성과학회 추계학술대회와 캡스톤디자인 경진대회 수상작입니다. IoT 센서를 활용하여 사용자의 자세를 실시간으로 모니터링하고, 머신러닝 알고리즘을 통해 자세 교정 가이드를 제공하는 종합적인 헬스케어 솔루션입니다.",
      role: [
        "Flutter 기반 모바일 애플리케이션 개발",
        "Python을 활용한 자세 데이터 분석 알고리즘 구현",
        "IoT 센서 데이터 수집 및 처리 시스템 설계",
        "UI/UX 디자인 및 사용자 경험 최적화",
      ],
      achievements: [
        "한국감성과학회 추계학술대회 장려상 수상",
        "캡스톤디자인 경진대회 최우수상 수상",
        "자세 교정 정확도 85% 달성",
        "사용자 만족도 4.2/5.0 기록",
      ],
      tags: ["Application", "Flutter", "Python", "IoT", "Machine Learning"],
      images: [
        "/placeholder.svg?height=300&width=500&text=리틀밴드 메인화면",
        "/placeholder.svg?height=300&width=500&text=자세분석 대시보드",
        "/placeholder.svg?height=300&width=500&text=실시간 모니터링",
        "/placeholder.svg?height=300&width=500&text=통계 리포트",
      ],
      image: "/placeholder.svg?height=200&width=300&text=리틀밴드",
      links: [
        {
          title: "GitHub Repository",
          url: "https://github.com/example/little-band",
        },
        {
          title: "프로젝트 발표 자료",
          url: "https://example.com/presentation",
        },
      ],
    },
    {
      id: 2,
      title: "우리fisa FE 세미나",
      period: "2024.07 ~ 2024.07",
      description: "Virtual DOM의 동작 원리와 이해 : Virtual DOM 구현해보기",
      overview:
        "React의 핵심 개념인 Virtual DOM의 동작 원리를 깊이 있게 학습하고, 직접 구현해보는 세미나 프로젝트입니다. JavaScript를 사용하여 Virtual DOM을 처음부터 구현하며, React의 내부 동작 방식을 이해할 수 있도록 설계되었습니다.",
      role: [
        "Virtual DOM 구현 및 알고리즘 설계",
        "세미나 발표 및 교육 자료 제작",
        "실습 예제 코드 작성",
        "참가자 질의응답 및 멘토링",
      ],
      achievements: [
        "한국감성과학회 추계학술대회 장려상 수상",
        "캡스톤디자인 경진대회 최우수상 수상",
        "자세 교정 정확도 85% 달성",
        "사용자 만족도 4.2/5.0 기록",
      ],
      tags: ["WEB", "React", "JS", "Firebase"],
      images: [
        "/images/projects/fe_seminar/seminar_title.png",
        "/images/projects/fe_seminar/seminar_likeComponent.png",
        "/images/projects/fe_seminar/seminar_vdom_folder.png",
        "/images/projects/fe_seminar/seminar_benchmark.png",
        "/images/projects/fe_seminar/seminar_award.png",
      ],
      image: "/images/projects/seminar/seminar_title.png",
      links: [
        {
          title: "GitHub Repository",
          url: "https://github.com/example/virtual-dom-seminar",
        },
        {
          title: "프로젝트 발표 자료",
          url: "https://example.com/presentation",
        },
      ],
    },
    {
      id: 3,
      title: "프로젝트3",
      period: "2024.03 ~ 2024.11",
      description: "프로젝트3 내용",
      overview:
        "웹 기반 교육 플랫폼 개발 프로젝트로, 학습자와 교육자를 연결하는 종합적인 온라인 학습 환경을 제공합니다.",
      role: ["프론트엔드 개발 및 UI/UX 설계", "백엔드 API 설계 및 구현", "데이터베이스 설계 및 최적화"],
      achievements: ["월 활성 사용자 1,000명 달성", "학습 완료율 75% 기록"],
      tags: ["WEB", "Education", "React", "Node.js"],
      images: [
        "/placeholder.svg?height=300&width=500&text=메인 대시보드",
        "/placeholder.svg?height=300&width=500&text=학습 진행화면",
        "/placeholder.svg?height=300&width=500&text=관리자 패널",
      ],
      image: "/placeholder.svg?height=200&width=300&text=교육플랫폼",
      links: [
        {
          title: "프로젝트 데모",
          url: "https://example.com/demo",
        },
      ],
    },
    {
      id: 4,
      title: "프로젝트4",
      period: "2024.01 ~ 2024.06",
      description: "프로젝트4 내용",
      overview:
        "Android 네이티브 앱 개발 프로젝트로, 사용자의 일상 생활을 편리하게 만드는 유틸리티 애플리케이션입니다.",
      role: ["Android 네이티브 앱 개발", "사용자 인터페이스 설계", "성능 최적화 및 테스팅"],
      achievements: ["Google Play Store 출시", "다운로드 수 5,000회 달성", "평점 4.3/5.0 기록"],
      tags: ["Mobile", "Android", "Java", "SQLite"],
      images: [
        "/placeholder.svg?height=300&width=500&text=앱 메인화면",
        "/placeholder.svg?height=300&width=500&text=기능 상세화면",
        "/placeholder.svg?height=300&width=500&text=설정 화면",
      ],
      image: "/placeholder.svg?height=200&width=300&text=Android앱",
      links: [
        {
          title: "Google Play Store",
          url: "https://play.google.com/store/apps/example",
        },
        {
          title: "GitHub Repository",
          url: "https://github.com/example/project4",
        },
      ],
    },
  ],
  education: [
    {
      title: "우리FIS 아카데미 교육",
      period: "2025.07 ~ 2025.12 (ing)",
      details: ["클라우드 서비스 개발 교육 수강중"],
    },
    {
      title: "연합동아리 UMC 4기",
      period: "2023.03 ~ 2023.08",
      details: ["Web 프론트엔드 파트에서 활동", "스터디 우수자 선정"],
    },
    {
      title: "상명대학교 휴먼지능정보공학과",
      period: "2019.03 ~ 2025.02",
      details: [
        "3.71/4.5",
        "소프트웨어 공학, 알고리즘, 딥러닝 등의 교과목을 수강하며, 동아리 및 프로젝트, 학회 활동 수행",
      ],
    },
  ],
  awards: [
    {
      title: "한국감성과학회 추계학술대회 장려상",
      date: "2024.11.23",
      organization: "한국감성과학회",
    },
    {
      title: "캡스톤디자인 경진대회 최우수상",
      date: "2024.08.12",
      organization: "상명대학교",
    },
    {
      title: "졸업 포트폴리오 페스티벌 장려상",
      date: "2024.11.05",
      organization: "상명대학교 융합공과대학",
    },
  ],
  skills: {
    languages: ["Java", "JavaScript", "Python"],
    frameworks: ["Spring", "React.js", "Next.js", "MySQL"],
  },
  certifications: ["정보처리기사", "ADSP", "토스 IH"],
}

export default portfolioData
