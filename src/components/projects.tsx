"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Link from "next/link";
import { Project, projects as defaultProjects } from "@/constants/projects";
import { SectionHeading } from "./section-heading";
import { getLogoForTechnology } from "@/utils/logo-mapper";
import { cn } from "@/lib/utils";
import { StackItem } from "./stack-item";
export const Projects = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
      <SectionHeading delay={0.2}>실제로 만들고 운영한 제품들</SectionHeading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            whileHover={{
              boxShadow: "var(--shadow-aceternity)",
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group group relative mb-4 rounded-2xl"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                height={300}
                width={300}
                priority={idx === 0}
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
                <div>
                  <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-200">
                    {project.title}
                  </h2>
                  <p className="mt-2 max-w-[16rem] text-sm text-neutral-500 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>
                <div className="mt-2 flex max-w-[16rem] flex-wrap gap-1">
                  <LayoutGroup>
                    {project.stack.map((stack) => (
                      <StackItem
                        key={stack + idx}
                        technology={stack}
                        className="-mr-3 hover:z-10"
                      />
                    ))}
                  </LayoutGroup>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
