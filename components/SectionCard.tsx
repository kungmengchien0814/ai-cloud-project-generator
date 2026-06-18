type SectionCardProps = {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
};

export function SectionCard({ title, eyebrow, children }: SectionCardProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-mint">
        {eyebrow}
      </p>
      <h3 className="mt-2 text-lg font-bold text-ink">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-slate-700">{children}</div>
    </section>
  );
}
