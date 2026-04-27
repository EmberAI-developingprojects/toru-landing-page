"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const overDarkHero = isHome && !scrolled && !open;
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter,color] duration-300",
        solid
          ? "border-b border-border bg-canvas/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link
          href="/"
          aria-label="Toru — home"
          className={cn(
            "inline-flex items-center transition-colors",
            overDarkHero
              ? "text-white hover:text-pulse"
              : "text-accent hover:text-accent-hover",
          )}
          onClick={() => setOpen(false)}
        >
          <Logo size="md" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = isActive(l.href, pathname);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative text-sm transition-colors",
                  overDarkHero
                    ? active
                      ? "font-medium text-pulse"
                      : "text-white/80 hover:text-white"
                    : active
                      ? "font-medium text-accent"
                      : "text-text-2 hover:text-accent",
                  active &&
                    "after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-px after:rounded-full after:bg-current",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle
            className={
              overDarkHero
                ? "border-white/25 bg-white/10 hover:border-white/50"
                : undefined
            }
          />
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "grid size-10 place-items-center rounded-md border transition-colors md:hidden",
            overDarkHero
              ? "border-white/25 bg-white/10 text-white"
              : "border-border text-text",
          )}
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
          {links.map((l) => {
            const active = isActive(l.href, pathname);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-2 py-3 text-base transition-colors",
                  active
                    ? "bg-accent-soft font-medium text-accent"
                    : "text-text hover:bg-surface",
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="text-sm text-muted">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
