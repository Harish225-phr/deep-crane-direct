import { createFileRoute, Link } from "@tanstack/react-router";
import { Bus, Car, Construction, Package, Truck } from "lucide-react";
import heroImg from "../assets/accident-overturned-recovery.jpg";
import secondary from "../assets/jeep-recovery-mountain.jpg";
import { BUSINESS, LOCATIONS } from "@/lib/site";
import { Breadcrumbs, CallButton, Eyebrow, Section } from "@/components/Ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const TITLE = "Vehicle Recovery in Shimla & Solan | Mountain Road Recovery Experts";
const DESC =
  "Accident, breakdown and mountain road vehicle recovery across Shimla and Solan. Deep Crane Service recovers cars, SUVs, trucks, buses and heavy equipment 24/7. Call +91 98175 20650.";

export const Route = createFileRoute("/vehicle-recovery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/vehicle-recovery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/vehicle-recovery" }],
  }),
  component: RecoveryPage,
});

const TYPES = [
  { icon: Car, label: "Cars", d: "Hatchbacks, sedans and low-clearance vehicles." },
  { icon: Car, label: "SUVs", d: "4x4s and tourist vehicles off the carriageway." },
  { icon: Truck, label: "Trucks", d: "Loaded goods vehicles and tippers." },
  { icon: Bus, label: "Buses", d: "HRTC, private and tourist coaches." },
  { icon: Package, label: "Commercial Vehicles", d: "Tempo travellers, vans and pickups." },
  { icon: Construction, label: "Heavy Equipment", d: "Site machinery and construction plant." },
] as const;

function RecoveryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Vehicle Recovery" }]} />
      <Section className="!pt-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Mountain recovery</Eyebrow>
            <h1 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-5xl">
              Professional Vehicle Recovery for Mountain Roads
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Recovery in the Shimla and Solan hills is a different job from plain-land towing. A
              vehicle that has slipped off a banked curve near Kufri, or dropped below road level at
              Kandaghat, has to be stabilised before it is moved at all.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Steep gradients",
                "Sharp turns",
                "Narrow roads",
                "Slippery surfaces",
                "Vehicle breakdowns",
                "Accident recovery",
                "Difficult roadside access",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 bg-primary" /> {t}
                </li>
              ))}
            </ul>
            <CallButton label="Need Vehicle Recovery? Call Now" className="mt-7" />
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={heroImg}
              alt="Overturned vehicle being recovered by Deep Crane Service near Shimla"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover shadow-hard"
            />
          </Reveal>
        </div>
      </Section>

      <div className="border-y border-border bg-surface-2">
        <Section>
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
              Vehicles we recover
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TYPES.map((t) => (
              <StaggerItem key={t.label} className="rounded-sm border border-border bg-card p-5">
                <t.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-3 font-display text-lg font-bold tracking-wide uppercase">
                  {t.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      </div>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={secondary}
              alt="Deep Crane Service recovering a jeep on a hill road in Himachal Pradesh"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover shadow-hard"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
              Recovery cover by area
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Pick your area for local recovery details, road notes and response information.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {LOCATIONS.filter((l) => l.services.includes("vehicle-recovery")).map((l) => (
                <Link
                  key={l.slug}
                  to="/$slug"
                  params={{ slug: `vehicle-recovery-in-${l.slug}` }}
                  className="rounded-sm border border-border bg-card px-3 py-2 text-xs tracking-wide uppercase hover:border-primary hover:text-primary"
                >
                  {l.name}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Serving Himachal since {BUSINESS.established} · {BUSINESS.hours}
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
