"use client";
import { HTMLMotionProps, motion } from "motion/react";
import React from "react";

export const MotionDiv = (
  props: HTMLMotionProps<"div"> & { children?: React.ReactNode },
) => {
  return <motion.div {...props} />;
};
