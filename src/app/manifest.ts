import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "강규석 | AX Strategist",
    short_name: "강규석",
    description:
      "사업 병목을 제품, 운영, 의사결정 시스템으로 바꾸는 개발 리더 강규석의 포트폴리오",
    start_url: "/",
    display: "standalone",
    background_color: "#07111F",
    theme_color: "#07111F",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
