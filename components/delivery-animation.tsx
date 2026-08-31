"use client";

import { motion } from "framer-motion";
import { Car } from "lucide-react";

export function DeliveryAnimation() {
  return (
    <div className="relative mx-auto flex h-56 w-full max-w-md items-center justify-center overflow-hidden  sm:h-72">
      {/* Speed lines: each one slides from right to left and loops.
          Staggering their "delay" makes them fire one after another
          instead of all moving in sync - that's what reads as "speed". */}
      {[0, 1, 2].map((i) => {
        return (
          <motion.div
            key={i}
            className="absolute h-1 rounded-full bg-brand-blue/30"
            style={{ top: `calc(50% + ${(i - 1) * 14}px)`, width: "40%" }}
            initial={{ x: "120%", opacity: 0 }}
            animate={{ x: "-120%", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "linear",
            }}
          />
        );
      })}

      {/* Car stays fixed in the center. Small vertical bob = idle/engine
          vibration feel, not actual travel. */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-full bg-brand-blue  p-4 shadow-lg sm:p-5">
          <Car className="h-8 w-auto text-brand-yellow sm:h-12 sm:w-12" strokeWidth={2.5} />
        </div>
      </motion.div>
    </div>
  );
}