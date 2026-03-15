"use client";
import React from "react";
import { SectionHeading } from "./section-heading";
import {
  Experience,
  experience as defaultExperience,
} from "@/constants/experience";
import { getLogoForTechnology } from "@/utils/logo-mapper";
import { StackItem } from "./stack-item";
import { LayoutGroup } from "motion/react";
import { cn } from "@/lib/utils";

export const Experiences = ({
  experiences = defaultExperience,
}: {
  experiences?: Experience[];
}) => {
  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark my-10 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
      <SectionHeading delay={0.2}>
        제품, 성장, 의사결정을 함께 맡아온 경험
      </SectionHeading>
      <div className="flex flex-col gap-6 py-10">
        {experiences.map((experience) => (
          <div key={experience.company}>
            <div className="flex flex-col justify-between md:flex-row md:items-start">
              <div className="max-w-[80%]">
                <h2 className="font-medium text-neutral-900 dark:text-neutral-100">
                  {experience.company}
                </h2>
                <div className="flex flex-col gap-2 py-2 sm:flex-row sm:items-center">
                  <p className="text-sm text-neutral-800 dark:text-neutral-200">
                    {experience.designation}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {experience.startDate} - {experience.endDate}
                  </p>
                </div>

                <p className="text-sm text-neutral-500">
                  {experience.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <LayoutGroup>
                    {experience.stack.map((technology, idx) => (
                      <StackItem
                        key={technology + idx}
                        technology={technology}
                        className="-mr-3 hover:z-10"
                      />
                    ))}
                  </LayoutGroup>
                </div>
              </div>
              <img
                src={experience.logo}
                alt={experience.company}
                width={240}
                height={72}
                className={cn(
                  experience.imageClass,
                  "hidden h-12 w-auto object-contain md:block",
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
