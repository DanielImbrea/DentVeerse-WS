"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { revealUp } from "@/lib/animations";

type Props = {
  kicker?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
  className = "",
}: Props) {
  const centered = align === "center";

  return (
    <motion.header
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={`mb-14 max-w-[54ch] ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {kicker && <p className="text-kicker mb-4 text-primary-light">{kicker}</p>}
      <h2 className="font-display text-[2rem] leading-[1.12] tracking-[-0.02em] text-ink md:text-[2.65rem]">
        {title}
      </h2>
      {description && (
        <div className={`mt-5 text-[17px] leading-relaxed text-ink-soft md:text-[18px] [text-wrap:pretty] ${centered ? "mx-auto" : ""}`}>
          {description}
        </div>
      )}
    </motion.header>
  );
}
