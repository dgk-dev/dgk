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

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
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
