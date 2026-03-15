import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

type PageMetadataInput = {
  title?: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export const absoluteUrl = (path = "/") => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.domain}${normalizedPath}`;
};

export const buildPageMetadata = ({
  title,
  description,
  path = "/",
  image = siteConfig.defaultOgImage,
  type = "website",
  publishedTime,
}: PageMetadataInput): Metadata => {
  const canonical = absoluteUrl(path);
  const absoluteImage = absoluteUrl(image);
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.metadataTitle;

  return {
    title: title ? title : { absolute: siteConfig.metadataTitle },
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      url: canonical,
      title: resolvedTitle,
      description,
      siteName: siteConfig.metadataTitle,
      locale: "ko_KR",
      images: [
        {
          url: absoluteImage,
          width: image.endsWith(".png") ? 2560 : 1200,
          height: image.endsWith(".png") ? 1280 : 630,
          alt: resolvedTitle,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [absoluteImage],
    },
  };
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: siteConfig.englishName,
  jobTitle: siteConfig.shortRole,
  url: siteConfig.domain,
  email: siteConfig.email,
  image: absoluteUrl(siteConfig.avatar),
  sameAs: Object.values(siteConfig.socialLinks),
  homeLocation: {
    "@type": "Place",
    name: siteConfig.location,
  },
  knowsAbout: [
    "기업 AX",
    "AI Product Engineering",
    "Product Engineering",
    "사업 병목 분석",
    "운영 시스템 설계",
    "의사결정 시스템",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.metadataTitle,
  url: siteConfig.domain,
  inLanguage: "ko-KR",
  description: siteConfig.metadataDescription,
  publisher: {
    "@type": "Person",
    name: siteConfig.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.domain}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};
