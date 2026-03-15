import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import { Footer } from "@/components/navbar/footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/constants/site";
import { absoluteUrl, personJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.metadataTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.metadataDescription,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.domain,
  },
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.domain,
    siteName: siteConfig.metadataTitle,
    title: siteConfig.metadataTitle,
    description: siteConfig.metadataDescription,
    images: [
      {
        url: absoluteUrl(siteConfig.defaultOgImage),
        width: 2560,
        height: 1280,
        alt: siteConfig.metadataTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadataTitle,
    description: siteConfig.metadataDescription,
    images: [absoluteUrl(siteConfig.defaultOgImage)],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="ko" suppressHydrationWarning>
        <body>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([websiteJsonLd, personJsonLd]),
            }}
          />
          <ThemeProvider attribute="class">
            <Toaster position="top-center" />
            <main className="relative bg-neutral-100 antialiased [--pattern-fg:var(--color-neutral-950)]/5 dark:bg-neutral-950 dark:[--pattern-fg:var(--color-neutral-100)]/5">
              <Navbar />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
