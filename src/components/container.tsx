import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto h-full w-full max-w-4xl bg-white pt-10 md:pt-0 dark:bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
  );
};
