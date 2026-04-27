"use client";

import { useActionState } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { submitContactForm, type FormState } from "./actions";

const initialState: FormState = { ok: false, message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <form
      action={action}
      className="rounded-2xl border border-border bg-canvas p-7 shadow-[0_1px_4px_rgba(11,11,16,0.06)] md:p-9"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        Send a message
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text md:text-3xl">
        Tell us about your space.
      </h2>
      <p className="mt-2 text-sm leading-[1.6] text-text-2">
        A few details help us get the right person back to you faster.
      </p>

      <div className="mt-7 grid gap-5">
        <Field label="Name" required>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            disabled={pending}
            className={inputClass}
            placeholder="Your full name"
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email" required>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              disabled={pending}
              className={inputClass}
              placeholder="you@company.com"
            />
          </Field>
          <Field label="Company">
            <input
              type="text"
              name="company"
              autoComplete="organization"
              disabled={pending}
              className={inputClass}
              placeholder="Where you work"
            />
          </Field>
        </div>

        <Field label="Message" required>
          <textarea
            name="message"
            required
            rows={5}
            disabled={pending}
            className={`${inputClass} min-h-[140px] resize-y`}
            placeholder="Tell us about your cameras, your space, and what you're trying to measure."
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p
          className={`text-sm leading-snug ${
            state.message
              ? state.ok
                ? "text-accent"
                : "text-[#b91c1c]"
              : "text-muted"
          }`}
          aria-live="polite"
        >
          {state.ok && state.message ? (
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} />
              {state.message}
            </span>
          ) : state.message ? (
            state.message
          ) : (
            "We typically reply within 24 hours."
          )}
        </p>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-medium tracking-tight text-canvas transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          {pending ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "block w-full rounded-lg border border-border bg-canvas px-4 py-3 text-[15px] text-text outline-none transition-[border-color,box-shadow] placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        {label}
        {required ? <span className="text-accent">*</span> : null}
      </span>
      {children}
    </label>
  );
}
