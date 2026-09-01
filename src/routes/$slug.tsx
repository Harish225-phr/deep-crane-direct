import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";

import carTowingRoad from "../assets/car-towing-road.jpg";
import overturned from "../assets/accident-overturned-recovery.jpg";
import fleetImg from "../assets/tow-truck-fleet.jpg";
import jeepMountain from "../assets/jeep-recovery-mountain.jpg";
import accidentTowing from "../assets/accident-vehicle-towing.jpg";
import roadsideImg from "../assets/roadside-assistance.jpg";
import suvShimla from "../assets/suv-towing-shimla.jpg";

import {
  BUSINESS,
  COMBO_PAGES,
  FULL_ADDRESS,
  LOCATION_BY_SLUG,
  SERVICES,
  parseCombo,
  type ServiceKey,
} from "@/lib/site";
import { Breadcrumbs, CallButton, Eyebrow, FaqList, Section, faqSchema } from "@/components/Ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const IMAGES: Record<ServiceKey, { src: string; alt: (l: string) => string }> = {
  "car-towing": { src: carTowingRoad, alt: (l) => `Car towing service in ${l}, Himachal Pradesh` },
  "vehicle-recovery": {
    src: overturned,
    alt: (l) => `Vehicle recovery from a roadside slope in ${l}`,
  },
  "heavy-vehicle-recovery": {
    src: jeepMountain,
    alt: (l) => `Heavy vehicle recovery on a mountain road near ${l}`,
  },
  "truck-recovery": { src: fleetImg, alt: (l) => `Truck recovery vehicle deployed in ${l}` },
  "bus-recovery": { src: suvShimla, alt: (l) => `Bus and large vehicle recovery support in ${l}` },
  "roadside-assistance": {
    src: roadsideImg,
    alt: (l) => `Roadside assistance for a stranded vehicle in ${l}`,
  },
  "crane-rental": { src: accidentTowing, alt: (l) => `Hydra crane deployed for lifting work in ${l}` },
};

function titleFor(serviceName: string, loc: string) {
  return `${serviceName} in ${loc} – 24/7 Emergency Service | Deep Crane Service`;
}

function descFor(serviceName: string, loc: string) {
  return `${serviceName} in ${loc}, Himachal Pradesh. Deep Crane Service provides 24/7 ${serviceName.toLowerCase()} with experienced crews and crane-equipped vehicles. Call ${BUSINESS.phone}.`;
}

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const page = parseCombo(params.slug);
    if (!page) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const page = parseCombo(params.slug);
    if (!page) {
      return { meta: [{ title: "Page not found | Deep Crane Service" }, { name: "robots", content: "noindex" }] };
    }
    const title = titleFor(page.service.name, page.loc.name);
    const desc = descFor(page.service.name, page.loc.name);
    const url = `/${page.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${page.service.name} in ${page.loc.name}`,
            serviceType: page.service.name,
            description: desc,
            areaServed: { "@type": "Place", name: `${page.loc.name}, ${page.loc.district}, Himachal Pradesh` },
            provider: {
              "@type": "AutomotiveBusiness",
              name: BUSINESS.name,
              telephone: BUSINESS.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS.address.street,
                addressLocality: BUSINESS.address.city,
                addressRegion: BUSINESS.address.state,
                postalCode: BUSINESS.address.postalCode,
                addressCountry: "IN",
              },
              openingHours: "Mo-Su 00:00-23:59",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema(buildFaqs(params.slug))),
        },
      ],
    };
  },
  component: ComboPage,
});

function buildFaqs(slug: string) {
  const page = parseCombo(slug);
  if (!page) return [];
  const { service, loc } = page;
  return [
    {
      q: `Do you provide ${service.name.toLowerCase()} in ${loc.name} at night?`,
      a: `Yes. Deep Crane Service runs a 24 hour operation from Kachi Ghati, Shimla. ${service.name} calls from ${loc.name} are attended at any hour, including nights, Sundays and holidays.`,
    },
    {
      q: `How long does it take to reach ${loc.name}?`,
      a: `It depends on traffic, weather and the exact spot in ${loc.name}. We tell you a realistic arrival time on the call rather than a fixed promise, and we keep you updated while the crew is on the way.`,
    },
    {
      q: `Which nearby areas do you cover along with ${loc.name}?`,
      a: `Along with ${loc.name} we regularly respond in ${loc.nearby
        .map((n) => LOCATION_BY_SLUG[n]?.name ?? n)
        .join(", ")} and the connecting road stretches.`,
    },
    {
      q: `What does ${service.name.toLowerCase()} in ${loc.name} cost?`,
      a: `Charges depend on distance, vehicle type, the equipment required and the difficulty of the position. We discuss the cost with you on the phone before dispatching, so there are no surprises at the site.`,
    },
  ];
}

function ComboPage() {
  const { slug } = Route.useLoaderData();
  const page = parseCombo(slug)!;
  const { service, loc } = page;
  const img = IMAGES[service.key];
  const faqs = buildFaqs(slug);

  const sameLocation = loc.services.filter((s) => s !== service.key);
  const sameService = COMBO_PAGES.filter(
    (p) => p.service.key === service.key && p.loc.slug !== loc.slug,
  ).slice(0, 8);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Locations", to: "/locations" },
          { label: loc.name },
          { label: `${service.name} in ${loc.name}` },
        ]}
      />

      <Section className="!pt-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>
              {loc.district} District · 24/7 Response
            </Eyebrow>
            <h1 className="font-display text-3xl leading-tight font-bold tracking-wide uppercase sm:text-5xl">
              {service.name} in {loc.name} – 24/7 Emergency Vehicle Recovery
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {loc.intro}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Deep Crane Service provides {service.name.toLowerCase()} in {loc.name} with
              crane-equipped recovery vehicles and crews who have worked these roads since{" "}
              {BUSINESS.established}. {service.short}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallButton label={`Call for ${service.urlName}`} />
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-6 py-3.5 font-display text-sm font-bold tracking-widest uppercase hover:bg-secondary"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={img.src}
              alt={img.alt(loc.name)}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover shadow-hard"
            />
          </Reveal>
        </div>
      </Section>

      <div className="border-y border-border bg-surface-2">
        <Section>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
                What our {service.name.toLowerCase()} covers in {loc.name}
              </h2>
              <ul className="mt-5 grid gap-3">
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
                Road conditions we plan for in {loc.name}
              </h2>
              <ul className="mt-5 grid gap-3">
                {loc.terrain.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-accent" /> {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Knowing the road matters as much as the equipment. Before the crew leaves for{" "}
                {loc.name} we confirm the access route, the width available for the recovery
                vehicle and whether crane support will be needed on site.
              </p>
            </Reveal>
          </div>
        </Section>
      </div>

      <Section>
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
            How to request {service.name.toLowerCase()} in {loc.name}
          </h2>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Call us", d: `Dial ${BUSINESS.phone} — answered 24 hours.` },
            { n: "02", t: "Share your location", d: `Tell us the landmark in ${loc.name} and the problem.` },
            { n: "03", t: "Team dispatched", d: "The right towing or crane unit is sent out." },
            { n: "04", t: "Safe recovery", d: "Vehicle recovered and delivered where you need it." },
          ].map((s) => (
            <StaggerItem key={s.n} className="rounded-sm border border-border bg-card p-5">
              <span className="font-display text-4xl font-bold text-primary/25">{s.n}</span>
              <h3 className="mt-1 font-display text-lg font-bold tracking-wide uppercase">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <div className="border-y border-border bg-surface-2">
        <Section>
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
              Other services we run in {loc.name}
            </h2>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {sameLocation.map((k) => (
              <Link
                key={k}
                to="/$slug"
                params={{ slug: `${k}-in-${loc.slug}` }}
                className="rounded-sm border border-border bg-card px-4 py-2.5 font-display text-sm font-semibold tracking-wide uppercase hover:border-primary hover:text-primary"
              >
                {SERVICES[k].name} in {loc.name}
              </Link>
            ))}
          </div>

          <Reveal className="mt-10">
            <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
              {service.name} in nearby areas
            </h2>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {sameService.map((p) => (
              <Link
                key={p.slug}
                to="/$slug"
                params={{ slug: p.slug }}
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground hover:border-primary hover:text-primary"
              >
                <MapPin className="h-4 w-4 text-primary" /> {service.name} in {p.loc.name}
              </Link>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
            {service.name} in {loc.name} — common questions
          </h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-6">
          <FaqList items={faqs} />
        </Reveal>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-sm border border-border bg-card p-6 sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
            Need {service.name.toLowerCase()} in {loc.name} right now?
          </h2>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" /> {BUSINESS.hours}
          </p>
          <p className="mt-1 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {FULL_ADDRESS}
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" /> {BUSINESS.phone}
          </p>
          <CallButton label={`Call ${BUSINESS.phone}`} className="mt-6" />
        </div>
      </Section>
    </>
  );
}
