import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/suv-underlift-recovery.jpg";
import { BUSINESS, LOCATIONS, SERVICE_LIST } from "@/lib/site";
import { Breadcrumbs, CallButton, Eyebrow, Section } from "@/components/Ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const TITLE = "Towing, Vehicle Recovery & Crane Services in Shimla | Deep Crane Service";
const DESC =
  "Full list of Deep Crane Service services: car towing, vehicle recovery, heavy vehicle and truck recovery, bus recovery, roadside assistance and 10 ton Hydra crane rental across Shimla and Solan.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
      <Section className="!pt-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h1 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-5xl">
              Vehicle Recovery, Towing & Crane Services in Shimla
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every service below runs 24 hours a day from our base at the Old Barrier, Kachi Ghati.
              Whether it is a car that will not start on Cart Road or a loaded truck stuck on the
              Solan climb, we bring the equipment the job actually needs.
            </p>
            <CallButton label={`Call ${BUSINESS.phone}`} className="mt-7" />
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={heroImg}
              alt="Deep Crane Service under-lift tow truck lifting an SUV in Shimla"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover shadow-hard"
            />
          </Reveal>
        </div>
      </Section>

      <div className="border-y border-border bg-surface-2">
        <Section>
          <Stagger className="grid gap-4 lg:grid-cols-2">
            {SERVICE_LIST.map((s) => {
              const locs = LOCATIONS.filter((l) => l.services.includes(s.key)).slice(0, 6);
              return (
                <StaggerItem key={s.key} className="rounded-sm border border-border bg-card p-6">
                  <h2 className="font-display text-2xl font-bold tracking-wide uppercase">
                    {s.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {locs.map((l) => (
                      <Link
                        key={l.slug}
                        to="/$slug"
                        params={{ slug: `${s.key}-in-${l.slug}` }}
                        className="rounded-sm border border-border px-3 py-1.5 text-xs tracking-wide uppercase hover:border-primary hover:text-primary"
                      >
                        {l.name}
                      </Link>
                    ))}
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Section>
      </div>

      <Section>
        <div className="flex flex-col items-start justify-between gap-4 rounded-sm border border-border bg-card p-8 sm:flex-row sm:items-center">
          <h2 className="font-display text-2xl font-bold tracking-wide uppercase">
            Not sure which service you need? Just call — we will tell you.
          </h2>
          <div className="flex shrink-0 gap-3">
            <CallButton label="Call Now" />
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3.5 font-display text-sm font-bold tracking-widest uppercase hover:bg-secondary"
            >
              Locations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
