import React from "react";
import Marquee from "react-fast-marquee";
import { SectionHeading } from "./section-heading";
import { trustCards } from "@/constants/site";

export const Testimonials = () => {
  const data = trustCards;
  return (
    <div className="my-4 px-4 py-4">
      <SectionHeading className="mb-4" delay={0.8}>
        기업이 저를 찾는 이유
      </SectionHeading>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={20} pauseOnHover className="py-4">
          {data.map((item, idx) => (
            <TestimonialCard key={`testimonial-${idx}`} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar?: string;
}) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 shadow-[var(--shadow-aceternity)] transition duration-300 hover:shadow-md">
      <p className="text-sm text-neutral-700 dark:text-neutral-200">{quote}</p>
      <div className="flex items-center gap-2">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="size-4 rounded-full object-cover"
          />
        ) : (
          <div className="flex size-4 items-center justify-center rounded-full bg-neutral-200 text-[8px] font-semibold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
            {initials}
          </div>
        )}
        <p className="text-sm text-neutral-500 dark:text-neutral-300">{name}</p>
      </div>
    </div>
  );
};
