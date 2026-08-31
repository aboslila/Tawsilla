"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// A generic wrapper: fades + slides up any content when it scrolls
// into view. Wrap any section in this instead of writing the same
// framer-motion boilerplate on every component individually.
export function FadeInSection({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}