import Link from "next/link";
import { Logo } from "@/components/brand/logo";

const groups = [
  {
    title: "Product",
    links: [
      { href: "/technology", label: "Technology" },
      { href: "/solutions", label: "Solutions" },
    ],
  },
  {
    title: "Company",
    links: [{ href: "/contact", label: "Contact" }],
  },
  {
    title: "Resources",
    links: [{ href: "/contact", label: "Talk to sales" }],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0f] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 90% at 0% 0%, rgba(0,229,184,0.10) 0%, rgba(10,10,15,0) 60%), radial-gradient(60% 80% at 100% 100%, rgba(107,87,245,0.08) 0%, rgba(10,10,15,0) 60%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_3fr] md:px-10">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            aria-label="Toru — home"
            className="inline-flex text-pulse transition-colors hover:text-white"
          >
            <Logo size="md" />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/75">
            Computer vision for any video feed. Any source.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="flex flex-col gap-3">
              <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
                {g.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/85 transition-colors hover:text-pulse"
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

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-white/65 md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} Toru. All rights reserved.</span>
          <a
            href="mailto:info@toru.mn"
            className="font-mono uppercase tracking-[0.22em] text-white/80 transition-colors hover:text-pulse"
          >
            info@toru.mn
          </a>
        </div>
      </div>
    </footer>
  );
}
