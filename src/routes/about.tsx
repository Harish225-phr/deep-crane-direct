import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, ShieldCheck, Star, Truck, Users } from "lucide-react";
import fleetImg from "../assets/tow-truck-fleet.jpg";
import suvUnderlift from "../assets/suv-underlift-recovery.jpg";
import { BUSINESS, FULL_ADDRESS, LOCATIONS, SERVICE_LIST } from "@/lib/site";
import { Breadcrumbs, CallButton, Eyebrow, Section } from "@/components/Ui";
import { CountUp } from "@/components/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const TITLE = "About Deep Crane Service | 10+ Years of Recovery in Shimla & Solan";
const DESC =
  "Deep Crane Service has provided 24/7 vehicle recovery, towing and crane rental across Shimla and Solan since 2016. Based at Kachi Ghati, Shimla with 10+ years of mountain recovery experience.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const STATS = [
  { icon: Clock, v: <CountUp to={10} suffix="+" />, l: "Years Serving Himachal" },
  { icon: Star, v: <CountUp to={4.9} decimals={1} suffix="★" />, l: "Customer Rating" },
  { icon: Users, v: <CountUp to={135} suffix="+" />, l: "Customer Reviews" },
  { icon: Truck, v: "24/7", l: "Emergency Availability" },
] as const;

const VALUES = [
  {
    icon: ShieldCheck,
    t: "Safety First, Always",
    d: "Every recovery is planned before the vehicle is moved. We rig for the slope, the weight and the road edge — not for speed at the cost of damage.",
  },
  {
    icon: Clock,
    t: "Genuine 24/7 Operation",
    d: "Our crew and crane base at Kachi Ghati means someone answers the phone at 3 AM and a recovery vehicle is moving within minutes, not hours.",
  },
  {
    icon: MapPin,
    t: "Local Road Knowledge",
    d: "We have worked the Cart Road, the NH-5 climb, the Kufri snow route and the Solan highway since 2016. Knowing the road is half the recovery.",
  },
  {
    icon: Truck,
    t: "Equipment for the Job",
    d: "Crane-equipped recovery vehicles and a 10 ton Hydra crane mean we bring what the situation actually needs, not just a tow hook and a hope.",
  },
] as const;

function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />

      <Section className="!pt-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>About us</Eyebrow>
            <h1 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-5xl">
              Deep Crane Service — Shimla's Recovery Team Since {BUSINESS.established}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Deep Crane Service started in {BUSINESS.established} from a single workshop at the Old
              Barrier in Kachi Ghati, Shimla. What began as a local towing service has grown into a
              full vehicle recovery and crane rental operation covering Shimla, Solan and the
              surrounding hill towns.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We are not a call centre that subcontracts your recovery to whoever is nearby. Our own
              crew, our own crane and our own recovery vehicles leave from Kachi Ghati — which means
              we know how long it takes to reach you and what equipment the road will demand.
            </p>
            <CallButton label={`Call ${BUSINESS.phone}`} className="mt-7" />
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={fleetImg}
              alt="Deep Crane Service recovery vehicle fleet at Kachi Ghati, Shimla"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover shadow-hard"
            />
          </Reveal>
        </div>
      </Section>

      <div className="border-y border-border bg-surface-2">
        <Section>
          <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {STATS.map((s) => (
              <StaggerItem
                key={s.l}
                className="rounded-sm border border-border bg-card p-5 text-center"
              >
                <s.icon className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
                  {s.v}
                </p>
                <p className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {s.l}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      </div>

      <Section>
        <Reveal>
          <Eyebrow>What drives us</Eyebrow>
          <h2 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
            Our Approach to Recovery
          </h2>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
          {VALUES.map((v) => (
            <StaggerItem key={v.t} className="flex gap-4 rounded-sm border border-border bg-card p-6">
              <v.icon className="h-7 w-7 shrink-0 text-primary" />
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold tracking-wide uppercase">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <div className="border-y border-border bg-surface-2">
        <Section>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <img
                src={suvUnderlift}
                alt="Deep Crane Service under-lift recovery of an SUV in Himachal Pradesh"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover shadow-hard"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow>What we offer</Eyebrow>
              <h2 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
                Services & Coverage
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                From car towing on Cart Road to loaded truck recovery on the Solan highway climb,
                and from 10 ton Hydra crane rental in Parwanoo to machinery shifting in Baddi —
                our service list covers the full range of recovery and lifting work the hills demand.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {SERVICE_LIST.map((s) => (
                  <Link
                    key={s.key}
                    to="/$slug"
                    params={{ slug: `${s.key}-in-shimla` }}
                    className="rounded-sm border border-border bg-card px-3 py-2 text-xs tracking-wide uppercase hover:border-primary hover:text-primary"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Serving {LOCATIONS.length}+ locations across Shimla and Solan districts ·{" "}
                {BUSINESS.hours}
              </p>
            </Reveal>
          </div>
        </Section>
      </div>

      <Section>
        <div className="rounded-sm border border-border bg-card p-6 sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
            Need recovery or crane rental? Call us now.
          </h2>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> {FULL_ADDRESS}
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" /> {BUSINESS.hours}
          </p>
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
      </Section>
    </>
  );
}
