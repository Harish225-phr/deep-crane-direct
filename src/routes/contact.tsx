import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import roadsideImg from "../assets/roadside-assistance.jpg";
import { BUSINESS, EXTRA_AREAS, FULL_ADDRESS, LOCATIONS, SERVICE_LIST } from "@/lib/site";
import { Breadcrumbs, CallButton, Eyebrow, Section } from "@/components/Ui";
import { Reveal } from "@/components/Reveal";

const TITLE = "Contact Deep Crane Service | 24/7 Recovery in Shimla & Solan";
const DESC =
  "Contact Deep Crane Service for 24/7 vehicle recovery, towing and crane rental in Shimla and Solan. Call +91 98175 20650 or send us a message. Based at Kachi Ghati, Shimla.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

      <Section className="!pt-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-5xl">
              Call Deep Crane Service
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              For emergency vehicle recovery, towing or crane rental, the fastest way to reach us is
              by phone. Our crew is on standby 24 hours a day at Kachi Ghati, Shimla.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={BUSINESS.tel}
                className="flex items-center gap-3 rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">Phone</p>
                  <p className="font-display text-lg font-bold">{BUSINESS.phone}</p>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-sm border border-border bg-card p-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">Hours</p>
                  <p className="font-display text-lg font-bold">{BUSINESS.hours}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-sm border border-border bg-card p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    Address
                  </p>
                  <p className="text-sm leading-relaxed">{FULL_ADDRESS}</p>
                </div>
              </div>
            </div>

            <CallButton label={`Call ${BUSINESS.phone}`} className="mt-6" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold tracking-wide uppercase">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                For non-emergency enquiries, fill in the form below and we will get back to you. For
                urgent recovery, please call directly.
              </p>
              {submitted ? (
                <div className="mt-6 rounded-sm border border-primary/50 bg-primary/10 p-6 text-center">
                  <p className="font-display text-lg font-bold tracking-wide uppercase">
                    Message Received
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for reaching out. For urgent assistance, please call {BUSINESS.phone}.
                  </p>
                </div>
              ) : (
                <form
                  className="mt-6 grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="h-10 w-full rounded-sm border border-border bg-background px-3 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        className="h-10 w-full rounded-sm border border-border bg-background px-3 text-sm outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className="h-10 w-full rounded-sm border border-border bg-background px-3 text-sm outline-none focus:border-primary"
                    >
                      {SERVICE_LIST.map((s) => (
                        <option key={s.key}>{s.name}</option>
                      ))}
                      <option>Other / Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                      placeholder="Describe your location and situation..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase transition-all hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    <Mail className="h-4 w-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Section>

      <div className="border-y border-border bg-surface-2">
        <Section>
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
              Find Us on the Map
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Our workshop and crane base is at the Tourism Workshop near the Old Barrier in Kachi
              Ghati, on the NH-5 entry into Shimla town.
            </p>
          </Reveal>
          <Reveal delay={0.05} className="mt-6">
            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="Deep Crane Service location map"
                src="https://www.google.com/maps?q=Kachi+Ghati+Shimla+Himachal+Pradesh+171004&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Section>
      </div>

      <Section>
        <div className="grid items-center gap-8 rounded-sm border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
              Service Areas & Coverage
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We cover {LOCATIONS.length}+ locations across Shimla and Solan districts, including{" "}
              {EXTRA_AREAS.slice(0, 6).join(", ")} and more.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {LOCATIONS.slice(0, 10).map((l) => (
                <span
                  key={l.slug}
                  className="inline-block rounded-sm border border-border bg-background px-3 py-1.5 text-xs tracking-wide uppercase text-muted-foreground"
                >
                  {l.name}
                </span>
              ))}
              <span className="inline-block rounded-sm border border-border bg-background px-3 py-1.5 text-xs tracking-wide uppercase text-muted-foreground">
                +{LOCATIONS.length - 10} more
              </span>
            </div>
          </div>
          <img
            src={roadsideImg}
            alt="Deep Crane Service roadside assistance in Himachal Pradesh"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </div>
      </Section>
    </>
  );
}
