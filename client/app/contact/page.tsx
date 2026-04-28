import type { Metadata } from "next";
import { Mail, MapPin, Clock, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the Toru team about real-time video intelligence.",
};

const EMAIL = "info@toru.world";

export default function Page() {
  return (
    <>
      <Section className="bg-canvas">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </Section>
    </>
  );
}

function ContactInfo() {
  return (
    <aside className="flex flex-col gap-5">
      <InfoCard
        icon={Mail}
        label="Email"
        value={EMAIL}
        href={`mailto:${EMAIL}`}
      />
      <InfoCard
        icon={MapPin}
        label="Office"
        value="IT Park, Ulaanbaatar, Mongolia"
      />
      <InfoCard
        icon={Clock}
        label="Response time"
        value="Within 24 hours, every business day."
      />

      <div className="mt-2 rounded-2xl border border-border bg-canvas p-7 shadow-[0_1px_4px_rgba(11,11,16,0.06)]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Follow Toru
        </p>
        <div className="mt-4 flex items-center gap-3">
          <SocialLink href="https://www.youtube.com" label="YouTube">
            <YoutubeGlyph />
          </SocialLink>
          <SocialLink href="https://www.facebook.com" label="Facebook">
            <FacebookGlyph />
          </SocialLink>
        </div>
      </div>
    </aside>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const body = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
        <Icon size={18} />
      </span>
      <div className="flex flex-col">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          {label}
        </span>
        <span className="mt-1 text-[15px] leading-[1.5] text-text">
          {value}
        </span>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group flex items-center gap-4 rounded-2xl border border-border bg-canvas p-5 shadow-[0_1px_4px_rgba(11,11,16,0.06)] transition-[border-color,box-shadow] duration-200 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(11,11,16,0.18)]"
      >
        {body}
      </a>
    );
  }
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-canvas p-5 shadow-[0_1px_4px_rgba(11,11,16,0.06)]">
      {body}
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-border text-text-2 transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}

function YoutubeGlyph() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookGlyph() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
