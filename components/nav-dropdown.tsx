"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type DropdownLink = {
  href: string;
  label: string;
};

export function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: DropdownLink[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition hover:text-brand-blue"
      >
        {label}
        {/* Rotating chevron gives a subtle "opening" cue - purely CSS,
            no extra animation library needed for this part. */}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* AnimatePresence lets framer-motion animate the EXIT too (fade
          out + slide up when closing), not just the entrance. Without
          it, the panel would just vanish instantly on close. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-black/5 bg-background shadow-xl dark:border-white/10"
          >
            {items.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-5 py-3 text-sm text-foreground/80 transition hover:bg-brand-blue/5 hover:text-brand-blue"
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}