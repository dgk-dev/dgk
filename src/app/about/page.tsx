import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";
import { Metadata } from "next";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "소개",
  description:
    "강규석의 커리어와 실행 방식. 사업 병목을 제품, 운영, 의사결정 시스템으로 바꿔온 흐름을 정리했습니다.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>소개</Heading>
        <Subheading>{siteConfig.aboutSummary}</Subheading>

        <Collage />

        <Timeline />
      </Container>
    </div>
  );
}
