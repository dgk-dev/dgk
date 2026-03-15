export type Project = {
  title: string;
  src: string;
  href: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Pixeling",
    src: "/projects/pixeling-card.png",
    href: "https://pixeling.io",
    description:
      "AI 기반 숏폼 콘텐츠 제작 워크플로우를 통합한 제품. 편집, 자막, 번역, 다운로드, 데스크톱 앱까지 전체 제작 흐름을 하나의 시스템으로 묶었습니다.",
    stack: ["Next.js", "TypeScript", "Tauri", "Drizzle", "Neon"],
  },
  {
    title: "DaaSy",
    src: "/projects/daasy-card.png",
    href: "https://daasy.app/ko",
    description:
      "48시간 평균 납기를 전면에 둔 개발 구독 서비스. 스코프 판별, 티켓 기반 실행, 예측 가능한 납기 경험을 핵심 가치로 설계했습니다.",
    stack: ["Next.js", "React", "PostgreSQL", "Tailwind CSS", "Gemini"],
  },
  {
    title: "My Life Mentor",
    src: "/projects/mylifementor-card-v3.png",
    href: "https://mylifementor.org",
    description:
      "존경하는 저자와 롤모델의 지식을 바탕으로 개인화된 AI 멘토를 만들고 대화할 수 있게 한 AI 멘토링 서비스입니다.",
    stack: ["Next.js", "React", "Qdrant", "Drizzle", "Gemini"],
  },
];
