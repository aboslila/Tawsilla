"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // next-themes doesn't know the theme on the server (it depends on
  // localStorage). If we render the icon before mount, server and client
  // HTML mismatch -> hydration error. "mounted" guards against that.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-10 w-10" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="تبديل الوضع الليلي"
      className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5 dark:hover:bg-white/10"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-brand-yellow" />
      ) : (
        <Moon className="h-5 w-5 text-brand-yellow" />
      )}
    </button>
  );
}
