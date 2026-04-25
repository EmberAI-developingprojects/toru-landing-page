"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/cn";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border border-border bg-surface transition-colors hover:border-border-strong",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-1/2 -translate-y-1/2 grid size-7 place-items-center rounded-full bg-canvas shadow-(--shadow-card) transition-transform duration-300",
          isDark ? "translate-x-[30px]" : "translate-x-1",
        )}
      >
        {isDark ? (
          <Moon size={14} className="text-accent" />
        ) : (
          <Sun size={14} className="text-accent" />
        )}
      </span>
      <Sun
        aria-hidden
        size={13}
        className={cn(
          "absolute left-2 text-muted transition-opacity",
          isDark ? "opacity-100" : "opacity-0",
        )}
      />
      <Moon
        aria-hidden
        size={13}
        className={cn(
          "absolute right-2 text-muted transition-opacity",
          isDark ? "opacity-0" : "opacity-100",
        )}
      />
    </button>
  );
}
