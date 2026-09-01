import { Link } from "@tanstack/react-router";
import { ChevronRight, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { BUSINESS } from "@/lib/site";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-6 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-2 font-display text-xs font-bold tracking-[0.28em] text-primary uppercase">
      <span className="inline-block h-3 w-1 bg-primary" />
      {children}
    </p>
  );
}

export function CallButton({
  label = `Call ${BUSINESS.phone}`,
  variant = "primary",
  className = "",
}: {
  label?: string;
  variant?: "primary" | "accent" | "outline";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:shadow-glow"
      : variant === "accent"
        ? "bg-accent text-accent-foreground hover:shadow-hard"
        : "border border-border bg-transparent text-foreground hover:bg-secondary";
  return (
    <a
      href={BUSINESS.tel}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 font-display text-sm font-bold tracking-widest uppercase transition-all hover:-translate-y-0.5 ${styles} ${className}`}
    >
      <Phone className="h-4 w-4" />
      {label}
    </a>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 lg:px-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1">
            {item.to ? (
              <Link to={item.to} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
            {i < items.length - 1 && <ChevronRight className="h-3 w-3" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="grid gap-3">
      {items.map((f) => (
        <details
          key={f.q}
          className="group rounded-sm border border-border bg-card p-5 open:shadow-hard"
        >
          <summary className="cursor-pointer list-none font-display text-lg font-semibold tracking-wide">
            <span className="flex items-start justify-between gap-4">
              {f.q}
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-90" />
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
