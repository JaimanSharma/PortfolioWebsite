"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export default function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <motion.h2
      className={`text-3xl md:text-4xl font-bold mb-8 text-text-primary scroll-mt-24 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
  );
}

