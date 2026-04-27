const sources = [
  "IP Cameras",
  "Drones",
  "NVRs",
  "Recorded Video",
  "Any Feed",
];

export function InputSourcesStrip() {
  return (
    <section
      aria-label="Supported video sources"
      className="border-b border-border bg-canvas py-6"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-3 px-6 md:px-10">
        {sources.map((label) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-canvas px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-text-2"
          >
            <span className="size-1.5 rounded-full bg-accent" />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
