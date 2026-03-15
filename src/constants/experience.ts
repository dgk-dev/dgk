export type Experience = {
  company: string;
  designation: string;
  logo: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  stack: string[];
  imageClass?: string;
};

export const experience: Experience[] = [
  {
    company: "Pixeling",
    designation: "CTO",
    logo: "/company/pixeling-plate.svg",
    description:
      "AI 기반 콘텐츠 제작 워크플로우 제품을 0에서 100까지 직접 설계하고 운영했습니다. 유료 사용자 2천명 규모까지 키우면서 월 유지비 100만원 이하 구조를 지향했습니다.",
    startDate: "최근",
    endDate: "현재",
    location: "서울",
    stack: ["Next.js", "TypeScript", "Tauri", "Drizzle", "Neon", "AI SDK"],
  },
  {
    company: "739c",
    designation: "Co-Founder & Product Owner",
    logo: "/company/739c-plate.svg",
    description:
      "AI-native 빌드 파이프라인을 바탕으로 DaaSy, My Life Mentor 등 다수의 제품을 직접 기획, 개발, 배포했습니다. 제품 관점과 실행 관점을 동시에 묶는 역할을 맡았습니다.",
    startDate: "2024.01",
    endDate: "현재",
    location: "서울",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle",
      "Gemini",
      "Figma",
    ],
  },
  {
    company: "대한민국 육군",
    designation: "통역장교 (중위)",
    logo: "/company/army-plate.svg",
    description:
      "한미 4성 장군 간 전략 회의와 연합작전을 지원하며 누적 약 3,000시간의 동시·순차 통역을 수행했습니다. 서로 다른 조직문화와 이해관계자의 언어를 맞추는 역할에 강해졌습니다.",
    startDate: "2020.12",
    endDate: "2023.12",
    location: "대한민국",
    stack: ["Korean", "English", "Turkish", "Operations", "Communication"],
  },
  {
    company: "Triune",
    designation: "Founder & Digital Marketer",
    logo: "/company/triune-plate.svg",
    description:
      "유튜브, SEO, 제휴 마케팅 퍼널을 직접 설계하며 월 최고 1억원의 매출을 만들었습니다. 제품을 고칠 수 없는 자리에서 숫자를 움직이는 구조를 설계하는 감각을 익혔습니다.",
    startDate: "2018.06",
    endDate: "2020.12",
    location: "Remote",
    stack: ["YouTube", "SEO", "A/B Testing", "Analytics", "Funnels"],
  },
];
