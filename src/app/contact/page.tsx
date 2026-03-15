import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";
import { siteConfig } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "문의",
  description:
    "기업 AX, AI 도입, Product Engineering 컨설팅 문의를 위한 연락 페이지입니다.",
  path: "/contact",
  image: "/collage/profile-banner.png",
});

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>문의하기</Heading>
        <Subheading>
          기업 AX 컨설팅이나 AI Product Engineering 관련 논의가 필요하다면 아래
          폼으로 연락해 주세요. 확인 가능한 메일은 {siteConfig.email}
          입니다.
        </Subheading>
        <ContactForm />
      </Container>
    </div>
  );
}
