import { Container } from "@/components/container";
import { Metadata } from "next";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";
import { Scales } from "@/components/scales";
import { siteConfig } from "@/constants/site";
import Image from "next/image";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data = await params;
  const frontmatter = await getBlogFrontMatterBySlug(data.slug);

  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }

  return {
    ...buildPageMetadata({
      title: frontmatter.title,
      description: frontmatter.description,
      path: `/blog/${data.slug}`,
      image: frontmatter.image,
      type: "article",
      publishedTime: frontmatter.date,
    }),
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data = await params;
  const blog = await getSingleBlog(data.slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    image: [absoluteUrl(frontmatter.image)],
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${data.slug}`),
    inLanguage: "ko-KR",
  };

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <Scales />
        <div className="relative mx-auto mb-20 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
        <div className="prose prose-sm dark:prose-invert mx-auto">
          {content}
        </div>
      </Container>
    </div>
  );
}
