"use client";

import { motion, type Variants } from "motion/react";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

// --- Variants ---

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// --- Components ---

interface MotionWrapperProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function MotionWrapper({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
}: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  slow,
}: {
  children: ReactNode;
  className?: string;
  slow?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={slow ? staggerContainerSlow : staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  variants = fadeInUp,
  className,
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}) {
  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- Bento Card ---

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: "default" | "wide" | "tall" | "large";
  hoverEffect?: boolean;
}

const spanClasses = {
  default: "",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  large: "md:col-span-2 md:row-span-2",
};

export function BentoCard({
  children,
  className,
  span = "default",
  hoverEffect = true,
}: BentoCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={
        hoverEffect
          ? { y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }
          : undefined
      }
      className={cn(
        "group relative rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg overflow-hidden",
        spanClasses[span],
        className
      )}
    >
      {children}
    </motion.div>
  );
}

// --- Floating Animation (for decorative elements) ---

export function FloatingElement({
  children,
  className,
  duration = 6,
  y = 12,
}: {
  children?: ReactNode;
  className?: string;
  duration?: number;
  y?: number;
}) {
  return (
    <motion.div
      animate={{ y: [-y, y, -y] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
