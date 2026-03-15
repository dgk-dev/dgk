import React from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { SectionHeading } from "./section-heading";
import { collageItems } from "@/constants/site";

export function Collage() {
  return (
    <div className="px-4 py-6">
      <SectionHeading className="mt-4">제가 문제를 다루는 방식</SectionHeading>
      <DraggableCardContainer className="relative flex min-h-[30rem] w-full items-center justify-center overflow-clip">
        {collageItems.map((item, idx) => (
          <DraggableCardBody key={item.title + idx} className={item.className}>
            <Image
              src={item.image}
              alt={item.title}
              width={640}
              height={320}
              className="pointer-events-none relative z-10 aspect-[2/1] w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 text-center text-base font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  );
}
