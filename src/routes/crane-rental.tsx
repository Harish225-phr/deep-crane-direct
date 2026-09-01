import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/tow-truck-fleet.jpg";
import { BUSINESS, LOCATIONS } from "@/lib/site";
import { Breadcrumbs, CallButton, Eyebrow, FaqList, Section, faqSchema } from "@/components/Ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const TITLE = "10 Ton Hydra Crane Rental in Shimla & Solan | Deep Crane Service";
const DESC =
  "Hire a 10 ton Hydra crane in Shimla, Solan, Parwanoo, Baddi and Nalagarh for machinery shifting, construction lifting, loading and unloading. Rock breaker and scaffolding rental available.";

const FAQS = [
  {
    q: "Do you provide 10-ton Hydra cranes?",
    a: "Yes. Our primary lifting unit is a 10 ton Hydra crane, available with an experienced operator on hourly or daily hire.",
  },
  {
    q: "Do you handle machinery shifting inside factory premises?",
    a: "Yes. We regularly work inside industrial units at Parwanoo, Baddi, Nalagarh and Chambaghat for machinery lifting, positioning and in-plant shifting.",
  },
  {
    q: "Can the crane reach hill construction sites?",
    a: "In most cases yes. We check the approach road width, gradient and turning space before committing, so the crane is not stranded at the site entrance.",
  },
  {
    q: "Do you rent rock breakers and scaffolding?",
    a: "Yes, rock breaker and scaffolding rental can be arranged along with crane deployment. Call us with your site requirement and duration.",
  },
];

const SERVICES_LIST = [
  "Hydra Crane Rental",
  "Machinery Lifting",
  "Machinery Shifting",
  "Construction Equipment Handling",
  "Loading & Unloading",
  "Heavy Material Handling",
  "Industrial Equipment Shifting",
  "Site Deployment",
  "Rock Breaker Rental",
  "Scaffolding Rental",
];

export const Route = createFileRoute("/crane-rental")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/crane-rental" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/crane-rental" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(FAQS)) }],
  }),
  component: CranePage,
});

function CranePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Crane Rental" }]} />
      <Section className="!pt-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Lifting & shifting</Eyebrow>
            <h1 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-5xl">
              10 Ton Hydra Crane Rental in Shimla
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The same crane that pulls trucks back onto the highway also works construction sites,
              factories and warehouses. Deep Crane Service hires out a 10 ton Hydra crane with an
              operator across Shimla, Solan, Parwanoo, Baddi and Nalagarh.
            </p>
            <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
              {SERVICES_LIST.map((s) => (
                <li key={s} className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 bg-accent" /> {s}
                </li>
              ))}
            </ul>
            <CallButton label="Call for Crane Rental" variant="accent" className="mt-7" />
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={heroImg}
              alt="Deep Crane Service Hydra crane and recovery vehicle at Kachi Ghati, Shimla"
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
              Crane deployment areas
            </h2>
          </Reveal>
          <Stagger className="mt-6 flex flex-wrap gap-3">
            {LOCATIONS.filter((l) => l.services.includes("crane-rental")).map((l) => (
              <StaggerItem key={l.slug}>
                <Link
                  to="/$slug"
                  params={{ slug: `crane-rental-in-${l.slug}` }}
                  className="inline-block rounded-sm border border-border bg-card px-4 py-2.5 font-display text-sm font-semibold tracking-wide uppercase hover:border-primary hover:text-primary"
                >
                  Crane Rental in {l.name}
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      </div>

      <Section>
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
            Crane rental questions
          </h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-6">
          <FaqList items={FAQS} />
        </Reveal>
        <p className="mt-8 text-sm text-muted-foreground">
          Call {BUSINESS.phone} — {BUSINESS.hours}
        </p>
      </Section>
    </>
  );
}
