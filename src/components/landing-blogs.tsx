import { getBlogs } from "@/utils/mdx";
import React from "react";
import { Link } from "next-view-transitions";
import { SectionHeading } from "./section-heading";
import { MotionDiv } from "./motion-div";
import Image from "next/image";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div className="px-4 py-6">
      <SectionHeading className="mb-4" delay={0.4}>
        AX와 제품 운영에 대한 인사이트
      </SectionHeading>
      <div className="flex flex-col gap-8">
        {allBlogs.slice(0, 3).map((blog, idx) => (
          <MotionDiv
            key={blog.title}
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="flex flex-col gap-4 rounded-2xl border border-neutral-100 p-4 transition hover:border-neutral-200 md:flex-row md:items-center dark:border-neutral-800 dark:hover:border-neutral-700">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl md:w-64 md:min-w-64">
                  <Image
                    src={blog.image || "/blog/decision-system.png"}
                    alt={blog.title || "Insight thumbnail"}
                    fill
                    sizes="(max-width: 768px) 100vw, 256px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                    <h2 className="text-primary text-base font-bold tracking-tight">
                      {blog.title}
                    </h2>
                    <p className="text-secondary text-sm md:text-sm">
                      {new Date(blog.date || "").toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                    {truncate(blog.description || "", 120)}
                  </p>
                </div>
              </div>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};
