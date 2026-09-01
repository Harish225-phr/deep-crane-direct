import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { BUSINESS, EXTRA_AREAS, LOCATIONS, SERVICES } from "@/lib/site";
import { Breadcrumbs, CallButton, Eyebrow, Section } from "@/components/Ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const TITLE = "Areas We Serve | Vehicle Recovery in Shimla, Solan & Nearby Towns";
const DESC =
  "Deep Crane Service covers Shimla, Solan, Kufri, Mashobra, Shoghi, Kandaghat, Kumarhatti, Dharampur, Parwanoo, Baddi, Nalagarh and more. Find your area for local recovery and crane rental details.";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/locations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  const shimlaLocations = LOCATIONS.filter((l) => l.district === "Shimla");
  const solanLocations = LOCATIONS.filter((l) => l.district === "Solan");

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Locations" }]} />

      <Section className="!pt-8">
        <Reveal>
          <Eyebrow>Coverage</Eyebrow>
          <h1 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-5xl">
            Areas We Serve Across Shimla & Solan
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Deep Crane Service operates from our base at the Old Barrier in Kachi Ghati, Shimla.
            From there we cover the entire Shimla town network, the NH-5 highway corridor towards
            Solan, and the connecting hill roads. Choose your area below to see local towing,
            recovery and crane rental details, road notes and response information.
          </p>
        </Reveal>
      </Section>

      <div className="border-y border-border bg-surface-2">
        <Section>
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
              Shimla District
            </h2>
          </Reveal>
          <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shimlaLocations.map((l) => (
              <StaggerItem key={l.slug}>
                <div className="h-full rounded-sm border border-border bg-card p-5">
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold tracking-wide uppercase">
                    <MapPin className="h-4 w-4 text-primary" /> {l.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{l.intro}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {l.services.map((s) => (
                      <li key={s}>
                        <Link
                          to="/$slug"
                          params={{ slug: `${s}-in-${l.slug}` }}
                          className="inline-block rounded-sm border border-border px-2 py-1 text-[11px] tracking-wide text-muted-foreground uppercase hover:border-primary hover:text-primary"
                        >
                          {SERVICES[s].name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      </div>

      <Section>
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
            Solan District
          </h2>
        </Reveal>
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solanLocations.map((l) => (
            <StaggerItem key={l.slug}>
              <div className="h-full rounded-sm border border-border bg-card p-5">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold tracking-wide uppercase">
                  <MapPin className="h-4 w-4 text-primary" /> {l.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{l.intro}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {l.services.map((s) => (
                    <li key={s}>
                      <Link
                        to="/$slug"
                        params={{ slug: `${s}-in-${l.slug}` }}
                        className="inline-block rounded-sm border border-border px-2 py-1 text-[11px] tracking-wide text-muted-foreground uppercase hover:border-primary hover:text-primary"
                      >
                        {SERVICES[s].name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <div className="border-y border-border bg-surface-2">
        <Section>
          <Reveal>
            <Eyebrow>Also covered</Eyebrow>
            <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
              Additional Areas Along Our Routes
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Along with the locations listed above, we also respond in the following areas and
              along the connecting highway stretches between them.
            </p>
          </Reveal>
          <Reveal delay={0.05} className="mt-6">
            <div className="flex flex-wrap gap-2">
              {EXTRA_AREAS.map((a) => (
                <span
                  key={a}
                  className="inline-block rounded-sm border border-border bg-card px-3 py-2 text-sm text-muted-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </Section>
      </div>

      <Section>
        <div className="rounded-sm border border-border bg-card p-6 sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
            Don't see your area? Call us.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            If your location is along the Shimla–Solan highway corridor or a connecting hill road,
            we can usually reach you. Call {BUSINESS.phone} and we will tell you honestly whether we
            can help and how long it will take.
          </p>
          <CallButton label={`Call ${BUSINESS.phone}`} className="mt-6" />
        </div>
      </Section>
    </>
  );
}
