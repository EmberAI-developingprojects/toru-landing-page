"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "ul" | "li" | "article";
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealOnScrollProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay: reduce ? 0 : delay }}
    >
      {children}
    </Tag>
  );
}

type StaggerGroupProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: StaggerGroupProps) {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
};

export function StaggerItem({ children, className, y = 20 }: StaggerItemProps) {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: EASE },
    },
  };
  return (
    <motion.div className={cn(className)} variants={item}>
      {children}
    </motion.div>
  );
}
