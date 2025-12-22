"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      className={`bg-surface border border-border rounded-2xl p-6 ${className}`}
      whileHover={hover ? { y: -2, borderColor: "rgba(45, 212, 191, 0.3)" } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

