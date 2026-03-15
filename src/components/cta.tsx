import React from "react";
import { SectionHeading } from "./section-heading";
import { siteConfig } from "@/constants/site";

export const CTA = () => {
  return (
    <div className="my-4 px-4 py-6">
      <SectionHeading delay={0.2}>AX 컨설팅 문의</SectionHeading>
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
        AI를 억지로 끼워 넣는 프로젝트보다, 실제 병목을 읽고 제품과 운영 구조를
        다시 설계하는 일에 집중합니다. 기업 AX, Product Engineering, 실행 체계
        정리가 필요하다면 메일로 바로 연결할 수 있습니다.
      </p>
      <div className="relative mt-4 max-w-lg">
        <input
          type="email"
          placeholder="회사 이메일"
          className="w-full rounded-lg bg-white px-4 py-3 pr-[120px] text-sm text-neutral-700 shadow-[var(--shadow-aceternity)] focus:ring-2 focus:ring-neutral-300 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200"
        />
        <a
          href={`mailto:${siteConfig.email}`}
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset]"
        >
          메일 보내기
        </a>
      </div>
    </div>
  );
};
