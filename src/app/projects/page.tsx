import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";
import { siteConfig } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "프로젝트",
  description:
    "강규석이 직접 만들고 운영하며 검증한 제품들. Pixeling, DaaSy, My Life Mentor를 중심으로 정리했습니다.",
  path: "/projects",
  image: "/collage/pixeling-banner.png",
});

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>프로젝트</Heading>
        <Subheading>
          빠르게 만들었다는 말보다 실제 운영과 반복 개선을 거친 제품이 더
          중요하다고 봅니다. 아래는 제가 직접 기획하고 만들고, 운영하면서 구조를
          다듬어온 대표 프로젝트입니다.
        </Subheading>
        <Projects />
      </Container>
    </div>
  );
}
