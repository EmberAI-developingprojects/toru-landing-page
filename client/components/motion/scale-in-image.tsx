"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/cn";

type ScaleInProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScaleInImage({ children, className }: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.8],
    reduce ? [1, 1, 1] : [0.88, 1, 1],
  );
  const radius = useTransform(
    scrollYProgress,
    [0, 0.45],
    reduce ? ["20px", "20px"] : ["40px", "20px"],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    reduce ? [1, 1, 1, 1] : [0.3, 1, 1, 0.85],
  );

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        style={{
          scale,
          borderRadius: radius,
          opacity,
          transformOrigin: "center",
        }}
        className={cn("overflow-hidden will-change-transform", className)}
      >
        {children}
      </motion.div>
    </div>
  );
}
