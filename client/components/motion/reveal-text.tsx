"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

type RevealTextProps = {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  split?: "word" | "line";
  delay?: number;
  stagger?: number;
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function RevealText({
  children,
  as = "p",
  split = "word",
  delay = 0,
  stagger = 0.045,
  className,
}: RevealTextProps) {
  const reduce = useReducedMotion();

  const tokens =
    split === "word"
      ? children.split(/(\s+)/)
      : children.split(/\n/);

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };

  const item: Variants = {
    hidden: { y: reduce ? 0 : "110%", opacity: reduce ? 1 : 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.9, ease: EASE },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn("inline-block", className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
    >
      {tokens.map((token, i) => {
        if (split === "word" && /^\s+$/.test(token)) {
          return <span key={i}>{token}</span>;
        }
        return (
          <span
            key={i}
            className={cn(
              "inline-block overflow-hidden align-baseline",
              split === "line" && "block",
            )}
          >
            <motion.span
              variants={item}
              className={cn("inline-block", split === "line" && "block")}
            >
              {token}
            </motion.span>
          </span>
        );
      })}
    </MotionTag>
  );
}
