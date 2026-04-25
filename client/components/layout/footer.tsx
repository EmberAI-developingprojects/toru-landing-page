import Link from "next/link";
import { Logo } from "@/components/brand/logo";

const groups = [
  {
    title: "Product",
    links: [
      { href: "/technology", label: "Technology" },
      { href: "/platform", label: "Platform" },
      { href: "/solutions", label: "Solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/contact", label: "Book a demo" },
      { href: "/contact", label: "Talk to sales" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_3fr] md:px-10">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            aria-label="Toru — home"
            className="inline-flex text-accent transition-colors hover:text-accent-hover"
          >
            <Logo size="md" />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Real-time intelligence from the cameras you already have.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {g.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-text-2 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-muted md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} Toru. All rights reserved.</span>
          <span className="font-mono uppercase tracking-[0.18em]">
            Detect · Extract · Deliver
          </span>
        </div>
      </div>
    </footer>
  );
}
