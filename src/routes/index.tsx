import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Bus,
  Car,
  Clock,
  ConeIcon,
  Construction,
  Crane,
  MapPin,
  MapPinned,
  MountainSnow,
  PhoneCall,
  ShieldCheck,
  Star,
  Truck,
  Wrench,
  Users,
  Package,
} from "lucide-react";

import heroImg from "../assets/tow-truck-car-recovery.jpg";
import suvUnderlift from "../assets/suv-underlift-recovery.jpg";
import overturned from "../assets/accident-overturned-recovery.jpg";
import fleetImg from "../assets/tow-truck-fleet.jpg";
import carTowingRoad from "../assets/car-towing-road.jpg";
import jeepMountain from "../assets/jeep-recovery-mountain.jpg";
import accidentTowing from "../assets/accident-vehicle-towing.jpg";
import roadsideImg from "../assets/roadside-assistance.jpg";
import suvShimla from "../assets/suv-towing-shimla.jpg";

import { BUSINESS, EXTRA_AREAS, FULL_ADDRESS, LOCATIONS, SERVICE_LIST } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CallButton, Eyebrow, FaqList, Section, faqSchema } from "@/components/Ui";

const TITLE = "24/7 Car Towing & Heavy Vehicle Recovery in Shimla | Deep Crane Service";
const DESC =
  "Deep Crane Service provides 24/7 car towing, heavy vehicle recovery, roadside assistance and 10 ton Hydra crane rental in Shimla, Solan and nearby Himachal Pradesh towns. Call +91 98175 20650.";

const FAQS = [
  {
    q: "Do you provide 24-hour car towing in Shimla?",
    a: "Yes. Deep Crane Service operates 24 hours a day, all seven days, from our base at the Old Barrier in Kachi Ghati. Call +91 98175 20650 at any hour and a recovery vehicle is dispatched to your location.",
  },
  {
    q: "Do you provide heavy vehicle recovery for trucks and buses?",
    a: "Yes. We recover trucks, buses, tippers, trailers and other commercial vehicles using crane-assisted lifting, and we are experienced in clearing blocked hill highways safely.",
  },
  {
    q: "Can you recover vehicles from difficult mountain roads?",
    a: "Mountain recovery is our core work. We handle steep gradients, sharp hairpins, narrow single-lane roads, slush and snow-affected stretches and vehicles that have gone below road level.",
  },
  {
    q: "How quickly can a recovery team reach me?",
    a: "Within Shimla town the crew is usually mobile within minutes. For outlying areas such as Kufri, Shoghi, Kandaghat or Solan, arrival depends on distance, traffic and weather; we give you a realistic time on the call.",
  },
  {
    q: "Do you provide towing services in Solan?",
    a: "Yes. We cover Solan town along with Chambaghat, Salogra, Barog, Kumarhatti, Dharampur, Kandaghat, Parwanoo and the surrounding Kalka–Shimla highway stretch.",
  },
  {
    q: "Do you provide 10-ton Hydra crane rental in Shimla?",
    a: "Yes. Our 10 ton Hydra crane is available on hourly or daily hire for machinery shifting, construction lifting, loading and unloading. Rock breaker and scaffolding rental can also be arranged.",
  },
  {
    q: "Can you recover an accident-damaged vehicle?",
    a: "Yes. We recover accident-damaged vehicles from roads, slopes, ditches and difficult roadside positions, and transport them to your chosen workshop, yard or police station.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          "@id": "#deep-crane-service",
          name: BUSINESS.name,
          description: DESC,
          telephone: BUSINESS.phone,
          foundingDate: String(BUSINESS.established),
          openingHours: "Mo-Su 00:00-23:59",
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.address.street,
            addressLocality: BUSINESS.address.city,
            addressRegion: BUSINESS.address.state,
            postalCode: BUSINESS.address.postalCode,
            addressCountry: "IN",
          },
          areaServed: LOCATIONS.map((l) => ({ "@type": "City", name: l.name })),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: BUSINESS.rating,
            reviewCount: BUSINESS.reviews,
          },
          makesOffer: SERVICE_LIST.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name },
          })),
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(FAQS)) },
    ],
  }),
  component: Home,
});

const SERVICE_CARDS = [
  { icon: Car, name: "Car Towing", text: SERVICE_LIST[0].short, to: "/car-towing-in-shimla" },
  {
    icon: Truck,
    name: "Heavy Vehicle Recovery",
    text: "Recovery services for trucks, buses and commercial vehicles on difficult mountain roads.",
    to: "/heavy-vehicle-recovery-in-shimla",
  },
  {
    icon: Wrench,
    name: "Roadside Assistance",
    text: "Emergency roadside support for vehicles that become stranded during travel.",
    to: "/roadside-assistance-in-shimla",
  },
  {
    icon: AlertTriangle,
    name: "Accident Vehicle Recovery",
    text: "Professional recovery of accident-damaged vehicles from roads, slopes, ditches and difficult locations.",
    to: "/vehicle-recovery-in-shimla",
  },
  {
    icon: Truck,
    name: "Truck Recovery",
    text: "Heavy-duty recovery solutions for commercial trucks and transport vehicles.",
    to: "/truck-recovery-in-shimla",
  },
  {
    icon: Bus,
    name: "Bus Recovery",
    text: "Professional recovery support for buses and large passenger vehicles.",
    to: "/bus-recovery-in-shimla",
  },
  {
    icon: ConeIcon,
    name: "Flatbed Towing",
    text: "Secure vehicle transportation using suitable towing equipment.",
    to: "/car-towing-in-shimla",
  },
  {
    icon: MountainSnow,
    name: "Mountain Vehicle Recovery",
    text: "Specialised recovery support for vehicles stranded on steep roads, sharp curves and mountain routes.",
    to: "/vehicle-recovery-in-kufri",
  },
  {
    icon: Crane,
    name: "Hydra Crane Rental",
    text: "10-ton Hydra crane services for construction, lifting, machinery shifting and industrial work.",
    to: "/crane-rental-in-shimla",
  },
] as const;

const VEHICLE_TYPES = [
  { icon: Car, label: "Cars" },
  { icon: Car, label: "SUVs" },
  { icon: Truck, label: "Trucks" },
  { icon: Bus, label: "Buses" },
  { icon: Package, label: "Commercial Vehicles" },
  { icon: Construction, label: "Heavy Equipment" },
] as const;

const STEPS = [
  { n: "01", t: "Call Us", d: "Contact our emergency number, any time of the day or night." },
  { n: "02", t: "Share Your Location", d: "Tell us where your vehicle is and what has gone wrong." },
  {
    n: "03",
    t: "Recovery Team Dispatched",
    d: "Our crew leaves with the right crane or towing equipment for the job.",
  },
  {
    n: "04",
    t: "Safe Vehicle Recovery",
    d: "Your vehicle is recovered and transported safely to your chosen destination.",
  },
] as const;

const WHY = [
  { icon: Clock, t: "24/7 Emergency Availability", d: "Crew and crane on standby every hour." },
  { icon: ShieldCheck, t: "10+ Years of Experience", d: `Serving Himachal since ${BUSINESS.established}.` },
  { icon: Users, t: "Experienced Recovery Team", d: "Trained operators for high-risk lifts." },
  { icon: MountainSnow, t: "Mountain Terrain Expertise", d: "Gradients, hairpins and snow routes." },
  { icon: Truck, t: "Heavy Vehicle Capability", d: "Trucks, buses and loaded commercials." },
  { icon: Crane, t: "Professional Equipment", d: "Hydra crane and recovery vehicles." },
  { icon: PhoneCall, t: "Fast Response", d: "Base at Kachi Ghati on the NH-5 entry." },
  { icon: Star, t: "Transparent & Affordable", d: "Clear pricing discussed before dispatch." },
  { icon: MapPinned, t: "Local Shimla Knowledge", d: "We know the shortcuts and the barriers." },
  { icon: ShieldCheck, t: "Safe Vehicle Handling", d: "Correct rigging, no added damage." },
] as const;

const CRANE_SERVICES = [
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

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <>
      {/* HERO */}
      <div ref={heroRef} className="relative isolate overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Deep Crane Service tow truck recovering a car on a Shimla road"
          style={{ y }}
          className="absolute inset-0 -z-10 h-[115%] w-full object-cover"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-sm bg-accent px-3 py-1.5 font-display text-xs font-bold tracking-[0.2em] text-accent-foreground uppercase">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              24/7 Emergency Response · Shimla & Solan
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] font-bold tracking-wide uppercase sm:text-6xl lg:text-7xl">
              24/7 Car Towing & Heavy Vehicle Recovery in{" "}
              <span className="text-gradient-accent">Shimla</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Fast, safe and reliable vehicle recovery, towing and roadside assistance across
              Shimla, Solan and nearby Himachal Pradesh locations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton label="Call for Emergency Recovery" />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background/60 px-6 py-3.5 font-display text-sm font-bold tracking-widest uppercase transition-all hover:-translate-y-0.5 hover:bg-secondary"
              >
                View Our Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <Stagger className="mt-14 grid grid-cols-2 gap-3 sm:mt-20 lg:grid-cols-4">
            {[
              { v: <CountUp to={10} suffix="+" />, l: "Years Experience" },
              { v: <CountUp to={4.9} decimals={1} suffix="★" />, l: "Customer Rating" },
              { v: "24/7", l: "Emergency Response" },
              { v: <CountUp to={135} suffix="+" />, l: "Customer Reviews" },
            ].map((s, i) => (
              <StaggerItem
                key={i}
                className="rounded-sm border border-border bg-card/80 p-4 backdrop-blur"
              >
                <p className="font-display text-3xl font-bold text-primary sm:text-4xl">{s.v}</p>
                <p className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {s.l}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      {/* EMERGENCY STRIP */}
      <div className="border-y border-border bg-accent">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center md:flex-row md:justify-between md:text-left lg:px-6">
          <div>
            <p className="font-display text-xl font-bold tracking-wide text-accent-foreground uppercase sm:text-2xl">
              Vehicle broken down? Accident? Need immediate recovery?
            </p>
            <p className="text-sm text-accent-foreground/85">
              Deep Crane Service is available 24/7 across Shimla and Solan.
            </p>
          </div>
          <CallButton label={`Call ${BUSINESS.phone}`} variant="primary" className="shrink-0" />
        </div>
      </div>

      {/* SERVICES */}
      <Section id="services">
        <Reveal>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="max-w-3xl font-display text-3xl font-bold tracking-wide uppercase sm:text-5xl">
            Our Vehicle Recovery & Heavy Equipment Services
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((s) => (
            <StaggerItem key={s.name}>
              <Link
                to={s.to}
                className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/70 hover:shadow-hard"
              >
                <s.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-xl font-bold tracking-wide uppercase">
                  {s.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold tracking-[0.18em] text-primary uppercase">
                  Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* VEHICLE RECOVERY */}
      <div className="border-y border-border bg-surface-2">
        <Section>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Mountain recovery</Eyebrow>
              <h2 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
                Professional Vehicle Recovery for Mountain Roads
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Shimla and the surrounding Himalayan roads are unlike plain-land driving. Steep
                gradients, sharp turns, narrow carriageways and slippery winter surfaces mean a
                simple breakdown can quickly become a dangerous situation — and a standard tow
                vehicle is often not enough.
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
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Deep Crane Service combines a crane-equipped fleet with crews who have worked these
                roads since {BUSINESS.established}. We assess the slope, rig the vehicle correctly
                and bring it back onto the road without adding further damage.
              </p>
              <CallButton label="Need Vehicle Recovery? Call Now" className="mt-7" />
            </Reveal>
            <Reveal delay={0.1}>
              <img
                src={overturned}
                alt="Deep Crane Service recovering an overturned car on a hillside road near Shimla"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover shadow-hard"
              />
            </Reveal>
          </div>

          <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {VEHICLE_TYPES.map((v) => (
              <StaggerItem
                key={v.label}
                className="rounded-sm border border-border bg-card p-4 text-center"
              >
                <v.icon className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-2 font-display text-sm font-semibold tracking-wide uppercase">
                  {v.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      </div>

      {/* HOW IT WORKS */}
      <Section>
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
            Emergency Recovery in Four Steps
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <StaggerItem
              key={s.n}
              className="relative overflow-hidden rounded-sm border border-border bg-card p-6"
            >
              <span className="font-display text-5xl font-bold text-primary/25">{s.n}</span>
              <h3 className="mt-2 font-display text-xl font-bold tracking-wide uppercase">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* WHY CHOOSE US */}
      <div className="border-y border-border bg-surface-2">
        <Section>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <Eyebrow>Trust</Eyebrow>
                <h2 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
                  Why Choose Deep Crane Service?
                </h2>
              </Reveal>
              <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
                {WHY.map((w) => (
                  <StaggerItem
                    key={w.t}
                    className="flex gap-3 rounded-sm border border-border bg-card p-4"
                  >
                    <w.icon className="h-5 w-5 shrink-0 text-primary" />
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold tracking-wide uppercase">
                        {w.t}
                      </h3>
                      <p className="text-xs text-muted-foreground">{w.d}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1} className="lg:sticky lg:top-32 lg:self-start">
              <img
                src={suvUnderlift}
                alt="Deep Crane Service under-lift towing an SUV in Himachal Pradesh"
                loading="lazy"
                className="h-full max-h-[560px] w-full rounded-sm object-cover shadow-hard"
              />
            </Reveal>
          </div>
        </Section>
      </div>

      {/* CRANE RENTAL */}
      <Section id="crane">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={fleetImg}
              alt="Deep Crane Service recovery truck and Hydra crane fleet at Kachi Ghati, Shimla"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover shadow-hard"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Lifting & shifting</Eyebrow>
            <h2 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
              10 Ton Hydra Crane Rental in Shimla
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Alongside recovery work, our 10 ton Hydra crane is available on hire for construction
              sites, factories and industrial premises across Shimla, Solan, Parwanoo, Baddi and
              Nalagarh — with an operator who understands hill-site access.
            </p>
            <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
              {CRANE_SERVICES.map((c) => (
                <li key={c} className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 bg-accent" /> {c}
                </li>
              ))}
            </ul>
            <CallButton label="Call for Crane Rental" variant="accent" className="mt-7" />
          </Reveal>
        </div>
      </Section>

      {/* AREAS WE SERVE */}
      <div className="border-y border-border bg-surface-2">
        <Section id="locations">
          <Reveal>
            <Eyebrow>Coverage</Eyebrow>
            <h2 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
              Areas We Serve Across Shimla & Solan
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Choose your area to see local towing, recovery and crane rental details, response
              notes and the roads we cover.
            </p>
          </Reveal>
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((l) => (
              <StaggerItem key={l.slug}>
                <div className="h-full rounded-sm border border-border bg-card p-5">
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold tracking-wide uppercase">
                    <MapPin className="h-4 w-4 text-primary" /> {l.name}
                    <span className="ml-auto text-[10px] tracking-[0.16em] text-muted-foreground">
                      {l.district}
                    </span>
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {l.services.map((s) => (
                      <li key={s}>
                        <Link
                          to={`/${s}-in-${l.slug}`}
                          className="inline-block rounded-sm border border-border px-2 py-1 text-[11px] tracking-wide text-muted-foreground uppercase hover:border-primary hover:text-primary"
                        >
                          {s.replace(/-/g, " ")}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <p className="mt-6 text-sm text-muted-foreground">
              We also respond in {EXTRA_AREAS.join(", ")} and along the connecting highway routes.
            </p>
          </Reveal>
        </Section>
      </div>

      {/* TRUST / REVIEWS */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Reputation</Eyebrow>
            <h2 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
              Rated {BUSINESS.rating}★ by {BUSINESS.reviews}+ Customers
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Deep Crane Service has been recovering vehicles across Shimla and Solan since{" "}
              {BUSINESS.established}. Our rating comes from drivers, transport operators and
              tourists who needed help on a hill road and got it quickly.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { v: `${BUSINESS.rating}★`, l: "Rated Service" },
                { v: `${BUSINESS.reviews}+`, l: "Reviews" },
                { v: "10+", l: "Years" },
              ].map((s) => (
                <div key={s.l} className="rounded-sm border border-border bg-card p-4 text-center">
                  <p className="font-display text-2xl font-bold text-primary">{s.v}</p>
                  <p className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-3">
            {[
              { src: carTowingRoad, alt: "Car towing service on a road in Shimla" },
              { src: jeepMountain, alt: "Jeep recovery on a mountain road near Shimla" },
              { src: accidentTowing, alt: "Accident-damaged SUV being towed by Deep Crane Service" },
              { src: roadsideImg, alt: "Roadside assistance and car towing in Himachal Pradesh" },
            ].map((im) => (
              <img
                key={im.alt}
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
            ))}
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <div className="border-y border-border bg-surface-2">
        <Section>
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={0.05} className="mt-8">
            <FaqList items={FAQS} />
          </Reveal>
        </Section>
      </div>

      {/* CONTACT CTA */}
      <Section>
        <div className="grid items-center gap-8 rounded-sm border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
              Stranded right now? Call Deep Crane Service
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{FULL_ADDRESS}</p>
            <p className="mt-1 text-sm text-muted-foreground">{BUSINESS.hours}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallButton label={`Call ${BUSINESS.phone}`} />
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-6 py-3.5 font-display text-sm font-bold tracking-widest uppercase hover:bg-secondary"
              >
                Contact Page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <img
            src={suvShimla}
            alt="Deep Crane Service towing an SUV in Shimla, Himachal Pradesh"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </div>
      </Section>
    </>
  );
}
