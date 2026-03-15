import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { Experiences } from "@/components/experiences";
import { Flipper } from "@/components/flipper";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Testimonials } from "@/components/testimonials";
import { experience } from "@/constants/experience";
import { projects } from "@/constants/projects";
import { siteConfig } from "@/constants/site";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  description: siteConfig.metadataDescription,
  path: "/",
});

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "강규석은 어떤 문제를 푸는 사람인가?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "사업 병목을 제품, 운영, 의사결정 시스템으로 번역해 실제 실행 구조를 만드는 AX Strategist이자 AI Product Engineering 리더입니다.",
        },
      },
      {
        "@type": "Question",
        name: "어떤 회사가 강규석에게 문의하면 좋은가?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "기업 AX, AI 도입, Product Engineering, 리뷰·반품·운영 데이터 기반 의사결정 체계가 필요한 팀과 대표에게 적합합니다.",
        },
      },
      {
        "@type": "Question",
        name: "대표 프로젝트와 실전 경험은 무엇인가?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pixeling 개발 및 운영, 739c 공동창업, DaaSy와 My Life Mentor 출시 경험이 있으며 Pixeling은 유료 사용자 2천명 수준까지 운영되었습니다.",
        },
      },
    ],
  };

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Scales />
        <div className="flex flex-col sm:flex-row sm:items-center">
          <Heading>{siteConfig.name}</Heading>
          <Flipper />
        </div>
        <Subheading>{siteConfig.heroSummary}</Subheading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Experiences experiences={experience} />
        <Testimonials />
        <CTA />
      </Container>
    </div>
  );
}
