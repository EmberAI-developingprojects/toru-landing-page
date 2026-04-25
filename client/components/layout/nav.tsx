"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/cn";

const links = [
  { href: "/technology", label: "Technology" },
  { href: "/solutions", label: "Solutions" },
  { href: "/platform", label: "Platform" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-border bg-canvas/80 backdrop-blur-xl"
          : "border-transparent bg-canvas",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link
          href="/"
          aria-label="Toru — home"
          className="inline-flex items-center text-accent transition-colors hover:text-accent-hover"
          onClick={() => setOpen(false)}
        >
          <Logo size="md" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-text-2 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="/contact" size="sm">
            Book a demo
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-10 place-items-center rounded-md border border-border text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-border bg-canvas md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-base text-text hover:bg-surface"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="text-sm text-muted">Theme</span>
            <ThemeToggle />
          </div>
          <Button href="/contact" size="md" className="mt-3">
            Book a demo
          </Button>
        </div>
      </div>
    </header>
  );
}

