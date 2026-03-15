import { Container } from "@/components/container";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Scales } from "@/components/scales";
import { MotionDiv } from "@/components/motion-div";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "인사이트",
  description:
    "AX를 원하는 기업과 리더를 위해 정리한 제품, 운영, 의사결정 시스템 관점의 인사이트입니다.",
  path: "/blog",
  image: "/blog/decision-system.png",
});

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>인사이트</Heading>
        <Subheading>
          기업이 원하는 건 결국 AI 그 자체가 아니라 더 나은 의사결정과 더 빠른
          실행입니다. 아래 글들은 AX, 제품 운영, 병목 구조화 관점에서 제가
          실제로 중요하게 보는 기준을 정리한 글입니다.
        </Subheading>
        <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 flex flex-col gap-8 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
          {allBlogs.map((blog, idx) => (
            <MotionDiv
              key={blog.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * idx }}
            >
              <Link key={blog.title} href={`/blog/${blog.slug}`}>
                <div className="flex flex-col gap-4 rounded-2xl border border-neutral-100 p-4 transition hover:border-neutral-200 md:flex-row md:items-center dark:border-neutral-800 dark:hover:border-neutral-700">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl md:w-72 md:min-w-72">
                    <Image
                      src={blog.image || "/blog/decision-system.png"}
                      alt={blog.title || "Insight thumbnail"}
                      fill
                      sizes="(max-width: 768px) 100vw, 288px"
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
                    <p className="text-secondary max-w-xl pt-2 text-sm md:text-sm">
                      {truncate(blog.description || "", 150)}
                    </p>
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </Container>
    </div>
  );
}
