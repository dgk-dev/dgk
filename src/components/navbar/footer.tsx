import {
  GithubLogo,
  LinkedinLogo,
  ThreadsLogo,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";
import React from "react";
import { Container } from "../container";
import { siteConfig } from "@/constants/site";

export const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-100 px-10 py-3 md:py-3 dark:border-neutral-800">
      <p className="text-xs text-neutral-500">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link href={siteConfig.socialLinks.threads}>
          <ThreadsLogo className="size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" />
        </Link>
        <Link href={siteConfig.socialLinks.linkedin}>
          <LinkedinLogo className="size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" />
        </Link>
        <Link href={siteConfig.socialLinks.github}>
          <GithubLogo className="size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" />
        </Link>
      </div>
    </Container>
  );
};
